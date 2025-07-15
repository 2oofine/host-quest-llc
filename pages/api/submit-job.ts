import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import nodemailer from "nodemailer";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const form = new IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("❌ Form parse error:", err);
      return res.status(500).json({ message: "Form parsing error", error: err });
    }

    const { fullName, email, position } = fields;
    const resume = Array.isArray(files.resume) ? files.resume[0] : files.resume;

    if (!fullName || !email || !position || !resume) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: `"Job Application" <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `📩 Job Application: ${position} - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #2c3e50;">New Job Application Received</h2>
            <p>You’ve received a new job application with the following details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px; font-weight: bold;">Position</td>
                <td style="padding: 8px;">${position}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Full Name</td>
                <td style="padding: 8px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Email</td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 8px; font-weight: bold;">Resume</td>
                <td style="padding: 8px;">Attached to this email</td>
              </tr>
            </table>
            <p style="margin-top: 20px;">Please review the resume and respond accordingly.</p>
            <hr style="margin: 30px 0;" />
            <small style="color: #888;">This email was generated automatically by your job application portal.</small>
          </div>
        `,
        attachments: [
          {
            filename: resume.originalFilename || `resume-${position}-${fullName}.pdf`,
            content: fs.createReadStream(resume.filepath),
          },
        ],
      });

      res.status(200).json({ message: "Application submitted successfully." });
    } catch (error) {
      console.error("❌ Email send error:", error);
      res.status(500).json({ message: "Failed to send email", error });
    }
  });
}
