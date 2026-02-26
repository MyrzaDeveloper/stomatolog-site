import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com"; // домен менен алмаштыр
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
  ];
}