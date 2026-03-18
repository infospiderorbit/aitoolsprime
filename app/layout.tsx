import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tools Prime - Discover The Best AI Tools",
  description: "Browse 5000+ AI tools across 20+ categories. Find the perfect AI tool for writing, image generation, video, coding, marketing and more.",
  keywords: "AI tools, artificial intelligence, best AI tools, AI directory",
  openGraph: {
    title: "AI Tools Prime - Discover The Best AI Tools",
    description: "Browse 5000+ AI tools across 20+ categories.",
    url: "https://www.aitoolsprime.com",
    siteName: "AI Tools Prime",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Prime",
    description: "Browse 5000+ AI tools across 20+ categories.",
  },
  alternates: {
    canonical: "https://www.aitoolsprime.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}