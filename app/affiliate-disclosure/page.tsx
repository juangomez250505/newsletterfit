import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | NewsletterFit",
  description:
    "Learn how NewsletterFit uses affiliate links and how commissions may support the site.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
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
          Transparency
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Affiliate Disclosure
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          NewsletterFit is an independent comparison website. Some links on
          this website are affiliate links.
        </p>

        <section className="mt-10 space-y-6 text-lg leading-8 text-gray-700">
          <p>
            This means that if you click one of these links and sign up for or
            purchase a product or service, NewsletterFit may receive a
            commission.
          </p>

          <p>
            Using an affiliate link does not increase the price you pay.
          </p>

          <p>
            Affiliate relationships do not determine how platforms are ranked
            in NewsletterFit. Our calculator is designed to compare platforms
            based on the inputs, pricing information and assumptions included
            in the tool.
          </p>

          <p>
            We may earn commissions from some platforms we mention, while
            other platforms may not have an affiliate relationship with us.
            A platform does not automatically rank higher because it pays a
            commission.
          </p>

          <p>
            Pricing, features and affiliate programs can change over time. We
            aim to review our information regularly, but users should confirm
            important pricing and product details directly with the provider
            before making a purchase decision.
          </p>
        </section>

        <div className="mt-12 rounded-2xl bg-gray-50 p-6">
          <p className="font-semibold">
            Our goal is simple:
          </p>

          <p className="mt-2 leading-7 text-gray-600">
            Help newsletter creators compare their options while being clear
            about how NewsletterFit may make money.
          </p>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link href="/" className="font-semibold underline">
            ← Back to NewsletterFit
          </Link>
        </div>
      </article>
    </main>
  );
}