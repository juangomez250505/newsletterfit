import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getnewsletterfit.com"),

  title: "Newsletter Platform Cost Calculator | NewsletterFit",

  description:
    "Compare Beehiiv, Substack, Kit and Ghost based on your subscribers, paid members and growth. See which newsletter platform could save you more.",

verification: {
  google: [
    "wd0o8oa9fCZ83GJSbXFmKZ0nrpwzyDxcQpjjbfifj8Y",
    "1TQqwZILmdlT-21LL90ZW6K8HhICexhDAxKQoAKQ9OY",
  ],
},

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
      <body>
  {children}

  <footer className="border-t border-gray-200 bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} NewsletterFit. All rights reserved.
      </p>

      <div className="flex flex-wrap gap-5">
        <Link href="/privacy" className="hover:text-black">
          Privacy
        </Link>

        <Link href="/terms" className="hover:text-black">
          Terms
        </Link>

        <Link
          href="/affiliate-disclosure"
          className="hover:text-black"
        >
          Affiliate Disclosure
        </Link>
      </div>
    </div>
  </footer>
</body>
    </html>
  );
}
