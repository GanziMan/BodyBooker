import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutClient from "./layoutClient";
import { ToastProvider } from "./Provider/ToastProvider";
import PageContainer from "@/components/PageContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SERA",
  description: "바디프로필 예약 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider />
        <PageContainer>
          <LayoutClient />
          {children}
        </PageContainer>
      </body>
    </html>
  );
}
