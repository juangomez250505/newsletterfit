import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kit vs Substack (2026): Fees, Features & Best Choice | NewsletterFit",
  description:
    "Compare Kit vs Substack for paid newsletters, creator tools, fees and automation. See which platform fits your newsletter better.",
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
          Kit vs Substack: Which newsletter platform is better?
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Kit and Substack can both work for newsletter creators, but they are
          built for different types of businesses. Substack focuses on
          simplicity and paid subscriptions, while Kit gives creators more
          control over email marketing, automations and audience management.
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
          <h2 className="text-3xl font-bold">Kit vs Substack at a glance</h2>

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
                    Platform fee on subscriptions
                  </td>
                  <td className="py-4 pr-6">
                    No standard percentage platform fee
                  </td>
                  <td className="py-4">10%</td>
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
          <h2 className="text-3xl font-bold">The biggest difference: fees</h2>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Substack charges a 10% platform fee on paid subscription revenue,
            in addition to payment processing fees. That is simple when your
            newsletter is small, but it can become expensive as revenue grows.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            Kit uses a different model. You may pay for a Kit plan depending
            on your audience size and features, but it does not use the same
            10% revenue-share model as Substack.
          </p>

          <div className="mt-8 rounded-2xl border border-gray-200 p-7">
            <h3 className="text-xl font-bold">
              Example: $2,000/month in paid subscriptions
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              A 10% Substack platform fee alone would equal approximately{" "}
              <strong>$200 per month</strong>, before payment processing fees.
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
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Compare newsletter platforms →
          </Link>
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
        </section>
      </article>
    </main>
  );
}