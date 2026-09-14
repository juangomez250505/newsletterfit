import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  alternates: {
  canonical: "/substack-fee-calculator",
},
  title: "Substack Fee Calculator (2026): Fees & Earnings | NewsletterFit",
  description: "Calculate Substack fees and see how much Substack takes from paid subscriptions. Compare fees at different subscriber counts and subscription prices.",
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
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white brand-swipe"
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
          Substack Fee Calculator: See How Much Substack Takes
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
            className="mt-7 inline-block rounded-xl bg-black px-7 py-4 text-lg font-semibold text-white brand-swipe"
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

        {/* SEO-SUBSTACK-FEE-EXPANSION-20260914 */}
        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold">
            How much does Substack take?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Substack takes <strong>10% of every paid subscription
            transaction</strong>. Payment processing fees from Stripe are
            charged separately, so the amount you actually keep is lower than
            90% of gross subscription revenue.
          </p>

          <p className="mt-5 leading-7 text-gray-700">
            The percentage becomes increasingly important as your paid
            newsletter grows. A creator making $500 per month pays $50 per
            month to Substack before Stripe fees. At $5,000 per month, the
            Substack platform fee alone reaches $500 every month.
          </p>

          <h2 className="mt-12 text-3xl font-bold">
            Substack fee examples
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[700px] text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-4 font-semibold">Example</th>
                  <th className="px-5 py-4 font-semibold">Monthly revenue</th>
                  <th className="px-5 py-4 font-semibold">Substack 10% fee</th>
                  <th className="px-5 py-4 font-semibold">
                    Revenue after Substack fee
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-5 py-4">
                    100 paid subscribers × $5
                  </td>
                  <td className="px-5 py-4">$500</td>
                  <td className="px-5 py-4">$50</td>
                  <td className="px-5 py-4">$450 before Stripe</td>
                </tr>

                <tr>
                  <td className="px-5 py-4">
                    100 paid subscribers × $10
                  </td>
                  <td className="px-5 py-4">$1,000</td>
                  <td className="px-5 py-4">$100</td>
                  <td className="px-5 py-4">$900 before Stripe</td>
                </tr>

                <tr>
                  <td className="px-5 py-4">
                    500 paid subscribers × $5
                  </td>
                  <td className="px-5 py-4">$2,500</td>
                  <td className="px-5 py-4">$250</td>
                  <td className="px-5 py-4">$2,250 before Stripe</td>
                </tr>

                <tr>
                  <td className="px-5 py-4">
                    500 paid subscribers × $10
                  </td>
                  <td className="px-5 py-4">$5,000</td>
                  <td className="px-5 py-4">$500</td>
                  <td className="px-5 py-4">$4,500 before Stripe</td>
                </tr>

                <tr>
                  <td className="px-5 py-4">
                    1,000 paid subscribers × $10
                  </td>
                  <td className="px-5 py-4">$10,000</td>
                  <td className="px-5 py-4">$1,000</td>
                  <td className="px-5 py-4">$9,000 before Stripe</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            These examples show Substack&apos;s 10% platform fee only.
            Stripe payment-processing fees are additional and can vary.
          </p>

          <h2 className="mt-12 text-3xl font-bold">
            What does Substack cost per month?
          </h2>

          <p className="mt-5 leading-7 text-gray-700">
            Publishing a free newsletter on Substack does not require a
            monthly software subscription. The main cost starts when you
            enable paid subscriptions: Substack takes 10% of each paid
            transaction instead of charging creators a fixed monthly platform
            fee.
          </p>

          <p className="mt-5 leading-7 text-gray-700">
            That can be inexpensive when paid revenue is very small, but the
            cost scales directly with your income. At $10,000 in monthly paid
            subscription revenue, the Substack platform fee alone is $1,000
            per month.
          </p>

          <h2 className="mt-12 text-3xl font-bold">
            Substack fees vs Beehiiv
          </h2>

          <p className="mt-5 leading-7 text-gray-700">
            Substack uses a percentage-based model, while Beehiiv&apos;s paid
            plans use a fixed subscription price and take 0% of paid
            subscription revenue. This means the cheaper option can change as
            your newsletter starts generating more money.
          </p>

          <p className="mt-5 leading-7 text-gray-700">
            See our{" "}
            <a
              href="/beehiiv-vs-substack"
              className="font-semibold text-[#2860B8] underline underline-offset-4"
            >
              Beehiiv vs Substack fee and break-even comparison
            </a>{" "}
            to see where the economics begin to change.
          </p>

          <h2 className="mt-12 text-3xl font-bold">
            Substack fees FAQ
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-xl font-bold">
                What percentage does Substack take?
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Substack takes 10% of paid subscription transactions. Stripe
                payment-processing fees are charged separately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Is Substack free?
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Substack is free for creators publishing free newsletters.
                Fees begin when you monetize through paid subscriptions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                How much does Substack take from $1,000?
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                Substack&apos;s 10% platform fee on $1,000 of paid subscription
                revenue is $100. Stripe fees are additional.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                How much does Substack take from $10,000?
              </h3>
              <p className="mt-3 leading-7 text-gray-700">
                At $10,000 in paid subscription revenue, Substack&apos;s 10%
                platform fee is $1,000 before Stripe processing fees.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Fee information reviewed in September 2026. Platform and
            payment-processing fees can change.
          </p>
        </section>


</main>
  );
}