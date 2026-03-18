"use client";
import { useMemo } from "react";
import { Star, ArrowUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toolsData } from "@/data/toolsData";

const FEATURED_CATEGORIES = [
  { key: "writing-editing", label: "Writing & Editing" },
  { key: "image-generation-editing", label: "Image Generation & Editing" },
  { key: "voice-generation-conversion", label: "Voice Generation & Conversion" },
  { key: "office-productivity", label: "Office & Productivity" },
  { key: "chatbots-virtual-companions", label: "Chatbots & Virtual Companions" },
];

export default function FeaturedTools({ searchQuery = "" }: { searchQuery?: string }) {
  const categories = useMemo(() => {
    return FEATURED_CATEGORIES.map(({ key, label }) => {
      const categoryData = (toolsData as any)[key] || {};
      const tools: any[] = [];
      Object.values(categoryData).forEach((subcategoryTools: any) => {
        if (Array.isArray(subcategoryTools)) tools.push(...subcategoryTools);
      });
      const filtered = searchQuery
        ? tools.filter(t => t.name?.toLowerCase().includes(searchQuery.toLowerCase()))
        : tools;
      return { key, label, tools: filtered.slice(0, 8), total: filtered.length };
    }).filter(c => c.total > 0);
  }, [searchQuery]);

  if (categories.length === 0) return null;

  return (
    <section id="featured-tools" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {categories.map(({ key, label, tools, total }) => (
          <div key={key} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                <Star className="h-7 w-7 text-amber-400" />
                {label}
                <span className="text-base text-muted-foreground font-normal">({total} tools)</span>
              </h2>
              <Link href={`/category/${key}`}>
                <Button variant="outline" size="sm">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tools.map((tool: any) => (
                <Link key={tool.id} href={`/${tool.id}`}
                  className="group premium-card p-5 flex flex-col gap-3 hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-2xl group-hover:scale-105 transition-transform">
                      {tool.icon}
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tool.pricing || "Free"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3">{tool.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ArrowUp className="h-3 w-3" />{tool.upvotes}
                    </span>
                    <span className="text-xs font-medium text-primary">Visit →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}