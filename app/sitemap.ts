import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/app/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
