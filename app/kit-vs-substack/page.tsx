import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ConvertKit vs Substack (2026): Pricing, Fees & Features | NewsletterFit",
  description:
    "Compare ConvertKit (Kit) vs Substack pricing, fees and paid newsletter costs. See real fee examples at $500, $1K, $2K and $5K monthly revenue.",
  alternates: {
    canonical: "/kit-vs-substack",
  },
};

export default function KitVsSubstackPage() {
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
            Free Calculator
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
          Platform comparison
        </p>

        <div className="platform-comparison-logos mt-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/logos/kit.png"
              alt=""
              className="h-8 w-8 object-contain"
            />
          </div>

          <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
            vs
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/logos/substack.png"
              alt=""
              className="h-8 w-8 object-contain"
            />
          </div>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Kit (formerly ConvertKit) vs Substack: Which Is Better in 2026?
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Kit, formerly known as ConvertKit, and Substack can both work for
          newsletter creators, but they are built for different types of
          businesses. If you are comparing ConvertKit vs Substack, the biggest
          differences are fees, automation, audience ownership and how each
          platform helps you monetize. Substack focuses on simple publishing
          and paid subscriptions, while Kit gives creators more control over
          email marketing, automations and audience management.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Last reviewed: September 2026
        </p>

        <section className="mt-12 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-2xl font-bold">Quick answer</h2>

          <p className="mt-4 leading-7 text-gray-700">
            Choose <strong>Substack</strong> if you want the easiest possible
            setup and do not mind paying a percentage of your subscription
            revenue.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Choose <strong>Kit</strong> if you want more control over your
            email list, automations and creator business as it grows.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">
            ConvertKit (Kit) vs Substack at a glance
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-4 pr-6">Feature</th>
                  <th className="py-4 pr-6">Kit</th>
                  <th className="py-4">Substack</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">Free plan</td>
                  <td className="py-4 pr-6">Yes</td>
                  <td className="py-4">Yes</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Paid newsletter transaction fees
                  </td>
                  <td className="py-4 pr-6">
                    3.5% + $0.30 per USD transaction, including card processing
                  </td>
                  <td className="py-4">
                    10% platform fee + payment processing
                  </td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Advanced email automations
                  </td>
                  <td className="py-4 pr-6">Strong</td>
                  <td className="py-4">Limited</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Built-in discovery
                  </td>
                  <td className="py-4 pr-6">Limited</td>
                  <td className="py-4">Strong</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Best for
                  </td>
                  <td className="py-4 pr-6">
                    Creator businesses and email marketing
                  </td>
                  <td className="py-4">
                    Simple publishing and paid newsletters
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
            <h2 className="text-3xl font-bold">
              ConvertKit vs Substack fees: how much do you actually keep?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              The biggest financial difference between Kit and Substack appears
              once you start charging readers. Substack currently takes
              <strong> 10% of paid subscription revenue</strong>, before payment
              processing. Kit Commerce charges
              <strong> 3.5% + $0.30 per USD transaction</strong>, with card
              processing included.
            </p>

            <p className="mt-5 leading-7 text-gray-700">
              Kit Commerce is available on the Free plan, so you can start a
              paid newsletter without first paying a monthly software fee.
              Substack is also free to publish on, but its percentage-based fee
              grows directly with your paid revenue.
            </p>

            <h3 className="mt-10 text-2xl font-bold">
              Real fee examples: 100 paid subscribers
            </h3>

            <p className="mt-4 leading-7 text-gray-700">
              To make the comparison concrete, assume you have 100 paid
              subscribers billed once per month. Kit&apos;s estimates below use
              its current USD fee of 3.5% + $0.30 per transaction. Substack
              shows its 10% platform fee only; Stripe processing is additional.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[850px] text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 font-semibold">
                      Price per subscriber
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      Monthly revenue
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      Kit estimated fees
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      Substack platform fee
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      Difference before Stripe
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-5 py-4">$5</td>
                    <td className="px-5 py-4">$500</td>
                    <td className="px-5 py-4">~$47.50</td>
                    <td className="px-5 py-4">$50 + Stripe</td>
                    <td className="px-5 py-4">
                      Kit lower by ~$2.50 before Stripe
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4">$10</td>
                    <td className="px-5 py-4">$1,000</td>
                    <td className="px-5 py-4">~$65</td>
                    <td className="px-5 py-4">$100 + Stripe</td>
                    <td className="px-5 py-4">
                      <strong>Kit lower by ~$35 before Stripe</strong>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4">$20</td>
                    <td className="px-5 py-4">$2,000</td>
                    <td className="px-5 py-4">~$100</td>
                    <td className="px-5 py-4">$200 + Stripe</td>
                    <td className="px-5 py-4">
                      <strong>Kit lower by ~$100 before Stripe</strong>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4">$50</td>
                    <td className="px-5 py-4">$5,000</td>
                    <td className="px-5 py-4">~$205</td>
                    <td className="px-5 py-4">$500 + Stripe</td>
                    <td className="px-5 py-4">
                      <strong>Kit lower by ~$295 before Stripe</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              These examples assume 100 monthly USD transactions. Substack
              payment-processing fees are additional and vary by payment
              method, country and currency.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-7">
              <h3 className="text-xl font-bold">
                Why revenue changes the answer
              </h3>

              <p className="mt-3 leading-7 text-gray-700">
                At $500 per month, the platform-fee difference is small before
                Stripe. At $5,000 per month, Substack&apos;s 10% platform fee
                alone reaches $500 every month, while the same 100 monthly
                transactions would cost roughly $205 through Kit Commerce.
              </p>

              <p className="mt-4 leading-7 text-gray-700">
                That is why paid newsletter creators should compare fees using
                their own subscriber count and subscription price instead of
                choosing only by headline monthly pricing.
              </p>
            </div>

            <p className="mt-6 leading-7 text-gray-700">
              Use the{" "}
              <Link
                href="/substack-fee-calculator"
                className="font-semibold text-[#2860B8] underline underline-offset-4"
              >
                NewsletterFit Substack Fee Calculator
              </Link>{" "}
              to test your own numbers.
            </p>

            <div className="mt-8 border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
              <p>
                Fees reviewed in September 2026 using official provider
                documentation.
              </p>

              <p className="mt-2">
                Sources:{" "}
                <a
                  href="https://kit.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Kit pricing
                </a>
                {" · "}
                <a
                  href="https://help.kit.com/en/articles/4199324-sell-digital-products-with-kit-overview-and-faqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Kit Commerce
                </a>
                {" · "}
                <a
                  href="https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Substack fees
                </a>
              </p>
            </div>
          </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">When Kit makes more sense</h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Kit becomes especially attractive if your newsletter is part of a
            larger creator business. It gives you more tools for segmenting
            subscribers, creating email sequences and automating how people
            move through your audience.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            That can make Kit a better fit for creators selling courses,
            products, memberships or services in addition to a newsletter.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">When Substack makes more sense</h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Substack is appealing if your priority is to start publishing
            quickly without dealing with many technical or marketing
            decisions.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Its built-in network and discovery features can also help writers
            who want their publication to live inside the Substack ecosystem.
          </p>
        </section>

        <section className="mt-14 rounded-2xl bg-black p-8 text-white">
          <h2 className="text-3xl font-bold">
            Not sure which one is cheaper for you?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-300">
            Enter your subscriber count, paid subscribers and monthly price
            into the NewsletterFit calculator to compare estimated platform
            costs based on your own numbers.
          </p>

          <Link
            href="/#calculator"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black brand-swipe"
          >
            Compare newsletter platforms →
          </Link>
        </section>

        <section className="mt-14">
            <h2 className="text-3xl font-bold">
              ConvertKit vs Substack FAQ
            </h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-bold">
                  Does Substack take 10% of subscriptions?
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Yes. Substack currently charges creators a 10% platform fee
                  on paid subscription transactions. Payment-processing fees
                  from Stripe are additional.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Can you sell paid newsletters on Kit&apos;s free plan?
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Yes. Kit Commerce is available on the Free plan. USD sales
                  currently cost 3.5% + $0.30 per transaction, including card
                  processing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Is ConvertKit now called Kit?
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Yes. ConvertKit rebranded to Kit. People still search for
                  ConvertKit, so NewsletterFit uses both names where helpful.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Which platform gives creators more automation?
                </h3>
                <p className="mt-3 leading-7 text-gray-700">
                  Kit provides deeper email segmentation, visual automations
                  and sequences. Substack focuses more heavily on publishing,
                  simplicity and built-in discovery.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14">
          <h2 className="text-3xl font-bold">Bottom line</h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Substack is usually easier for creators who want a simple
            publishing experience. Kit is generally the stronger option for
            creators who want more control, automation and flexibility as
            their business grows.
          </p>

          <p className="mt-5 text-sm leading-6 text-gray-500">
            Pricing and features can change. Always verify current pricing and
            product details directly with each provider before making a final
            decision.
          </p>

          <a
            href="https://partners.kit.com/8lueyf7s9npm"
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-black px-7 py-4 font-semibold text-white brand-swipe"
          >
            Try Kit →
          </a>

          <p className="mt-3 text-xs text-gray-500">
            Affiliate link. NewsletterFit may earn a commission at no extra cost to you.
          </p>

        </section>

<section className="mt-14 border-t border-gray-200 pt-10">
  <h2 className="text-2xl font-bold">Related comparisons</h2>

  <div className="mt-5 flex flex-wrap gap-4">
    <Link
      href="/beehiiv-vs-kit"
      className="rounded-xl border border-gray-200 px-4 py-3 font-semibold brand-swipe"
    >
      Beehiiv vs Kit →
    </Link>

    <Link
      href="/beehiiv-vs-substack"
      className="rounded-xl border border-gray-200 px-4 py-3 font-semibold brand-swipe"
    >
      Beehiiv vs Substack →
    </Link>

    <Link
      href="/kit-vs-ghost"
      className="rounded-xl border border-gray-200 px-4 py-3 font-semibold brand-swipe"
    >
      Kit vs Ghost →
    </Link>
  </div>
</section>

      </article>

      {/* SEO-ALL-COMPARISONS-LINK */}
      <div className="mx-auto max-w-5xl px-6 pb-12">
        <Link
          href="/comparisons"
          className="inline-flex items-center font-semibold text-[#2860B8] transition hover:translate-x-1"
        >
          View all newsletter platform comparisons →
        </Link>
      </div>

</main>
  );
}
