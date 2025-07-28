// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://hostquestllc.com";

  const staticPages = [
    "/", // homepage
    "/about-us",
    "/contact-us",
    "/employers",
    "/job-seekers",
    "/services",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map((page) => {
    return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
