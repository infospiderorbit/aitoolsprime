import { MetadataRoute } from "next";
import { toolsData, Tool } from "@/data/toolsData";

const BASE_URL = "https://www.aitoolsprime.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "daily" as const },
    { url: BASE_URL + "/categories", priority: 0.9, changeFrequency: "weekly" as const },
    { url: BASE_URL + "/full-list", priority: 0.8, changeFrequency: "daily" as const },
    { url: BASE_URL + "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { url: BASE_URL + "/contact", priority: 0.5, changeFrequency: "monthly" as const },
    { url: BASE_URL + "/submit", priority: 0.7, changeFrequency: "monthly" as const },
    { url: BASE_URL + "/privacy", priority: 0.4, changeFrequency: "monthly" as const },
    { url: BASE_URL + "/terms", priority: 0.4, changeFrequency: "monthly" as const },
    { url: BASE_URL + "/help", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  urls.push(...staticPages.map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  })));

  // Category pages
  const categories = Object.keys(toolsData);
  categories.forEach((cat) => {
    urls.push({
      url: BASE_URL + "/category/" + cat,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    });
  });

  // All tool pages + alternatives pages
  Object.values(toolsData).forEach((catData) => {
    Object.values(catData).forEach((subTools) => {
      if (Array.isArray(subTools)) {
        subTools.filter(Boolean).forEach((tool: Tool) => {
          urls.push({
            url: BASE_URL + "/" + tool.id,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
          });
          urls.push({
            url: BASE_URL + "/alternatives/" + tool.id,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.6,
          });
        });
      }
    });
  });

  return urls;
}