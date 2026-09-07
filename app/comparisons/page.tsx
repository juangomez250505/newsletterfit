import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter Platform Comparisons (2026) | NewsletterFit",
  description:
    "Compare Beehiiv, Substack, Kit, Ghost, MailerLite and GetResponse side by side. Explore pricing, fees, automation, monetization and newsletter features.",
  alternates: {
    canonical: "/comparisons",
  },
};

export default function ComparisonsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-24 md:pt-28">
        <Link
          href="/"
          className="text-sm font-bold text-[#2860B8] transition hover:opacity-70"
        >
          ← NewsletterFit
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2860B8]">
            Platform comparisons
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Compare newsletter platforms side by side
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Compare pricing, fees, automation, monetization and publishing
            features across the most popular newsletter platforms.
          </p>

          <Link
            href="/#calculator"
            className="brand-swipe mt-8 inline-flex rounded-xl bg-black px-6 py-3.5 font-semibold text-white"
          >
            Compare My Platforms →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/beehiiv-vs-substack"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/beehiiv.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/substack.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              Beehiiv vs Substack
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare newsletter growth tools, pricing and monetization.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/beehiiv-vs-kit"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/beehiiv.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/kit.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              Beehiiv vs Kit
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare newsletter growth tools with creator email automation.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/beehiiv-vs-ghost"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/beehiiv.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/ghost.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              Beehiiv vs Ghost
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare newsletter growth with independent publishing control.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/kit-vs-substack"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/kit.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/substack.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              Kit vs Substack
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare automation, simplicity and subscription fees.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/substack-vs-ghost"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/substack.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/ghost.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              Substack vs Ghost
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare revenue share with fixed-cost independent publishing.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/kit-vs-ghost"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/kit.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/ghost.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              Kit vs Ghost
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare creator email automation with independent publishing.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/mailerlite-vs-beehiiv"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/mailerlite.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/beehiiv.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              MailerLite vs Beehiiv
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare affordable email marketing with newsletter-first growth.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/mailerlite-vs-kit"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/mailerlite.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/kit.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              MailerLite vs Kit
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare pricing, automation and creator-focused tools.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/mailerlite-vs-substack"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/mailerlite.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/substack.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              MailerLite vs Substack
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare fixed platform pricing with subscription revenue share.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/mailerlite-vs-ghost"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/mailerlite.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/ghost.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              MailerLite vs Ghost
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare email marketing automation with independent publishing.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/getresponse-vs-beehiiv"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/getresponse.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/beehiiv.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              GetResponse vs Beehiiv
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare advanced marketing automation with newsletter-first growth.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/getresponse-vs-kit"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/getresponse.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/kit.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              GetResponse vs Kit
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare full marketing tools with creator-focused email automation.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/getresponse-vs-mailerlite"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/getresponse.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/mailerlite.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              GetResponse vs MailerLite
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare automation depth, pricing and email marketing features.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/getresponse-vs-substack"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/getresponse.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/substack.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              GetResponse vs Substack
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare marketing automation with simple paid newsletter publishing.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>

          <Link
            href="/getresponse-vs-ghost"
            className="brand-card-swipe group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/getresponse.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                vs
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white">
                <img
                  src="/logos/ghost.png"
                  alt=""
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight">
              GetResponse vs Ghost
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Compare marketing automation with independent publishing infrastructure.
            </p>

            <p className="mt-5 text-sm font-bold">
              Read comparison →
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
