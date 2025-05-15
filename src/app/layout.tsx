import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_DESCRIPTION, APP_NAME, NEXT_PUBLIC_CLIENT_BASE_URL } from "@/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: `%s | Host Quest LLC`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(NEXT_PUBLIC_CLIENT_BASE_URL),
  icons: {
    icon: "/logos/logo.svg",
  },
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="bg-primary-dark text-secondary-light">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
