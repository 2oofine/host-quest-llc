import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Allow: /
Sitemap: https://hostquestllc.com/sitemap.xml
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
