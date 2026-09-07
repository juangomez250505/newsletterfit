"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const comparisons = [
  ["Beehiiv", "Substack", "/beehiiv-vs-substack"],
  ["Beehiiv", "Kit", "/beehiiv-vs-kit"],
  ["Beehiiv", "Ghost", "/beehiiv-vs-ghost"],
  ["Kit", "Substack", "/kit-vs-substack"],
  ["Substack", "Ghost", "/substack-vs-ghost"],
  ["Kit", "Ghost", "/kit-vs-ghost"],
  ["MailerLite", "Beehiiv", "/mailerlite-vs-beehiiv"],
  ["MailerLite", "Kit", "/mailerlite-vs-kit"],
  ["MailerLite", "Substack", "/mailerlite-vs-substack"],
  ["MailerLite", "Ghost", "/mailerlite-vs-ghost"],
  ["GetResponse", "Beehiiv", "/getresponse-vs-beehiiv"],
  ["GetResponse", "Kit", "/getresponse-vs-kit"],
  ["GetResponse", "MailerLite", "/getresponse-vs-mailerlite"],
  ["GetResponse", "Substack", "/getresponse-vs-substack"],
  ["GetResponse", "Ghost", "/getresponse-vs-ghost"],
] as const;

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="fixed right-5 top-5 z-[70] flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-lg transition duration-200 hover:border-[#2860B8] hover:shadow-xl"
      >
        <span className="relative block h-6 w-6">
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gray-950 transition-all duration-300 ${
              open
                ? "-translate-y-1/2 rotate-45"
                : "-translate-y-[8px]"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-950 transition-all duration-300 ${
              open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gray-950 transition-all duration-300 ${
              open
                ? "-translate-y-1/2 -rotate-45"
                : "translate-y-[6px]"
            }`}
          />
        </span>
      </button>

      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={close}
        className={`fixed inset-0 z-[50] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[60] h-dvh w-[90vw] max-w-[410px] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-7 pb-12 pt-8">
          <div className="flex items-center gap-3 pr-16">
            <img
              src="/icon.jpg"
              alt=""
              className="h-11 w-11 rounded-xl object-cover"
            />

            <div>
              <p className="text-xl font-bold tracking-tight text-gray-950">
                Newsletter<span className="text-[#2860B8]">Fit</span>
              </p>
              <p className="text-xs text-gray-500">
                Newsletter platform intelligence
              </p>
            </div>
          </div>

          <div className="my-7 h-px bg-gray-200" />

          {/* Calculator */}
          <nav>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2860B8]">
              Calculator
            </p>

            <Link
              href="/#calculator"
              onClick={close}
              className="brand-swipe flex rounded-xl bg-black px-4 py-3 font-semibold text-white"
            >
              Find My Best Platform →
            </Link>
          </nav>

          {/* Guides */}
          <nav className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2860B8]">
              Guides
            </p>

            <div className="space-y-1">
              <Link
                href="/best-newsletter-platform"
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-[#F3F7FD] hover:text-[#2860B8]"
              >
                Best Newsletter Platform
              </Link>

              <Link
                href="/best-newsletter-platform-for-beginners"
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-[#F3F7FD] hover:text-[#2860B8]"
              >
                Best Platform for Beginners
              </Link>

              <Link
                href="/best-platform-for-paid-newsletters"
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-[#F3F7FD] hover:text-[#2860B8]"
              >
                Best for Paid Newsletters
              </Link>
            </div>
          </nav>

          {/* Comparisons */}
          <nav className="mt-8">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2860B8]">
                Comparisons
              </p>

              <Link
                href="/comparisons"
                onClick={close}
                className="text-xs font-bold text-gray-500 transition hover:text-[#2860B8]"
              >
                View all →
              </Link>
            </div>

            <div className="space-y-1">
              {comparisons.map(([left, right, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-[#F3F7FD] hover:text-[#2860B8]"
                >
                  {left} vs {right}
                </Link>
              ))}
            </div>
          </nav>

          {/* Company */}
          <nav className="mt-8 border-t border-gray-200 pt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2860B8]">
              NewsletterFit
            </p>

            <div className="space-y-1">
              <Link
                href="/about"
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-[#F3F7FD] hover:text-[#2860B8]"
              >
                About
              </Link>

              <Link
                href="/affiliate-disclosure"
                onClick={close}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-[#F3F7FD] hover:text-[#2860B8]"
              >
                Affiliate Disclosure
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
