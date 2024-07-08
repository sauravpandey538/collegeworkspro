import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CollegeWorksPro",
  description: "Assignment helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log()
  return (
    <html lang="en">
      <head>
        {/* logo not working */}
        <link rel="icon" href="/new.png" type="image/jpg" sizes="16x16" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
