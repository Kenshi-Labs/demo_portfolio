import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { elMessiri, manrope, poppins } from "./font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRMA Portfolio",
  description:
    "BRMA (Bengal Rice Millers Association) is a unified platform empowering rice millers across West Bengal through innovation, advocacy, modernization, and industry-wide collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${elMessiri.variable} ${manrope.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
