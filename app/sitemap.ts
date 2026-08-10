import type { MetadataRoute } from "next";

import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const propertyUrls = properties.map((property) => ({
    url: `https://oakshiffs.com/property/${property.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://oakshiffs.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://oakshiffs.com/properties",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://oakshiffs.com/cities/lagos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://oakshiffs.com/cities/accra",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://oakshiffs.com/cities/abuja",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...propertyUrls,
  ];
}