"use client";

import { useState } from "react";

export default function Home() {
  const [subscribers, setSubscribers] = useState(5000);
  const [paidSubscribers, setPaidSubscribers] = useState(250);
  const [monthlyPrice, setMonthlyPrice] = useState(8);
  const [growth, setGrowth] = useState(5);
  const [years, setYears] = useState(1);
  const [showResults, setShowResults] = useState(false);

  function calculateProjection() {
    const months = years * 12;

    let currentTotalSubscribers = subscribers;
    let currentPaidSubscribers = paidSubscribers;

    let totalRevenue = 0;
    let substackCost = 0;
    let beehiivCost = 0;

    for (let month = 0; month < months; month++) {
      const monthlyRevenue = currentPaidSubscribers * monthlyPrice;

      totalRevenue += monthlyRevenue;

      // Substack takes 10% of paid subscription revenue
      substackCost += monthlyRevenue * 0.1;

      // Beehiiv Scale is required if paid subscriptions are used
      // or if the list exceeds 2,500 subscribers.
      if (currentPaidSubscribers > 0 || currentTotalSubscribers > 2500) {
        beehiivCost += 43;
      }

      currentTotalSubscribers *= 1 + growth / 100;
      currentPaidSubscribers *= 1 + growth / 100;
    }

    return {
      totalRevenue,
      substackCost,
      beehiivCost,
      projectedSubscribers: currentTotalSubscribers,
    };
  }

  const results = calculateProjection();

  const bestPlatform =
    results.beehiivCost < results.substackCost ? "Beehiiv" : "Substack";

  const savings = Math.abs(
    results.substackCost - results.beehiivCost
  );

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
          Find out which newsletter platform could leave you with more money.
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

      <section id="calculator" className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            Tell us about your newsletter
          </h2>

          <p className="mt-2 text-gray-600">
            We'll calculate your projected platform costs.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <label>
              <span className="mb-2 block font-medium">
                Total subscribers
              </span>
              <input
                type="number"
                value={subscribers}
                onChange={(e) => setSubscribers(Number(e.target.value))}
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
                onChange={(e) => setPaidSubscribers(Number(e.target.value))}
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
                onChange={(e) => setMonthlyPrice(Number(e.target.value))}
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
                onChange={(e) => setGrowth(Number(e.target.value))}
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

          <button
            onClick={() => setShowResults(true)}
            className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-lg font-semibold text-white"
          >
            Compare My Platforms
          </button>

          {showResults && (
            <div className="mt-10">
              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <p className="text-sm font-semibold text-green-700">
                  BEST VALUE BASED ON PLATFORM FEES
                </p>

                <p className="mt-2 text-4xl font-bold">
                  {bestPlatform}
                </p>

                <p className="mt-3 text-lg">
                  Could save you approximately{" "}
                  <strong>
                    ${Math.round(savings).toLocaleString()}
                  </strong>{" "}
                  over {years} {years === 1 ? "year" : "years"}.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-lg font-bold">Beehiiv</p>

                  <p className="mt-4 text-3xl font-bold">
                    ${Math.round(results.beehiivCost).toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-500">
                    Estimated platform cost
                  </p>

                  <p className="mt-4 text-sm text-gray-600">
                    0% platform fee on paid subscriptions.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6">
                  <p className="text-lg font-bold">Substack</p>

                  <p className="mt-4 text-3xl font-bold">
                    ${Math.round(results.substackCost).toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-500">
                    Estimated platform cost
                  </p>

                  <p className="mt-4 text-sm text-gray-600">
                    10% platform fee on paid subscription revenue.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gray-50 p-6">
                <p className="font-semibold">
                  Projected newsletter revenue
                </p>

                <p className="mt-2 text-2xl font-bold">
                  ${Math.round(results.totalRevenue).toLocaleString()}
                </p>

                <p className="mt-5 text-xs text-gray-500">
                  Pricing verified August 12, 2026. Payment processor fees are
                  excluded from this comparison. Growth assumes paid and total
                  subscribers increase at the same monthly rate.
                </p>

                {results.projectedSubscribers > 100000 && (
                  <p className="mt-3 text-sm font-medium text-red-600">
                    Your projection exceeds 100,000 subscribers. Beehiiv may
                    require custom Enterprise pricing, so its estimate may be
                    understated.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}