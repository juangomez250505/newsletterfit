"use client";

import { useState } from "react";

export default function Calculator() {
  const [paidSubscribers, setPaidSubscribers] = useState(100);
  const [price, setPrice] = useState(8);
  const [billing, setBilling] = useState("monthly");

  const chargesPerYear = billing === "monthly" ? 12 : 1;

  const revenuePerCharge = paidSubscribers * price;
  const annualRevenue = revenuePerCharge * chargesPerYear;

  const substackFee = annualRevenue * 0.1;
  const stripePercentFee = annualRevenue * 0.029;
  const stripeBillingFee = annualRevenue * 0.007;

  const stripeFixedFee =
    paidSubscribers * 0.3 * chargesPerYear;

  const totalFees =
    substackFee +
    stripePercentFee +
    stripeBillingFee +
    stripeFixedFee;

  const netRevenue = annualRevenue - totalFees;
  const effectiveFee =
    annualRevenue > 0 ? (totalFees / annualRevenue) * 100 : 0;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50">
      <h2 className="text-3xl font-bold">
        Calculate your Substack fees
      </h2>

      <p className="mt-2 text-gray-600">
        Estimate how much Substack and Stripe could take from your paid
        newsletter revenue.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <label>
          <span className="mb-2 block font-medium">
            Paid subscribers
          </span>

          <input
            type="number"
            min="0"
            value={paidSubscribers}
            onChange={(e) =>
              setPaidSubscribers(Number(e.target.value))
            }
            className="w-full rounded-xl border border-gray-300 p-4"
          />
        </label>

        <label>
          <span className="mb-2 block font-medium">
            Subscription price (USD)
          </span>

          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) =>
              setPrice(Number(e.target.value))
            }
            className="w-full rounded-xl border border-gray-300 p-4"
          />
        </label>

        <label className="md:col-span-2">
          <span className="mb-2 block font-medium">
            Billing frequency
          </span>

          <select
            value={billing}
            onChange={(e) => setBilling(e.target.value)}
            className="w-full rounded-xl border border-gray-300 p-4"
          >
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
        </label>
      </div>

      <div className="mt-8 rounded-3xl bg-gray-950 p-8 text-white">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-400">
          Estimated annual fees
        </p>

        <p className="mt-3 text-5xl font-bold">
          ${Math.round(totalFees).toLocaleString()}
        </p>

        <p className="mt-2 text-gray-400">
          About {effectiveFee.toFixed(1)}% of your gross paid revenue
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-5">
          <p className="text-sm text-gray-500">
            Gross annual revenue
          </p>

          <p className="mt-1 text-2xl font-bold">
            ${Math.round(annualRevenue).toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-5">
          <p className="text-sm text-green-700">
            Estimated revenue after fees
          </p>

          <p className="mt-1 text-2xl font-bold text-green-900">
            ${Math.round(netRevenue).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <div className="flex justify-between border-b border-gray-100 p-4">
          <span>Substack 10% fee</span>
          <strong>
            ${Math.round(substackFee).toLocaleString()}
          </strong>
        </div>

        <div className="flex justify-between border-b border-gray-100 p-4">
          <span>Stripe 2.9%</span>
          <strong>
            ${Math.round(stripePercentFee).toLocaleString()}
          </strong>
        </div>

        <div className="flex justify-between border-b border-gray-100 p-4">
          <span>Stripe $0.30 transaction fees</span>
          <strong>
            ${Math.round(stripeFixedFee).toLocaleString()}
          </strong>
        </div>

        <div className="flex justify-between p-4">
          <span>Stripe Billing 0.7%</span>
          <strong>
            ${Math.round(stripeBillingFee).toLocaleString()}
          </strong>
        </div>
      </div>

      <p className="mt-5 text-xs leading-5 text-gray-500">
        Estimate uses Substack's standard 10% platform fee and standard U.S.
        Stripe card pricing. Actual fees can vary by country, payment method,
        currency and other factors.
      </p>
    </div>
  );
}