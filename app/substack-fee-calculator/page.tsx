import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Substack Fee Calculator (2026) | NewsletterFit",
  description:
    "Calculate Substack's 10% fee plus estimated Stripe payment fees. See how much of your paid newsletter revenue you could keep.",
};

export default function SubstackFeeCalculator() {
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
            Compare Platforms
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
          Free Calculator · Updated August 2026
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
          How much does Substack actually take?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600">
          Calculate Substack's platform fee and estimated Stripe fees based on
          your paid subscribers and subscription price.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <Calculator />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gray-50 p-8">
          <h2 className="text-3xl font-bold">
            Why does this matter?
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Substack is free to publish on, but paid newsletters normally pay
            a percentage of subscription revenue. As your paid newsletter
            grows, that percentage can become a meaningful expense.
          </p>

          <h2 className="mt-10 text-3xl font-bold">
            Could another platform cost less?
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Potentially. NewsletterFit compares Substack with Beehiiv, Kit and
            Ghost using your audience size, paid subscribers and expected
            growth.
          </p>

          <Link
            href="/#calculator"
            className="mt-7 inline-block rounded-xl bg-black px-7 py-4 text-lg font-semibold text-white"
          >
            Compare My Platforms →
          </Link>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <p className="text-sm leading-6 text-gray-500">
            This calculator currently uses standard U.S. Stripe card pricing.
            Fees can differ by country and payment method. Some countries may
            also have temporary exceptions to Substack's standard application
            fee.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            NewsletterFit is an independent comparison tool and is not
            affiliated with Substack or Stripe.
          </p>
        </div>
      </section>
    </main>
  );
}