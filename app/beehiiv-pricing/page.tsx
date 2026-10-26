import type { Metadata } from "next";
import Link from "next/link";
import BeehiivPricingCalculator from "./BeehiivPricingCalculator";

export const metadata: Metadata = {
  title: "Beehiiv Pricing 2026: Free vs Lite vs Pro | NewsletterFit",
  description:
    "See Beehiiv's October 2026 prices for Free, Lite and Pro at 1K–100K subscribers. Estimate your plan cost and compare platform fees with Substack.",
  alternates: { canonical: "/beehiiv-pricing" },
  openGraph: {
    title: "Beehiiv Pricing 2026: Free, Lite and Pro Plans",
    description: "Subscriber-tier pricing, paid newsletter fees, and a free cost calculator.",
    type: "article",
  },
};

const tiers = [
  ["1,000", "$49", "$59", "$95", "$109"],
  ["2,500", "$69", "$79", "$129", "$149"],
  ["5,000", "$95", "$109", "$169", "$199"],
  ["10,000", "$119", "$139", "$199", "$239"],
  ["25,000", "$169", "$199", "$299", "$349"],
  ["50,000", "$249", "$299", "$399", "$469"],
  ["75,000", "$329", "$389", "$499", "$589"],
  ["100,000", "$399", "$469", "$599", "$699"],
];

export default function BeehiivPricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <Link href="/" className="text-sm font-semibold text-[#2860B8] hover:underline">
          ← NewsletterFit Calculator
        </Link>
        <p className="mt-10 text-sm font-bold uppercase tracking-wider text-[#2860B8]">
          Platform pricing guide · Reviewed October 26, 2026
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          Beehiiv Pricing 2026: Free, Lite and Pro Compared
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          How much does Beehiiv cost at your audience size? Compare the October 2026
          plans, monthly and annual billing, and the revenue level where its fixed
          subscription fee may cost less than Substack’s 10% platform fee.
        </p>

        <section className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/60 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Beehiiv pricing: the short answer</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Beehiiv Free costs $0 for up to 2,500 subscribers. Lite starts at
            <strong> $49/month with annual billing</strong> or $59 with month-to-month
            billing at the 1,000-subscriber tier. Pro starts at $95/month with annual
            billing or $109 month to month. Paid-plan rates increase with audience size.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Annual prices are monthly equivalents billed for the year, not a monthly invoice.
            USD, before taxes and payment processing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">Beehiiv Lite and Pro costs by subscriber count</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Each row applies to newsletters with up to that number of active subscribers.
            A 1,200-subscriber newsletter falls in the 2,500-subscriber tier.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-[700px] w-full text-left text-sm">
              <thead className="bg-slate-50">
                <tr>{["Subscribers (up to)", "Lite annual /mo", "Lite monthly", "Pro annual /mo", "Pro monthly"].map((h) =>
                  <th key={h} className="px-4 py-4 font-bold">{h}</th>
                )}</tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {tiers.map((t) => (
                  <tr key={t[0]}>{t.map((v, i) =>
                    <td key={i} className="px-4 py-3">{v}</td>
                  )}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Free is available for up to 2,500 subscribers, but monetization through paid subscriptions
            requires a paid plan. Lite supports up to 100,000 subscribers; larger publications
            may need Pro or Enterprise. Confirm your exact tier before purchasing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">Calculate your cost and compare Substack fees</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Enter your total audience, paying subscribers and monthly subscription price.
            This calculation compares Beehiiv’s plan charge against Substack’s platform fee.
            Payment processing, taxes and any additional services are excluded for both.
          </p>
          <div className="mt-6">
            <BeehiivPricingCalculator />
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold">Choose Lite when...</h2>
            <p className="mt-3 leading-7 text-slate-700">
              You want paid subscriptions, ad monetization, automations and
              growing a newsletter without sharing a percentage of subscription revenue
              with the platform. The right subscriber tier still matters.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold">Choose Pro when...</h2>
            <p className="mt-3 leading-7 text-slate-700">
              You need more publications and team seats, removal of Beehiiv branding,
              advanced analytics, dynamic content, webhooks or priority support.
              Pro also supports more subscribers than Lite.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-slate-950 p-7 text-white sm:p-9">
          <h2 className="text-2xl font-bold">Should you choose Beehiiv or another platform?</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Price is only part of the decision. Compare your actual audience, revenue,
            payment fees, automation needs and expected growth across six platforms.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#calculator" className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-950">
              Compare all platforms →
            </Link>
            <a href="https://www.beehiiv.com/?via=newsletterfit" target="_blank"
              rel="sponsored noopener noreferrer"
              className="rounded-xl border border-white/50 px-5 py-3 font-semibold text-white">
              See Beehiiv plans →
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">Affiliate disclosure: NewsletterFit may earn a commission if you sign up via our link, at no extra cost to you.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">What changed in October 2026?</h2>
          <p className="mt-3 leading-7 text-slate-700">
            On October 1, Beehiiv renamed Launch to Free, Scale to Lite, and Max to Pro,
            with updated plan limits and paid pricing. The change applied immediately to
            new customers. For existing customers, new prices apply at the first renewal
            on or after November 1, 2026. Renewal timing matters when comparing costs.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold">Beehiiv pricing FAQ</h2>
          <div className="mt-5 space-y-6 leading-7 text-slate-700">
            <div><h3 className="font-bold">Is Beehiiv free?</h3>
              <p>Yes. Beehiiv Free supports up to 2,500 subscribers, but you need a paid plan for paid newsletter subscriptions.</p></div>
            <div><h3 className="font-bold">Does Beehiiv take 10% of my paid newsletter revenue?</h3>
              <p>No. Lite and Pro have a 0% Beehiiv take rate on paid subscriptions. Payment processor fees still apply.</p></div>
            <div><h3 className="font-bold">Is $49 the monthly or annual price?</h3>
              <p>It is the monthly equivalent when you pay for a year. The monthly billing option starts at $59 at 1,000 subscribers.</p></div>
            <div><h3 className="font-bold">Why does Beehiiv cost more when my audience grows?</h3>
              <p>Paid plans use subscriber tiers, so the subscription changes as the total active subscriber count crosses a pricing threshold.</p></div>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-8">
          <h2 className="text-xl font-bold">Related tools and sources</h2>
          <div className="mt-4 flex flex-wrap gap-5 text-sm font-semibold text-[#2860B8]">
            <Link href="/beehiiv-vs-substack" className="underline">Beehiiv vs Substack</Link>
            <Link href="/beehiiv-alternatives" className="underline">Beehiiv alternatives</Link>
            <Link href="/newsletter-platform-pricing" className="underline">All platform prices</Link>
            <Link href="/substack-fee-calculator" className="underline">Substack fee calculator</Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Sources: <a href="https://www.beehiiv.com/blog/beehiiv-pricing-2026" className="text-[#2860B8] underline">Beehiiv's October 2026 pricing announcement</a>,
            {" "}<a href="https://www.beehiiv.com/blog/email-marketing-pricing" className="text-[#2860B8] underline">Beehiiv plan guide</a>, and
            {" "}<a href="https://www.beehiiv.com/pricing" className="text-[#2860B8] underline">live pricing page</a>.
            Subscriber-tier rates are reference prices checked in October 2026;
            official figures, availability and terms can change. Updated October 26, 2026.
          </p>
        </section>
      </article>
    </main>
  );
}
