import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react"; // <--- ADDED THIS to fix the "React" error
import Navbar from "../components/Navbar"; // <--- CHANGED THIS from "@/" to "../"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vidi Agency | Web + AI Automation",
  description: "Full-service website development and AI automation systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}