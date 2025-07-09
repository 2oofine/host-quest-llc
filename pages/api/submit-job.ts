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
        subject: `Job Application: ${position} - ${fullName}`,
        html: `
          <h3>New Job Application</h3>
          <p><strong>Position:</strong> ${position}</p>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>Resume: Attached</p>
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
