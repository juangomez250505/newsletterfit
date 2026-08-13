"use client";

import { useState } from "react";

type PlatformName = "Beehiiv" | "Substack" | "Kit" | "Ghost";

type PlatformResult = {
  name: PlatformName;
  cost: number;
  supported: boolean;
  note: string;
};

type SwitchResult =
  | {
      status: "switch";
      month: number;
      alternative: PlatformName;
      currentCost: number;
      alternativeCost: number;
      subscribers: number;
      paidSubscribers: number;
    }
  | { status: "none" }
  | { status: "unsupported" };

export default function Home() {
  const [subscribers, setSubscribers] = useState(5000);
  const [paidSubscribers, setPaidSubscribers] = useState(250);
  const [monthlyPrice, setMonthlyPrice] = useState(8);
  const [growth, setGrowth] = useState(5);
  const [years, setYears] = useState(1);
  const [currentPlatform, setCurrentPlatform] =
    useState<PlatformName>("Substack");
  const [showResults, setShowResults] = useState(false);

  function beehiivScalePrice(subs: number) {
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

  function platformMonthlyCost(
    platform: PlatformName,
    subs: number,
    paid: number,
    price: number
  ): number | null {
    const revenue = paid * price;

    if (platform === "Beehiiv") {
      // Free Launch can be used if there are no paid subscriptions
      // and the audience is 2,500 or fewer.
      if (paid === 0 && subs <= 2500) {
        return 0;
      }

      const plan = beehiivScalePrice(subs);

      if (plan === null) return null;

      // Scale plan + standard Stripe processing
      return plan + revenue * 0.029 + paid * 0.3;
    }

    if (platform === "Substack") {
      if (paid === 0) return 0;

      // 10% Substack
      // 2.9% + $0.30 Stripe
      // 0.7% Stripe Billing
      return revenue * 0.136 + paid * 0.3;
    }

    if (platform === "Kit") {
      if (subs > 10000) return null;

      if (paid === 0) return 0;

      // Kit Commerce: 3.5% + $0.30
      return revenue * 0.035 + paid * 0.3;
    }

   if (platform === "Ghost") {
  let planCost: number;

  if (subs <= 1000) {
    planCost = paid > 0 ? 29 : 18;
  } else if (subs <= 10000) {
    planCost = 199;
  } else {
    return null;
  }

  if (paid === 0) {
    return planCost;
  }

  return planCost + revenue * 0.029 + paid * 0.3;
}

    return null;
  }

  function calculateProjection() {
    const months = years * 12;

    let currentSubscribers = subscribers;
    let currentPaid = paidSubscribers;

    let totalRevenue = 0;

    const totals: Record<PlatformName, number> = {
      Beehiiv: 0,
      Substack: 0,
      Kit: 0,
      Ghost: 0,
    };

    const supported: Record<PlatformName, boolean> = {
      Beehiiv: true,
      Substack: true,
      Kit: true,
      Ghost: true,
    };

    const platformNames: PlatformName[] = [
      "Beehiiv",
      "Substack",
      "Kit",
      "Ghost",
    ];

    for (let month = 0; month < months; month++) {
      const revenue = currentPaid * monthlyPrice;
      totalRevenue += revenue;

      platformNames.forEach((platform) => {
        const cost = platformMonthlyCost(
          platform,
          currentSubscribers,
          currentPaid,
          monthlyPrice
        );

        if (cost === null) {
          supported[platform] = false;
        } else if (supported[platform]) {
          totals[platform] += cost;
        }
      });

      currentSubscribers *= 1 + growth / 100;
      currentPaid *= 1 + growth / 100;
    }

    const platforms: PlatformResult[] = [
      {
        name: "Beehiiv",
        cost: totals.Beehiiv,
        supported: supported.Beehiiv,
        note: "Scale plan when required + Stripe. 0% platform take rate.",
      },
      {
        name: "Substack",
        cost: totals.Substack,
        supported: supported.Substack,
        note: "10% platform fee + Stripe processing and recurring billing fee.",
      },
      {
        name: "Kit",
        cost: totals.Kit,
        supported: supported.Kit,
        note: "Newsletter Plan up to 10,000 subscribers + Kit Commerce fees.",
      },
      {
        name: "Ghost",
        cost: totals.Ghost,
        supported: supported.Ghost,
        note: "Publisher/Business hosting + Stripe. Modeled up to 10,000 members.",
      },
    ];

    const ranked = platforms
      .filter((platform) => platform.supported)
      .sort((a, b) => a.cost - b.cost);

    return {
      totalRevenue,
      projectedSubscribers: currentSubscribers,
      ranked,
      platforms,
    };
  }

  function findSwitchPoint(): SwitchResult {
    let futureSubscribers = subscribers;
    let futurePaid = paidSubscribers;

    const platforms: PlatformName[] = [
      "Beehiiv",
      "Substack",
      "Kit",
      "Ghost",
    ];

    for (let month = 0; month <= 36; month++) {
      const currentCost = platformMonthlyCost(
        currentPlatform,
        futureSubscribers,
        futurePaid,
        monthlyPrice
      );

      if (currentCost === null) {
        return { status: "unsupported" };
      }

      const alternatives = platforms
        .filter((platform) => platform !== currentPlatform)
        .map((platform) => ({
          name: platform,
          cost: platformMonthlyCost(
            platform,
            futureSubscribers,
            futurePaid,
            monthlyPrice
          ),
        }))
        .filter(
          (
            item
          ): item is {
            name: PlatformName;
            cost: number;
          } => item.cost !== null
        )
        .sort((a, b) => a.cost - b.cost);

      const cheapest = alternatives[0];

      if (cheapest && cheapest.cost < currentCost) {
        return {
          status: "switch",
          month,
          alternative: cheapest.name,
          currentCost,
          alternativeCost: cheapest.cost,
          subscribers: futureSubscribers,
          paidSubscribers: futurePaid,
        };
      }

      futureSubscribers *= 1 + growth / 100;
      futurePaid *= 1 + growth / 100;
    }

    return { status: "none" };
  }

  const results = calculateProjection();
  const switchResult = findSwitchPoint();

  const winner = results.ranked[0];
  const secondPlace = results.ranked[1];

  const difference =
    winner && secondPlace
      ? secondPlace.cost - winner.cost
      : 0;

  const invalid =
    subscribers < 0 ||
    paidSubscribers < 0 ||
    monthlyPrice < 0 ||
    growth < 0 ||
    paidSubscribers > subscribers;

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
          NewsletterFit
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Are you overpaying for your newsletter platform?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          Find the newsletter platform that could leave you with more money as
          your audience grows.
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

      <section
        id="calculator"
        className="mx-auto max-w-5xl px-6 pb-24"
      >
        <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold">
            Tell us about your newsletter
          </h2>

          <p className="mt-2 text-gray-600">
            We'll estimate your platform costs today and as you grow.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <label>
              <span className="mb-2 block font-medium">
                Current platform
              </span>

              <select
                value={currentPlatform}
                onChange={(e) =>
                  setCurrentPlatform(
                    e.target.value as PlatformName
                  )
                }
                className="w-full rounded-xl border border-gray-300 p-4"
              >
                <option value="Substack">Substack</option>
                <option value="Beehiiv">Beehiiv</option>
                <option value="Kit">Kit</option>
                <option value="Ghost">Ghost</option>
              </select>
            </label>

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

            <label>
              <span className="mb-2 block font-medium">
                Projection period
              </span>

              <select
                value={years}
                onChange={(e) =>
                  setYears(Number(e.target.value))
                }
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
              Please check your numbers. Paid subscribers cannot exceed total
              subscribers.
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
                        $
                        {Math.round(
                          difference
                        ).toLocaleString()}
                      </strong>{" "}
                      less than the next-cheapest supported option over{" "}
                      {years} {years === 1 ? "year" : "years"}.
                    </p>
                  )}
                </div>
              )}

              <div className="mt-8 rounded-3xl border border-gray-200 p-7">
                <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
                  When should you switch?
                </p>

                {switchResult.status === "switch" && (
                  <>
                    {switchResult.month === 0 ? (
                      <h3 className="mt-3 text-3xl font-bold">
                        {switchResult.alternative} is already cheaper for you.
                      </h3>
                    ) : (
                      <h3 className="mt-3 text-3xl font-bold">
                        In about {switchResult.month}{" "}
                        {switchResult.month === 1
                          ? "month"
                          : "months"}
                      </h3>
                    )}

                    <p className="mt-4 text-lg text-gray-700">
                      Based only on the fees we can currently verify,{" "}
                      <strong>{switchResult.alternative}</strong>{" "}
                      would cost less than{" "}
                      <strong>{currentPlatform}</strong>.
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl bg-gray-50 p-5">
                        <p className="text-sm text-gray-500">
                          Estimated subscribers
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                          {Math.round(
                            switchResult.subscribers
                          ).toLocaleString()}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-5">
                        <p className="text-sm text-gray-500">
                          Paid subscribers
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                          {Math.round(
                            switchResult.paidSubscribers
                          ).toLocaleString()}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-5">
                        <p className="text-sm text-gray-500">
                          Monthly fee difference
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                          $
                          {Math.round(
                            switchResult.currentCost -
                              switchResult.alternativeCost
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {switchResult.status === "none" && (
                  <>
                    <h3 className="mt-3 text-3xl font-bold">
                      No cheaper switch found within 36 months.
                    </h3>

                    <p className="mt-3 text-gray-600">
                      Under your current assumptions, your selected platform
                      remains competitive on fees.
                    </p>
                  </>
                )}

                {switchResult.status === "unsupported" && (
                  <>
                    <h3 className="mt-3 text-3xl font-bold">
                      We need more pricing data for this projection.
                    </h3>

                    <p className="mt-3 text-gray-600">
                      Your audience eventually moves beyond a pricing range we
                      can verify reliably. We would rather show no estimate than
                      invent one.
                    </p>
                  </>
                )}

                <p className="mt-5 text-xs text-gray-500">
                  This compares platform and payment fees only. Migration costs,
                  taxes, feature differences and other business considerations
                  are not included yet.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold">
                  Your ranking
                </h3>

                <div className="mt-4 grid gap-4">
                  {results.ranked.map(
                    (platform, index) => (
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

                          <p className="mt-2 max-w-xl text-sm text-gray-600">
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
                    )
                  )}
                </div>
              </div>

              {results.platforms.some(
                (platform) => !platform.supported
              ) && (
                <div className="mt-6 rounded-2xl bg-yellow-50 p-6">
                  <p className="font-bold">
                    Some platforms were excluded
                  </p>

                  <p className="mt-2 text-sm text-gray-700">
                    Your projected audience exceeds a pricing range we currently
                    support with enough confidence. We excluded those options
                    instead of showing an unreliable number.
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
                  Estimates assume monthly paid subscriptions, U.S.-dollar
                  payment processing and equal growth rates for free and paid
                  subscribers. Taxes, refunds, chargebacks, promotional pricing
                  and migration expenses are excluded.
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