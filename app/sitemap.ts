import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://newsletterfit.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://newsletterfit.vercel.app/beehiiv-vs-substack",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
  url: "https://newsletterfit.vercel.app/substack-fee-calculator",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},
  ];
}