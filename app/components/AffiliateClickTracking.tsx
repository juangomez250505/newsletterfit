"use client";

import { useEffect } from "react";

export default function AffiliateClickTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>(
        'a[rel~="sponsored"]'
      );

      if (!link) return;

      const url = new URL(link.href);

      if (url.origin === window.location.origin) return;

      const gtag = (window as Window & {
        gtag?: (...args: unknown[]) => void;
      }).gtag;

      gtag?.("event", "affiliate_click", {
        link_url: url.href,
        link_domain: url.hostname,
        page_path: window.location.pathname
      });
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
