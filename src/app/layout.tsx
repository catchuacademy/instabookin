import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SessionWrapper from './SessionWrapper';
import "./globals.css";
import LayoutWrapper from './LayoutWrapper';
import { Toaster } from "@/components/ui/sonner"
import { LoaderProvider } from "@/context/LoaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EC-Auto",
  description: "Easy Auto Booking Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <LoaderProvider>
      <SessionWrapper>
        {children}
        <Toaster />
      </SessionWrapper>
      </LoaderProvider>
      </body>
    </html>
  );
}
