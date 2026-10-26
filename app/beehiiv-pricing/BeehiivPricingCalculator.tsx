"use client";

import { useState } from "react";

type Billing = "annual" | "monthly";
const rates = [
  { limit: 1000, annual: 49, monthly: 59 },
  { limit: 2500, annual: 69, monthly: 79 },
  { limit: 5000, annual: 95, monthly: 109 },
  { limit: 10000, annual: 119, monthly: 139 },
  { limit: 25000, annual: 169, monthly: 199 },
  { limit: 50000, annual: 249, monthly: 299 },
  { limit: 75000, annual: 329, monthly: 389 },
  { limit: 100000, annual: 399, monthly: 469 },
];

const money = (n: number) => n.toLocaleString("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 2,
});

export default function BeehiivPricingCalculator() {
  const [subscribers, setSubscribers] = useState(2500);
  const [paying, setPaying] = useState(100);
  const [price, setPrice] = useState(10);
  const [billing, setBilling] = useState<Billing>("annual");

  const audience = Math.max(0, Number.isFinite(subscribers) ? subscribers : 0);
  const paid = Math.min(audience, Math.max(0, Number.isFinite(paying) ? paying : 0));
  const monthlyPrice = Math.max(0, Number.isFinite(price) ? price : 0);
  const tier = rates.find((r) => audience <= r.limit);
  const beehiivFee = (paid === 0 && audience <= 2500)
    ? 0
    : tier ? tier[billing] : null;
  const revenue = paid * monthlyPrice;
  const substackFee = revenue * 0.1;
  const difference = beehiivFee === null ? null : substackFee - beehiivFee;
  const threshold = beehiivFee === null ? null : beehiivFee * 10;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Total subscribers
          <input className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3"
            type="number" min="0" step="1" value={subscribers}
            onChange={(e) => setSubscribers(Math.max(0, Math.floor(Number(e.target.value) || 0)))} />
        </label>
        <label className="block text-sm font-semibold">Paying subscribers
          <input className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3"
            type="number" min="0" step="1" value={paying}
            onChange={(e) => setPaying(Math.max(0, Math.floor(Number(e.target.value) || 0)))} />
        </label>
        <label className="block text-sm font-semibold">Price per subscriber / month (USD)
          <input className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3"
            type="number" min="0" step="0.01" value={price}
            onChange={(e) => setPrice(Math.max(0, Number(e.target.value) || 0))} />
        </label>
        <label className="block text-sm font-semibold">Beehiiv billing
          <select className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3"
            value={billing} onChange={(e) => setBilling(e.target.value as Billing)}>
            <option value="annual">Annually billed (monthly equivalent)</option>
            <option value="monthly">Month-to-month billing</option>
          </select>
        </label>
      </div>
      {paying > subscribers && (
        <p className="mt-3 text-sm text-amber-800">Paying subscribers cannot exceed your total audience; the estimate uses {paid.toLocaleString()}.</p>
      )}
      {audience > 100000 && (
        <p className="mt-4 text-sm text-amber-800">Lite supports up to 100,000 subscribers. Check Pro or Enterprise pricing for larger audiences.</p>
      )}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-slate-500">Beehiiv platform plan /mo</p>
          <p className="mt-2 text-2xl font-bold">{beehiivFee === null ? "Check plan" : money(beehiivFee)}</p>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-slate-500">Substack platform fee /mo</p>
          <p className="mt-2 text-2xl font-bold">{money(substackFee)}</p>
        </div>
        <div className="rounded-xl border bg-white p-5">
          <p className="text-sm text-slate-500">Difference /mo</p>
          <p className="mt-2 text-2xl font-bold">{difference === null ? "N/A" : money(Math.abs(difference))}</p>
          <p className="mt-1 text-xs text-slate-600">{difference === null ? "Above Lite's limit" : difference > 0 ? "Beehiiv platform charge lower" : difference < 0 ? "Substack platform fee lower" : "Same platform-fee cost"}</p>
        </div>
      </div>
      {threshold !== null && paying > 0 && (
        <p className="mt-4 text-sm leading-6 text-slate-700">
          At this Beehiiv tier, its plan cost equals 10% of approximately
          <strong> {money(threshold)} in monthly paid newsletter revenue</strong>.
          Other costs and platform features may change the decision.
        </p>
      )}
      <p className="mt-4 text-xs leading-5 text-slate-600">
        This is a simplified platform-fee comparison, not estimated take-home income.
        Stripe/payment processing, taxes and optional extras are excluded.
        Beehiiv annual-billing figures are monthly equivalents charged annually.
        Substack's percentage is 10% of paid newsletter revenue.
      </p>
    </div>
  );
}
