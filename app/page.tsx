"use client";

import { useState } from "react";

type PlatformResult = {
  name: string;
  cost: number;
  supported: boolean;
  note: string;
};

export default function Home() {
  const [subscribers, setSubscribers] = useState(5000);
  const [paidSubscribers, setPaidSubscribers] = useState(250);
  const [monthlyPrice, setMonthlyPrice] = useState(8);
  const [growth, setGrowth] = useState(5);
  const [years, setYears] = useState(1);
  const [showResults, setShowResults] = useState(false);

  function beehiivMonthlyPrice(subs: number) {
    if (subs <= 1000) return 43;
    if (subs <= 2500) return 61;
    if (subs <= 5000) return 78;
    if (subs <= 10000) return 96;
    if (subs <= 25000) return 149;
    if (subs <= 50000) return 219;
    if (subs <= 75000) return 254;
    if (subs <= 100000) return 290;

    return null;
  }

  function ghostMonthlyPrice(subs: number) {
    if (subs <= 1000) return 29;
    if (subs <= 10000) return 199;

    return null;
  }

  function calculateProjection() {
    const months = years * 12;

    let currentSubscribers = subscribers;
    let currentPaid = paidSubscribers;

    let totalRevenue = 0;

    let beehiivCost = 0;
    let substackCost = 0;
    let kitCost = 0;
    let ghostCost = 0;

    let beehiivSupported = true;
    let kitSupported = true;
    let ghostSupported = true;

    for (let month = 0; month < months; month++) {
      const revenue = currentPaid * monthlyPrice;

      totalRevenue += revenue;

      // -------------------------
      // BEEHIIV
      // -------------------------

      const beehiivPlan = beehiivMonthlyPrice(currentSubscribers);

      if (beehiivPlan === null) {
        beehiivSupported = false;
      } else {
        beehiivCost += beehiivPlan;

        // Stripe standard processing assumption
        beehiivCost += revenue * 0.029;
        beehiivCost += currentPaid * 0.3;
      }

      // -------------------------
      // SUBSTACK
      // -------------------------

      // Substack: 10%
      substackCost += revenue * 0.1;

      // Stripe card processing
      substackCost += revenue * 0.029;
      substackCost += currentPaid * 0.3;

      // Stripe recurring billing fee
      substackCost += revenue * 0.007;

      // -------------------------
      // KIT
      // -------------------------

      if (currentSubscribers <= 10000) {
        // Kit Commerce fee includes payment processing
        kitCost += revenue * 0.035;
        kitCost += currentPaid * 0.3;
      } else {
        kitSupported = false;
      }

      // -------------------------
      // GHOST
      // -------------------------

      const ghostPlan = ghostMonthlyPrice(currentSubscribers);

      if (ghostPlan === null) {
        ghostSupported = false;
      } else {
        ghostCost += ghostPlan;

        // Stripe processing
        ghostCost += revenue * 0.029;
        ghostCost += currentPaid * 0.3;
      }

      // Grow audience
      currentSubscribers *= 1 + growth / 100;
      currentPaid *= 1 + growth / 100;
    }

    const platforms: PlatformResult[] = [
      {
        name: "Beehiiv",
        cost: beehiivCost,
        supported: beehiivSupported,
        note: "0% platform fee. Scale plan + Stripe processing.",
      },
      {
        name: "Substack",
        cost: substackCost,
        supported: true,
        note: "10% platform fee + Stripe processing.",
      },
      {
        name: "Kit",
        cost: kitCost,
        supported: kitSupported,
        note: "Free Newsletter plan up to 10,000 subscribers + Kit Commerce fees.",
      },
      {
        name: "Ghost",
        cost: ghostCost,
        supported: ghostSupported,
        note: "0% platform fee. Ghost(Pro) hosting + Stripe processing.",
      },
    ];

    const ranked = platforms
      .filter((platform) => platform.supported)
      .sort((a, b) => a.cost - b.cost);

    return {
      totalRevenue,
      projectedSubscribers: currentSubscribers,
      platforms,
      ranked,
    };
  }

  const results = calculateProjection();

  const winner = results.ranked[0];

  const secondPlace = results.ranked[1];

  const difference =
    winner && secondPlace ? secondPlace.cost - winner.cost : 0;

  const invalid =
    subscribers < 0 ||
    paidSubscribers < 0 ||
    monthlyPrice < 0 ||
    growth < 0 ||
    paidSubscribers > subscribers;

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          NewsletterFit
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Are you overpaying for your newsletter platform?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          See which newsletter platform could leave you with the most money.
        </p>

        <a
          href="#calculator"
          className="mt-10 inline-block rounded-xl bg-black px-7 py-4 text-lg font-semibold text-white"
        >
          Find My Best Platform
        </a>

        <p className="mt-4 text-sm text-gray-500">
          Free. No signup required.
        </p>
      </section>

      <section id="calculator" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            Tell us about your newsletter
          </h2>

          <p className="mt-2 text-gray-600">
            We'll estimate your real platform and payment costs.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <label>
              <span className="mb-2 block font-medium">
                Total subscribers
              </span>

              <input
                type="number"
                value={subscribers}
                onChange={(e) =>
                  setSubscribers(Number(e.target.value))
                }
                className="w-full rounded-xl border border-gray-300 p-4"
              />
            </label>

            <label>
              <span className="mb-2 block font-medium">
                Paid subscribers
              </span>

              <input
                type="number"
                value={paidSubscribers}
                onChange={(e) =>
                  setPaidSubscribers(Number(e.target.value))
                }
                className="w-full rounded-xl border border-gray-300 p-4"
              />
            </label>

            <label>
              <span className="mb-2 block font-medium">
                Monthly subscription price (USD)
              </span>

              <input
                type="number"
                value={monthlyPrice}
                onChange={(e) =>
                  setMonthlyPrice(Number(e.target.value))
                }
                className="w-full rounded-xl border border-gray-300 p-4"
              />
            </label>

            <label>
              <span className="mb-2 block font-medium">
                Expected monthly growth (%)
              </span>

              <input
                type="number"
                value={growth}
                onChange={(e) =>
                  setGrowth(Number(e.target.value))
                }
                className="w-full rounded-xl border border-gray-300 p-4"
              />
            </label>

            <label className="md:col-span-2">
              <span className="mb-2 block font-medium">
                Projection period
              </span>

              <select
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 p-4"
              >
                <option value={1}>1 year</option>
                <option value={2}>2 years</option>
                <option value={3}>3 years</option>
              </select>
            </label>
          </div>

          {invalid && (
            <p className="mt-5 rounded-xl bg-red-50 p-4 text-red-700">
              Please check your numbers. Paid subscribers cannot exceed
              total subscribers.
            </p>
          )}

          <button
            disabled={invalid}
            onClick={() => setShowResults(true)}
            className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-lg font-semibold text-white disabled:opacity-40"
          >
            Compare My Platforms
          </button>

          {showResults && !invalid && (
            <div className="mt-10">
              {winner && (
                <div className="rounded-3xl bg-green-50 p-8 text-center">
                  <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                    Lowest estimated cost
                  </p>

                  <p className="mt-3 text-5xl font-bold">
                    {winner.name}
                  </p>

                  {secondPlace && (
                    <p className="mt-4 text-lg">
                      Estimated to cost about{" "}
                      <strong>
                        ${Math.round(difference).toLocaleString()}
                      </strong>{" "}
                      less than the next-cheapest option over{" "}
                      {years} {years === 1 ? "year" : "years"}.
                    </p>
                  )}
                </div>
              )}

              <div className="mt-8">
                <h3 className="text-2xl font-bold">
                  Your ranking
                </h3>

                <div className="mt-4 grid gap-4">
                  {results.ranked.map((platform, index) => (
                    <div
                      key={platform.name}
                      className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 p-6 md:flex-row md:items-center"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-500">
                          #{index + 1}
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                          {platform.name}
                        </p>

                        <p className="mt-2 text-sm text-gray-600">
                          {platform.note}
                        </p>
                      </div>

                      <div className="md:text-right">
                        <p className="text-3xl font-bold">
                          $
                          {Math.round(
                            platform.cost
                          ).toLocaleString()}
                        </p>

                        <p className="text-sm text-gray-500">
                          estimated total cost
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {results.platforms.some(
                (platform) => !platform.supported
              ) && (
                <div className="mt-6 rounded-2xl bg-yellow-50 p-6">
                  <p className="font-bold">
                    Some platforms need additional pricing data
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    Your projected audience exceeds the publicly verified
                    pricing range we currently support for one or more
                    platforms. Those platforms were excluded from the
                    ranking rather than showing you an unreliable estimate.
                  </p>
                </div>
              )}

              <div className="mt-6 rounded-2xl bg-gray-50 p-6">
                <p className="font-semibold">
                  Projected newsletter revenue
                </p>

                <p className="mt-2 text-3xl font-bold">
                  $
                  {Math.round(
                    results.totalRevenue
                  ).toLocaleString()}
                </p>

                <p className="mt-5 text-sm text-gray-600">
                  Projected subscribers at the end:{" "}
                  <strong>
                    {Math.round(
                      results.projectedSubscribers
                    ).toLocaleString()}
                  </strong>
                </p>

                <p className="mt-5 text-xs leading-5 text-gray-500">
                  Estimate assumes monthly subscriber billing, U.S.
                  payment processing and the same growth rate for free and
                  paid subscribers. Taxes, refunds, chargebacks, currency
                  conversion and promotional pricing are excluded.
                  Beehiiv and Ghost hosting estimates use annual-billing
                  rates where applicable.
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Pricing checked August 12, 2026.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}