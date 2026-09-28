import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter Platform Pricing Compared (2026): Fees & Costs | NewsletterFit",
  description:
    "Compare newsletter platform pricing and fees for Beehiiv, Substack, Kit, Ghost, MailerLite and GetResponse in 2026.",
  alternates: {
    canonical: "/newsletter-platform-pricing",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "NewsletterFit",
      item: "https://getnewsletterfit.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Newsletter Platform Pricing",
      item: "https://getnewsletterfit.com/newsletter-platform-pricing",
    },
  ],
};

export default function NewsletterPlatformPricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-[#2860B8] hover:underline"
        >
          ← NewsletterFit Calculator
        </Link>

        <p className="mt-10 text-sm font-bold uppercase tracking-wide text-gray-500">
          Pricing guide · Updated September 2026
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Newsletter Platform Pricing Compared in 2026
        </h1>

        <p className="mt-6 text-xl leading-8 text-gray-600">
          Newsletter platform pricing is harder to compare than it first
          appears. Some platforms charge a fixed monthly subscription, some
          scale with audience size, and others take a percentage of paid
          newsletter revenue.
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">
            Newsletter platform pricing at a glance
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[820px] text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-4 font-semibold">Platform</th>
                  <th className="px-5 py-4 font-semibold">Entry pricing</th>
                  <th className="px-5 py-4 font-semibold">Free-plan limit</th>
                  <th className="px-5 py-4 font-semibold">Paid revenue fee</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-5 py-4 font-semibold">Beehiiv</td>
                  <td className="px-5 py-4">
                    Scale shown from about $43/month billed annually at the displayed tier
                  </td>
                  <td className="px-5 py-4">2,500 subscribers</td>
                  <td className="px-5 py-4">
                    0% Beehiiv take rate on paid subscriptions on Scale
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">Kit</td>
                  <td className="px-5 py-4">
                    Creator $33/month at 1,000 subscribers when billed yearly
                  </td>
                  <td className="px-5 py-4">Up to 10,000 subscribers</td>
                  <td className="px-5 py-4">
                    3.5% + $0.30 per USD transaction
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">Substack</td>
                  <td className="px-5 py-4">
                    No standard monthly software fee to publish
                  </td>
                  <td className="px-5 py-4">
                    Publishing can start without a paid software plan
                  </td>
                  <td className="px-5 py-4">
                    10% platform fee on paid subscription revenue, plus processing
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">Ghost</td>
                  <td className="px-5 py-4">
                    Starter $18/month; Publisher $29/month billed yearly
                  </td>
                  <td className="px-5 py-4">
                    No permanent free Ghost(Pro) hosting plan
                  </td>
                  <td className="px-5 py-4">
                    0% Ghost transaction fee on Publisher and above
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">MailerLite</td>
                  <td className="px-5 py-4">
                    Paid plans currently start from $12/month
                  </td>
                  <td className="px-5 py-4">
                    250 subscribers / 2,500 monthly emails
                  </td>
                  <td className="px-5 py-4">
                    No MailerLite commission on digital-product sales; processing applies
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">GetResponse</td>
                  <td className="px-5 py-4">
                    Starter from $15.58/month billed yearly
                  </td>
                  <td className="px-5 py-4">
                    14-day free trial
                  </td>
                  <td className="px-5 py-4">
                    Premium newsletters available on Creator
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Prices vary by subscriber count, plan, region and billing cycle.
            Figures are reference prices reviewed in September 2026 rather
            than a guarantee of your exact bill.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Fixed monthly pricing vs percentage-based fees
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            The biggest pricing difference is not always the advertised
            monthly price. A fixed software subscription behaves very
            differently from a platform that takes a percentage of
            subscription revenue.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold">Fixed or tiered pricing</h3>
              <p className="mt-3 leading-7 text-gray-700">
                Beehiiv, Ghost, MailerLite, GetResponse and Kit paid software
                plans generally charge based on a plan and/or audience tier.
                Your software bill changes when you move into a new tier.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold">Percentage pricing</h3>
              <p className="mt-3 leading-7 text-gray-700">
                Substack&apos;s 10% platform fee increases directly with paid
                subscription revenue. A newsletter generating $5,000 per month
                pays $500 per month to Substack before payment processing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            When does a fixed plan become cheaper than Substack?
          </h2>

          <p className="mt-5 leading-7 text-gray-700">
            A simplified platform-fee comparison makes the difference easy to
            see. This ignores payment-processing costs and future subscriber
            tier changes, so it should be treated as a directional break-even
            calculation rather than a full invoice estimate.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[680px] text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-4 font-semibold">Alternative</th>
                  <th className="px-5 py-4 font-semibold">Reference monthly cost</th>
                  <th className="px-5 py-4 font-semibold">
                    Approx. Substack revenue break-even
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-5 py-4 font-semibold">
                    Beehiiv Scale
                  </td>
                  <td className="px-5 py-4">
                    About $43/month on annual billing at the displayed tier
                  </td>
                  <td className="px-5 py-4">
                    About $430/month in paid revenue
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-semibold">
                    Ghost Publisher
                  </td>
                  <td className="px-5 py-4">
                    $29/month billed yearly at 1,000 members
                  </td>
                  <td className="px-5 py-4">
                    About $290/month in paid revenue
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Example: 10% of $430 is $43 and 10% of $290 is $29. Payment
            processing still applies and Beehiiv/Ghost pricing changes at
            higher audience tiers.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Beehiiv pricing
          </h2>

          <p className="mt-5 leading-7 text-gray-700">
            Beehiiv currently offers a free Launch plan for up to 2,500
            subscribers with unlimited email sends. Scale adds monetization,
            automations, advanced analytics and a 0% Beehiiv take rate on paid
            subscriptions.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/beehiiv-alternatives"
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold"
            >
              Beehiiv alternatives →
            </Link>

            <Link
              href="/beehiiv-vs-substack"
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold"
            >
              Beehiiv vs Substack →
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Kit pricing</h2>

          <p className="mt-5 leading-7 text-gray-700">
            Kit&apos;s Free plan currently supports up to 10,000 subscribers.
            At 1,000 subscribers, Creator is listed at $33 per month when
            billed yearly. Kit Commerce charges 3.5% + $0.30 per USD
            transaction, including card processing.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/convertkit-alternatives"
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold"
            >
              ConvertKit alternatives →
            </Link>

            <Link
              href="/kit-vs-substack"
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold"
            >
              Kit vs Substack →
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Substack pricing</h2>

          <p className="mt-5 leading-7 text-gray-700">
            Substack is unusual because creators can publish without a normal
            monthly software subscription, but paid publications generally pay
            a 10% platform fee on subscription revenue. Payment-processing
            charges are separate.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/substack-fee-calculator"
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold"
            >
              Calculate Substack fees →
            </Link>

            <Link
              href="/substack-alternatives"
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold"
            >
              Substack alternatives →
            </Link>
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-black p-8 text-white">
          <h2 className="text-3xl font-bold">
            Your exact newsletter can produce a different answer
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-300">
            Enter your subscribers, paid members, subscription price and growth
            assumptions to compare estimated platform costs using your own
            numbers.
          </p>

          <Link
            href="/#calculator"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Use the free NewsletterFit calculator →
          </Link>
        </section>

        <section className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold">Methodology and sources</h2>

          <p className="mt-4 leading-7 text-gray-700">
            NewsletterFit checks publicly available provider pricing and
            documentation. We separate monthly software pricing from
            transaction fees because they behave differently as a newsletter
            grows.
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <p>
              <a href="https://www.beehiiv.com/pricing" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2860B8] underline">
                Beehiiv pricing
              </a>
            </p>
            <p>
              <a href="https://kit.com/pricing" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2860B8] underline">
                Kit pricing
              </a>
            </p>
            <p>
              <a href="https://ghost.org/pricing/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2860B8] underline">
                Ghost pricing
              </a>
            </p>
            <p>
              <a href="https://www.mailerlite.com/pricing" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2860B8] underline">
                MailerLite pricing
              </a>
            </p>
            <p>
              <a href="https://www.getresponse.com/pricing" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2860B8] underline">
                GetResponse pricing
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
