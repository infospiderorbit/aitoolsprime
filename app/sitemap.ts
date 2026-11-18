import { MetadataRoute } from "next";
import { toolsData } from "@/data/toolsData";

export const dynamic = "force-static";

const BASE_URL = "https://www.aitoolsprime.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/categories", priority: 0.9 },
    { path: "/full-list", priority: 0.8 },
    { path: "/submit-ai-tool", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.5 },
    { path: "/help", priority: 0.5 },
    { path: "/privacy", priority: 0.4 },
    { path: "/terms", priority: 0.4 },
  ];
  staticPages.forEach((p) =>
    urls.push({ url: BASE_URL + p.path, lastModified: now, changeFrequency: "weekly", priority: p.priority })
  );

  const seen = new Set<string>();
  Object.entries(toolsData).forEach(([cat, catData]) => {
    urls.push({ url: BASE_URL + "/category/" + cat, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
    Object.entries(catData as Record<string, any>).forEach(([sub, subTools]) => {
      urls.push({ url: BASE_URL + "/category/" + cat + "/" + sub, lastModified: now, changeFrequency: "weekly", priority: 0.75 });
      if (Array.isArray(subTools)) {
        subTools.filter(Boolean).forEach((tool: any) => {
          if (!tool.url || seen.has(tool.id)) return;
          seen.add(tool.id);
          urls.push({ url: BASE_URL + "/" + tool.id, lastModified: now, changeFrequency: "weekly", priority: 0.7 });
        });
      }
    });
  });

  return urls;
}
