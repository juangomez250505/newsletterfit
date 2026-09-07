import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/comparisons",
    "/substack-fee-calculator",

    "/beehiiv-vs-substack",
    "/beehiiv-vs-kit",
    "/beehiiv-vs-ghost",

    "/kit-vs-substack",
    "/kit-vs-ghost",

    "/substack-vs-ghost",

    "/mailerlite-vs-beehiiv",
    "/mailerlite-vs-kit",
    "/mailerlite-vs-substack",
    "/mailerlite-vs-ghost",

    "/getresponse-vs-beehiiv",
    "/getresponse-vs-kit",
    "/getresponse-vs-mailerlite",
    "/getresponse-vs-substack",
    "/getresponse-vs-ghost",

    "/best-newsletter-platform",
    "/best-newsletter-platform-for-beginners",
    "/best-platform-for-paid-newsletters",

    "/about",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `https://getnewsletterfit.com${route}`,
  }));
}
