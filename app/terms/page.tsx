import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | NewsletterFit",
  description:
    "Terms and conditions for using NewsletterFit and its newsletter platform comparison tools.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
          Terms
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Terms of Use
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          By using NewsletterFit, you agree to the following terms.
        </p>

        <section className="mt-12 space-y-10 text-lg leading-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Informational purposes
            </h2>

            <p className="mt-3">
              NewsletterFit provides calculators, comparisons and educational
              information designed to help users evaluate newsletter platforms.
              The information provided on this website is for general
              informational purposes only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Estimates and pricing
            </h2>

            <p className="mt-3">
              Calculations shown by NewsletterFit are estimates based on the
              information entered by the user and the pricing assumptions
              available to us.
            </p>

            <p className="mt-3">
              Platform pricing, transaction fees, features and policies may
              change at any time. You should verify important information
              directly with the platform before making a purchase or migration
              decision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              No guarantee of results
            </h2>

            <p className="mt-3">
              NewsletterFit does not guarantee that choosing a particular
              platform will increase revenue, reduce costs or produce any
              specific business result.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Affiliate relationships
            </h2>

            <p className="mt-3">
              Some links on NewsletterFit are affiliate links. We may receive a
              commission when a user signs up for or purchases a service
              through one of these links, at no additional cost to the user.
            </p>

            <p className="mt-3">
              More information is available in our{" "}
              <Link
                href="/affiliate-disclosure"
                className="font-semibold underline"
              >
                Affiliate Disclosure
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Third-party services
            </h2>

            <p className="mt-3">
              NewsletterFit links to third-party websites and services. We do
              not control those services and are not responsible for their
              availability, pricing, content, policies or actions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950">
              Changes to these terms
            </h2>

            <p className="mt-3">
              We may update these Terms of Use as NewsletterFit evolves. The
              latest version will be published on this page.
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