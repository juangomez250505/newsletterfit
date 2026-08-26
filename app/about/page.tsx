import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NewsletterFit | Newsletter Platform Comparison",
  description:
    "Learn how NewsletterFit compares newsletter platforms, calculates estimated costs, and helps creators choose the right platform.",
  alternates: {
    canonical: "https://getnewsletterfit.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          ← Back to NewsletterFit
        </Link>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            About NewsletterFit
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Helping creators choose the right newsletter platform
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            NewsletterFit is an independent comparison website built to help
            creators, writers, and small businesses understand the real cost
            and differences between newsletter platforms.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">What NewsletterFit does</h2>

          <p className="mt-5 leading-7 text-slate-700">
            Newsletter platforms can look inexpensive at first, but pricing can
            change significantly as your subscriber count grows or when you add
            paid subscriptions, payment processing, automation, and other
            features.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            NewsletterFit helps simplify that comparison by estimating the
            costs of platforms such as Beehiiv, Substack, Kit, Ghost,
            MailerLite, and GetResponse using the information you enter.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">How the calculator works</h2>

          <p className="mt-5 leading-7 text-slate-700">
            The NewsletterFit calculator uses publicly available platform
            pricing and fee information to estimate costs based on factors such
            as:
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-700">
            <li>Total newsletter subscribers</li>
            <li>Number of paid subscribers</li>
            <li>Monthly subscription price</li>
            <li>Expected subscriber growth</li>
            <li>Advanced automation requirements</li>
            <li>Payment processing fees where applicable</li>
          </ul>

          <p className="mt-5 leading-7 text-slate-700">
            These calculations are estimates. Platform pricing, fees, features,
            and limits can change, so users should always confirm current terms
            directly with each platform before making a purchase decision.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">How we compare platforms</h2>

          <p className="mt-5 leading-7 text-slate-700">
            Our comparison pages focus on practical differences such as pricing,
            free plan limits, paid newsletter fees, automation capabilities,
            growth tools, publishing features, and the type of creator or
            business each platform is best suited for.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            We review pricing and product information periodically and update
            the site when meaningful changes are identified.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">Affiliate transparency</h2>

          <p className="mt-5 leading-7 text-slate-700">
            NewsletterFit may earn a commission when a visitor signs up for a
            platform through certain links on the website. This does not
            increase the price paid by the visitor.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Affiliate relationships do not determine how platforms are ranked
            or compared. Our goal is to make the calculator and comparisons
            useful even when a platform does not have an affiliate relationship
            with NewsletterFit.
          </p>

          <Link
            href="/affiliate-disclosure"
            className="mt-5 inline-block font-semibold text-slate-900 underline"
          >
            Read our Affiliate Disclosure →
          </Link>
        </section>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Contact NewsletterFit</h2>

          <p className="mt-4 leading-7 text-slate-700">
            If you notice outdated pricing, have a correction, or want to get
            in touch with NewsletterFit, you can contact us at:
          </p>

          <a
            href="mailto:hello@getnewsletterfit.com"
            className="mt-4 inline-block font-semibold text-slate-900 underline"
          >
            hello@getnewsletterfit.com
          </a>
        </section>
      </section>
    </main>
  );
}