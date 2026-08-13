import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newsletter Platform Cost Calculator | NewsletterFit",

  description:
    "Compare Beehiiv, Substack, Kit and Ghost based on your subscribers, paid members and growth. See which newsletter platform could save you more.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Newsletter Platform Cost Calculator | NewsletterFit",
    description:
      "Compare newsletter platform costs and find the best fit for your audience, revenue and growth.",
    type: "website",
    siteName: "NewsletterFit",
  },

  twitter: {
    card: "summary_large_image",
    title: "Newsletter Platform Cost Calculator | NewsletterFit",
    description:
      "Compare Beehiiv, Substack, Kit and Ghost and see which platform could leave you with more money.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
