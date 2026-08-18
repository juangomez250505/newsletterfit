import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Substack vs Ghost (2026): Fees, Pricing & Best Choice | NewsletterFit",
  description:
    "Compare Substack vs Ghost for paid newsletters, memberships, fees, publishing and website control.",
  alternates: {
    canonical: "/substack-vs-ghost",
  },
};

export default function SubstackVsGhostPage() {
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
          Platform comparison
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Substack vs Ghost: Which is better for a paid newsletter?
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Substack and Ghost can both power paid newsletters, but their
          business models are very different. Substack makes it extremely easy
          to start and charges a percentage of paid subscription revenue.
          Ghost charges a fixed hosting subscription and does not take an
          additional platform percentage from your subscription revenue.
        </p>

        <section className="mt-12 rounded-2xl bg-gray-50 p-8">
          <h2 className="text-2xl font-bold">Quick answer</h2>

          <p className="mt-4 leading-7 text-gray-700">
            Choose <strong>Substack</strong> if you want a simple publishing
            experience, built-in discovery and almost no setup.
          </p>

          <p className="mt-4 leading-7 text-gray-700">
            Choose <strong>Ghost</strong> if you want more control over your
            website and would rather pay a fixed platform cost instead of
            giving up a percentage of subscription revenue.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">Substack vs Ghost at a glance</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-4 pr-6">Feature</th>
                  <th className="py-4 pr-6">Substack</th>
                  <th className="py-4">Ghost</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Start publishing
                  </td>
                  <td className="py-4 pr-6">Free</td>
                  <td className="py-4">Paid hosting</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Platform fee on paid subscriptions
                  </td>
                  <td className="py-4 pr-6">
                    10% standard fee*
                  </td>
                  <td className="py-4">0%</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Website customization
                  </td>
                  <td className="py-4 pr-6">Limited</td>
                  <td className="py-4">Strong</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">
                    Built-in discovery
                  </td>
                  <td className="py-4 pr-6">Strong</td>
                  <td className="py-4">More independent</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-semibold">Best for</td>
                  <td className="py-4 pr-6">
                    Writers wanting simplicity and discovery
                  </td>
                  <td className="py-4">
                    Independent publishers wanting more control
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-5 text-gray-500">
            *Substack&apos;s standard 10% application fee has country-specific
            exceptions. Payment processing fees may also apply.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">
            The biggest difference: revenue share
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            For most creators using paid subscriptions, Substack charges a 10%
            platform fee on each paid transaction, in addition to applicable
            payment processing fees.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Ghost takes a different approach. Ghost(Pro) requires a paid plan
            for paid subscriptions, but Ghost itself charges 0% transaction
            fees. Payment processor fees still apply.
          </p>

          <div className="mt-8 rounded-2xl border border-gray-200 p-7">
            <h3 className="text-xl font-bold">
              Example: $5,000/month in subscription revenue
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              At the standard Substack rate, the 10% platform fee alone would
              equal approximately <strong>$500 per month</strong>, before
              applicable payment processing costs.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">
            When Substack makes more sense
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Substack can be a strong option if you want to start publishing
            immediately and value access to its existing network of readers,
            recommendations and discovery features.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            The percentage-based pricing also means there is little platform
            cost before you start earning from paid subscriptions.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">When Ghost makes more sense</h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Ghost can become especially attractive when your paid newsletter
            revenue grows. Instead of giving the platform a percentage of each
            subscription, you pay for your Ghost plan and keep the remainder
            after payment processing.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            It also provides more control over your publication&apos;s website,
            branding and membership experience.
          </p>
        </section>

        <section className="mt-14 rounded-2xl bg-black p-8 text-white">
          <h2 className="text-3xl font-bold">
            Which one costs less for your newsletter?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-300">
            Use NewsletterFit to estimate costs using your subscriber count,
            paid members, subscription price and expected growth.
          </p>

          <Link
            href="/#calculator"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Compare newsletter platforms →
          </Link>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">Bottom line</h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Substack is generally better for simplicity and built-in
            distribution. Ghost is especially compelling for established paid
            publications that want more control and want to avoid a percentage
            platform fee on subscription revenue.
          </p>

          <p className="mt-5 text-sm leading-6 text-gray-500">
            Pricing, payment fees and features can change. Check current
            information directly with each provider before making a final
            decision.
          </p>
        </section>
      </article>
    </main>
  );
}