"use client";

import { useEffect, useState } from "react";

type ConsentValue = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(
      "newsletterfit_analytics_consent"
    );

    if (!savedConsent) {
      setVisible(true);
    }
  }, []);

  function updateConsent(value: ConsentValue) {
    const gtag = (
      window as typeof window & {
        gtag?: (
          command: "consent",
          action: "update",
          params: {
            analytics_storage: "granted" | "denied";
            ad_storage: "denied";
            ad_user_data: "denied";
            ad_personalization: "denied";
          }
        ) => void;
      }
    ).gtag;

    gtag?.("consent", "update", {
      analytics_storage: value === "accepted" ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    localStorage.setItem("newsletterfit_analytics_consent", value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
      <p className="text-sm leading-6 text-slate-700">
        NewsletterFit uses Google Analytics to understand website traffic and
        improve the site. You can accept or reject analytics cookies.{" "}
        <a
          href="/privacy"
          className="font-semibold text-slate-900 underline"
        >
          Privacy Policy
        </a>
      </p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => updateConsent("rejected")}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Reject
        </button>

        <button
          type="button"
          onClick={() => updateConsent("accepted")}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Accept analytics
        </button>
      </div>
    </div>
  );
}