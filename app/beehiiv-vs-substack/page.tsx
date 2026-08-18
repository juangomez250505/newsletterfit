import type { Metadata } from "next";
import Link from "next/link";

const BEEHIIV_AFFILIATE_URL =
  "https://www.beehiiv.com/?via=newsletterfit";

export const metadata: Metadata = {
  alternates: {
  canonical: "/beehiiv-vs-substack",
},
  title: "Beehiiv vs Substack (2026): Cost & Fee Comparison | NewsletterFit",
  description:
    "Compare Beehiiv vs Substack pricing, paid subscription fees, growth tools and costs. Use our free calculator to see which platform could save you more.",
};

export default function BeehiivVsSubstack() {
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

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
          Platform Comparison · Updated August 2026
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Beehiiv vs Substack: Which One Actually Costs You Less?
        </h1>

        <p className="mt-6 text-xl leading-8 text-gray-600">
          The answer depends heavily on your audience size and how much money
          your paid subscribers generate. Substack has no monthly platform fee,
          but takes a percentage of paid subscription revenue. Beehiiv uses
          fixed pricing tiers and takes 0% of paid subscription revenue.
        </p>

        <div className="mt-10 rounded-3xl bg-gray-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-wide text-gray-300">
            Quick answer
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Substack can be cheaper when you're starting. Beehiiv can become
            more attractive as paid revenue grows.
          </h2>

          <p className="mt-4 leading-7 text-gray-300">
            There isn't one winner for everyone. The break-even point depends
            on your subscribers, paid members, subscription price and growth.
          </p>

          <Link
            href="/#calculator"
            className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-black"
          >
            Calculate My Best Option →
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Beehiiv vs Substack at a glance
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-4">Category</th>
                  <th className="p-4">Beehiiv</th>
                  <th className="p-4">Substack</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">
                    Paid subscription platform fee
                  </td>
                  <td className="p-4">0%</td>
                  <td className="p-4">10%</td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">
                    Fixed platform cost
                  </td>
                  <td className="p-4">
                    Depends on plan and audience size
                  </td>
                  <td className="p-4">
                    No monthly publishing fee
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">
                    Payment processing
                  </td>
                  <td className="p-4">
                    Payment processor fees apply
                  </td>
                  <td className="p-4">
                    Stripe fees apply
                  </td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="p-4 font-semibold">
                    Built-in reader network
                  </td>
                  <td className="p-4">
                    Newsletter-focused recommendation tools
                  </td>
                  <td className="p-4">
                    Strong built-in publishing and reader ecosystem
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">
                    Best suited for
                  </td>
                  <td className="p-4">
                    Newsletter businesses focused on growth and monetization
                  </td>
                  <td className="p-4">
                    Writers prioritizing simplicity, publishing and discovery
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            The biggest pricing difference
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Substack takes 10% of each paid subscription transaction. That
            means the dollar amount you pay Substack increases as your paid
            newsletter revenue grows.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm text-gray-500">
                Paid revenue
              </p>
              <p className="mt-2 text-3xl font-bold">
                $500/mo
              </p>
              <p className="mt-3 text-gray-600">
                Substack platform fee:
              </p>
              <p className="text-xl font-bold">
                $50/mo
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm text-gray-500">
                Paid revenue
              </p>
              <p className="mt-2 text-3xl font-bold">
                $2,000/mo
              </p>
              <p className="mt-3 text-gray-600">
                Substack platform fee:
              </p>
              <p className="text-xl font-bold">
                $200/mo
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="text-sm text-gray-500">
                Paid revenue
              </p>
              <p className="mt-2 text-3xl font-bold">
                $5,000/mo
              </p>
              <p className="mt-3 text-gray-600">
                Substack platform fee:
              </p>
              <p className="text-xl font-bold">
                $500/mo
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Examples show Substack's 10% platform fee only. Payment processing
            fees are separate.
          </p>
        </section>

        <section className="mt-16 rounded-3xl border border-gray-200 p-8">
          <h2 className="text-3xl font-bold">
            So when does Beehiiv become cheaper?
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            That's exactly why we built NewsletterFit. The answer changes
            depending on how many subscribers you have, how many pay, what
            they pay and how quickly your newsletter grows.
          </p>

          <Link
            href="/#calculator"
            className="mt-7 inline-block rounded-xl bg-black px-7 py-4 text-lg font-semibold text-white"
          >
            Find My Break-Even Point →
          </Link>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Who should choose Beehiiv?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Beehiiv generally becomes more interesting when you're treating
            your newsletter like a business and care heavily about growth,
            monetization and keeping more of your paid subscription revenue.
          </p>

          <a
  href={BEEHIIV_AFFILIATE_URL}
  target="_blank"
  rel="sponsored noopener noreferrer"
  className="mt-6 inline-block rounded-xl bg-black px-7 py-4 font-semibold text-white"
>
  Try Beehiiv →
</a>

<p className="mt-3 text-xs text-gray-500">
  Affiliate link. NewsletterFit may earn a commission at no extra cost to you.
</p>

          <h2 className="mt-12 text-3xl font-bold">
            Who should choose Substack?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Substack can make more sense when you want to start quickly,
            minimize fixed costs and value its publishing, community and
            built-in reader ecosystem.
          </p>
        </section>

        <section className="mt-16 rounded-3xl bg-gray-50 p-8">
          <h2 className="text-3xl font-bold">
            Don't guess. Calculate it.
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            NewsletterFit compares your projected costs across Beehiiv,
            Substack, Kit and Ghost using your actual audience and revenue
            assumptions.
          </p>

          <Link
            href="/#calculator"
            className="mt-7 inline-block rounded-xl bg-black px-7 py-4 font-semibold text-white"
          >
            Use NewsletterFit Free →
          </Link>
        </section>

        <section className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-sm leading-6 text-gray-500">
            Pricing checked August 2026. Platform features and pricing can
            change. NewsletterFit is an independent comparison tool and is not
            affiliated with Beehiiv or Substack.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Sources: official Beehiiv and Substack pricing and comparison
            documentation.
          </p>
        </section>
      </article>
    </main>
  );
}