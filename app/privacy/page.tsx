import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NewsletterFit",
  description:
    "Learn how NewsletterFit handles information and protects your privacy.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold">
            NewsletterFit
          </Link>

          <Link
            href="/#calculator"
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white"
          >
            Free Calculator
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
          Your privacy
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          NewsletterFit is designed to help newsletter creators compare
          platforms while collecting as little personal information as
          reasonably possible.
        </p>

        <section className="mt-12 space-y-10 text-lg leading-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Calculator information
            </h2>

            <p className="mt-3">
              Information entered into the NewsletterFit calculator is used to
              generate platform comparisons and estimates. The calculator
              currently performs these calculations directly in your browser,
              and NewsletterFit does not intentionally store the values you
              enter.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Technical information
            </h2>

            <p className="mt-3">
              Like most websites, our hosting and infrastructure providers may
              process standard technical information such as IP addresses,
              browser type, device information, request logs and similar data
              necessary to operate, secure and maintain the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Affiliate links
            </h2>

            <p className="mt-3">
              NewsletterFit contains affiliate links. When you click an
              affiliate link, the destination website may use cookies or other
              tracking technologies to determine that your visit came from
              NewsletterFit.
            </p>

            <p className="mt-3">
              These third-party services operate under their own privacy
              policies and terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Analytics and third-party services
            </h2>

            <p className="mt-3">
              NewsletterFit may use analytics or other third-party services in
              the future to understand website traffic and improve the site.
              This Privacy Policy may be updated when new services are added.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Changes to this policy
            </h2>

            <p className="mt-3">
              We may update this Privacy Policy as NewsletterFit grows or as
              our tools and services change. The latest version will always be
              published on this page.
            </p>
          </div>
        </section>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link href="/" className="font-semibold underline">
            ← Back to NewsletterFit
          </Link>
        </div>
      </article>
    </main>
  );
}