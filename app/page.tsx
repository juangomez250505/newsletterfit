"use client";

import { useState } from "react";

type PlatformName =
  | "Beehiiv"
  | "Substack"
  | "Kit"
  | "Ghost"
  | "MailerLite";

const affiliateLinks: Partial<Record<PlatformName, string>> = {
  Beehiiv: "https://www.beehiiv.com/?via=newsletterfit",
};

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
  const [creatorCountry, setCreatorCountry] = useState("US");
  const [needsAdvancedAutomations, setNeedsAdvancedAutomations] = useState(false);
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
  function kitCreatorPrice(subs: number) {
  if (subs <= 1000) return 33;
  if (subs <= 3000) return 49.17;
  if (subs <= 5000) return 74.17;
  if (subs <= 10000) return 115.83;

  return null;
}

function mailerLiteComfortPrice(subs: number) {
  if (subs <= 500) return 10.8;
  if (subs <= 1000) return 17.1;
  if (subs <= 2500) return 29.7;
  if (subs <= 5000) return 44.1;
  if (subs <= 10000) return 80.1;

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
  if (needsAdvancedAutomations) {
    const creatorPlan = kitCreatorPrice(subs);

    if (creatorPlan === null) return null;

    if (paid === 0) {
      return creatorPlan;
    }

    return creatorPlan + revenue * 0.035 + paid * 0.3;
  }

  // Free Newsletter plan supports up to 10,000 subscribers.
  if (subs > 10000) return null;

  if (paid === 0) return 0;

  return revenue * 0.035 + paid * 0.3;
}
if (platform === "MailerLite") {
  const planCost =
    paid === 0 && subs <= 250
      ? 0
      : mailerLiteComfortPrice(subs);

  if (planCost === null) return null;

  const paymentFees =
    paid > 0 ? revenue * 0.029 + paid * 0.3 : 0;

  return planCost + paymentFees;
}
   if (platform === "Ghost") {
  let planCost: number;

 if (paid === 0) {
  if (subs <= 1000) {
    planCost = 18;
  } else {
    return null;
  }
} else {
  if (subs <= 1000) {
    planCost = 29;
  } else if (subs <= 2500) {
    planCost = 46;
  } else if (subs <= 5000) {
    planCost = 63;
  } else if (subs <= 7500) {
    planCost = 79;
  } else if (subs <= 10000) {
    planCost = 88;
  } else if (subs <= 25000) {
    planCost = 141;
  } else if (subs <= 50000) {
    planCost = 208;
  } else {
    return null;
  }
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
      MailerLite: 0,
    };

    const supported: Record<PlatformName, boolean> = {
      Beehiiv: true,
      Substack: true,
      Kit: true,
      Ghost: true,
      MailerLite: true,
    };

   const platformNames: PlatformName[] = [
  "Beehiiv",
  "Substack",
  "Kit",
  "Ghost",
  "MailerLite",
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
      {
  name: "MailerLite",
  cost: totals.MailerLite,
  supported: supported.MailerLite,
  note: "Comfort plan + Stripe processing for paid newsletters.",
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

  const currentPlatformResult = results.platforms.find(
  (platform) =>
    platform.name === currentPlatform && platform.supported
);

const savingsVsCurrent =
  winner && currentPlatformResult
    ? Math.max(0, currentPlatformResult.cost - winner.cost)
    : 0;
const countrySupported = creatorCountry === "US";
  const invalid =
    subscribers < 0 ||
    paidSubscribers < 0 ||
    monthlyPrice < 0 ||
    growth < 0 ||
    paidSubscribers > subscribers;

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
  <div className="mx-auto max-w-6xl px-6 py-6">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold tracking-tight">
        NewsletterFit
      </div>

      <a
        href="#calculator"
        className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
      >
        Compare Platforms
      </a>
    </div>
  </div>

  <div className="mx-auto max-w-5xl px-6 pb-24 pt-16 text-center">
    <div className="mx-auto mb-6 inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
      Free newsletter platform cost calculator
    </div>

    <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
      Stop overpaying for your newsletter platform.
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
      Compare Beehiiv, Substack, Kit, Ghost and MailerLite based on your audience,
      paid subscribers and expected growth.
    </p>

    <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-gray-900">
      See which option could leave you with more money over the next 1–3 years.
    </p>

    <a
      href="#calculator"
      className="mt-10 inline-flex items-center rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800"
    >
      Find My Best Platform →
    </a>

    <p className="mt-4 text-sm text-gray-500">
      Free · No signup · Takes less than 60 seconds
    </p>

    <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-5">
      {["Beehiiv", "Substack", "Kit", "Ghost", "MailerLite"].map((platform) => (
        <div
          key={platform}
          className="rounded-xl border border-gray-200 bg-white px-4 py-4 font-semibold text-gray-700 shadow-sm"
        >
          {platform}
        </div>
      ))}
    </div>
  </div>
      </section>

<section className="bg-white">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <div className="grid gap-8 md:grid-cols-3">
      <div className="rounded-2xl border border-gray-200 p-6">
        <p className="text-sm font-bold text-gray-500">01</p>

        <h3 className="mt-3 text-xl font-bold">
          Enter your numbers
        </h3>

        <p className="mt-2 leading-6 text-gray-600">
          Tell us your subscribers, paid members, pricing and expected growth.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 p-6">
        <p className="text-sm font-bold text-gray-500">02</p>

        <h3 className="mt-3 text-xl font-bold">
          We compare the real costs
        </h3>

        <p className="mt-2 leading-6 text-gray-600">
          NewsletterFit estimates platform fees, payment fees and future costs as your audience grows.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 p-6">
        <p className="text-sm font-bold text-gray-500">03</p>

        <h3 className="mt-3 text-xl font-bold">
          See your best fit
        </h3>

        <p className="mt-2 leading-6 text-gray-600">
          Get a ranked comparison and see how much switching could potentially save you.
        </p>
      </div>
    </div>

    <div className="mt-10 rounded-2xl bg-gray-50 p-6 text-center">
      <p className="text-sm font-medium text-gray-600">
        Independent comparison · No platform pays to rank higher · Pricing data is regularly reviewed
      </p>
    </div>
  </div>
</section>

     <section id="calculator" className="mx-auto max-w-5xl px-6 py-20">
<div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50 md:p-10">
          <div className="mb-5 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-600">
  Personalized cost analysis
</div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
  Find the best platform for your newsletter
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
                <option value="MailerLite">MailerLite</option>
              </select>
            </label>

<label>
  <span className="mb-2 block font-medium">
    Where is your Stripe account based?
  </span>

  <select
    value={creatorCountry}
    onChange={(e) => setCreatorCountry(e.target.value)}
    className="w-full rounded-xl border border-gray-300 p-4"
  >
    <option value="US">United States</option>
    <option value="MX">Mexico</option>
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
            <label className="md:col-span-2">
  <span className="mb-2 block font-medium">
    Do you need advanced automations?
  </span>

  <select
    value={needsAdvancedAutomations ? "yes" : "no"}
    onChange={(e) =>
      setNeedsAdvancedAutomations(e.target.value === "yes")
    }
    className="w-full rounded-xl border border-gray-300 p-4"
  >
    <option value="no">No</option>
    <option value="yes">Yes</option>
  </select>
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

{creatorCountry === "MX" && (
  <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
    <p className="font-bold text-yellow-900">
      Mexico pricing is different
    </p>

    <p className="mt-2 text-sm leading-6 text-yellow-800">
      Substack currently does not apply its standard 10% application fee to
      creators with Stripe accounts based in Mexico. Stripe Mexico also uses
      different payment-processing fees. NewsletterFit will add full MXN
      calculations before launch rather than showing you an inaccurate estimate.
    </p>
  </div>
)}

          <button
           disabled={invalid || !countrySupported}
            onClick={() => setShowResults(true)}
            className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-lg font-semibold text-white disabled:opacity-40"
          >
            Compare My Platforms
          </button>

          {showResults && !invalid && (
            <div className="mt-10">

             {winner && (
  <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40">
    <div className="bg-gray-950 px-8 py-4 text-center text-white">
      <p className="text-xs font-bold uppercase tracking-[0.2em]">
        NewsletterFit Recommendation
      </p>
    </div>

    <div className="p-8 text-center md:p-10">
      <div className="mx-auto inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
        #1 Best fit based on your inputs
      </div>

      <h2 className="mt-5 text-5xl font-bold tracking-tight">
        {winner.name}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-gray-600">
        Based on the pricing, payment fees, audience size and growth assumptions
        included in this analysis.
      </p>

      <div className="mx-auto mt-8 grid max-w-2xl gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-6">
          <p className="text-sm font-medium text-gray-500">
            Estimated cost
          </p>

          <p className="mt-2 text-3xl font-bold">
            ${Math.round(winner.cost).toLocaleString()}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            over {years} {years === 1 ? "year" : "years"}
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-6">
          <p className="text-sm font-medium text-green-700">
            Potential savings vs. current platform
          </p>

          <p className="mt-2 text-3xl font-bold text-green-900">
            ${Math.round(savingsVsCurrent).toLocaleString()}
          </p>

          <p className="mt-1 text-sm text-green-700">
            based on your projection
          </p>
        </div>
      </div>

      {winner.name !== currentPlatform ? (
        <div className="mt-8">
         {affiliateLinks[winner.name] ? (
  <a
    href={affiliateLinks[winner.name]}
    target="_blank"
    rel="sponsored noopener noreferrer"
    className="inline-block rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white"
  >
    Explore {winner.name} →
  </a>
) : (
  <button
    type="button"
    disabled
    className="rounded-xl bg-gray-300 px-8 py-4 text-lg font-semibold text-gray-600"
  >
    Explore {winner.name} →
  </button>
)}

<p className="mt-3 text-xs text-gray-500">
  {affiliateLinks[winner.name]
    ? "NewsletterFit may earn a commission if you sign up through this link, at no extra cost to you."
    : "Partner link coming soon."}
</p>
        </div>
      ) : (
        <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-gray-50 p-5">
          <p className="font-semibold">
            You may already be on your lowest-cost option.
          </p>
        </div>
      )}
    </div>
  </div>
)}

              {winner && currentPlatformResult && (
  <div className="mt-6 rounded-3xl border border-gray-200 p-7 text-center">
    <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
      Compared with your current platform
    </p>

    {winner.name === currentPlatform ? (
      <>
        <h3 className="mt-3 text-3xl font-bold">
          Your current platform is already the lowest-cost option.
        </h3>

        <p className="mt-3 text-gray-600">
          Based on the fees and assumptions included in this calculator,
          switching platforms would not currently save you money.
        </p>
      </>
    ) : (
      <>
        <h3 className="mt-3 text-3xl font-bold">
          Switching from {currentPlatform} to {winner.name}
        </h3>

        <p className="mt-4 text-lg text-gray-700">
          Could save you approximately{" "}
          <strong>
            ${Math.round(savingsVsCurrent).toLocaleString()}
          </strong>{" "}
          over {years} {years === 1 ? "year" : "years"}.
        </p>
      </>
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

<section className="mx-auto max-w-6xl px-6 py-16">
  <div className="max-w-2xl">
    <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
      Compare platforms
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
      Compare newsletter platforms side by side
    </h2>

    <p className="mt-4 text-lg leading-8 text-gray-600">
      Explore detailed comparisons between the most popular newsletter
      platforms and find the best fit for your audience and business model.
    </p>
  </div>

  <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    <a
      href="/beehiiv-vs-substack"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">Beehiiv vs Substack</h3>
      <p className="mt-2 text-gray-600">
        Compare fees, monetization and growth tools.
      </p>
    </a>

    <a
      href="/beehiiv-vs-kit"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">Beehiiv vs Kit</h3>
      <p className="mt-2 text-gray-600">
        Newsletter growth tools vs creator email automation.
      </p>
    </a>

    <a
      href="/beehiiv-vs-ghost"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">Beehiiv vs Ghost</h3>
      <p className="mt-2 text-gray-600">
        Compare newsletter growth with publishing control.
      </p>
    </a>

    <a
      href="/kit-vs-substack"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">Kit vs Substack</h3>
      <p className="mt-2 text-gray-600">
        Compare automation, simplicity and subscription fees.
      </p>
    </a>

    <a
      href="/substack-vs-ghost"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">Substack vs Ghost</h3>
      <p className="mt-2 text-gray-600">
        Revenue share vs fixed-cost independent publishing.
      </p>
    </a>

    <a
      href="/kit-vs-ghost"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">Kit vs Ghost</h3>
      <p className="mt-2 text-gray-600">
        Email automation vs independent publishing.
      </p>
    </a>

<a
  href="/mailerlite-vs-beehiiv"
  className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
>
  <h3 className="text-xl font-bold">MailerLite vs Beehiiv</h3>
  <p className="mt-2 text-gray-600">
    Email marketing and automation vs newsletter growth.
  </p>
</a>

<a
  href="/mailerlite-vs-kit"
  className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
>
  <h3 className="text-xl font-bold">MailerLite vs Kit</h3>
  <p className="mt-2 text-gray-600">
    Compare pricing, automation and creator tools.
  </p>
</a>

<a
  href="/mailerlite-vs-substack"
  className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
>
  <h3 className="text-xl font-bold">MailerLite vs Substack</h3>
  <p className="mt-2 text-gray-600">
    Fixed platform pricing vs subscription revenue share.
  </p>
</a>

<a
  href="/mailerlite-vs-ghost"
  className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
>
  <h3 className="text-xl font-bold">MailerLite vs Ghost</h3>
  <p className="mt-2 text-gray-600">
    Email marketing automation vs independent publishing.
  </p>
</a>

  </div>
<div className="mt-12">
  <p className="text-sm font-bold uppercase tracking-wide text-gray-500">
    Newsletter guides
  </p>

  <h2 className="mt-3 text-3xl font-bold tracking-tight">
    Find the right newsletter platform
  </h2>

  <div className="mt-6 grid gap-5 md:grid-cols-3">
    <a
      href="/best-newsletter-platform"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">
        Best Newsletter Platforms
      </h3>
      <p className="mt-2 text-gray-600">
        Compare our top platform picks for different types of creators.
      </p>
    </a>

    <a
      href="/best-newsletter-platform-for-beginners"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">
        Best Platforms for Beginners
      </h3>
      <p className="mt-2 text-gray-600">
        Easy and affordable options for starting your first newsletter.
      </p>
    </a>

    <a
      href="/best-platform-for-paid-newsletters"
      className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">
        Best Platforms for Paid Newsletters
      </h3>
      <p className="mt-2 text-gray-600">
        Compare fees and monetization options for paid subscribers.
      </p>
    </a>
  </div>
</div>
  <div className="mt-8">
    <a
      href="/substack-fee-calculator"
      className="font-semibold underline"
    >
      Calculate Substack fees →
    </a>
  </div>
</section>

    </main>

  );
}