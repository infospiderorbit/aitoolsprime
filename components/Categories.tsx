import Link from "next/link";
import { PenTool, Image, Mic, Video, MessageCircle, Shield, Code, Music } from "lucide-react";
import { categoriesData } from "@/data/categoriesData";

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return n.toString();
}

const categoryMeta = [
  { slug: "writing-editing", title: "Writing & Editing", emoji: "✍️", gradient: "from-blue-500/10 to-blue-600/5", border: "group-hover:border-blue-400/30" },
  { slug: "image-generation-editing", title: "Image Generation", emoji: "🖼️", gradient: "from-purple-500/10 to-purple-600/5", border: "group-hover:border-purple-400/30" },
  { slug: "voice-generation-conversion", title: "Voice & Speech", emoji: "🎙️", gradient: "from-emerald-500/10 to-emerald-600/5", border: "group-hover:border-emerald-400/30" },
  { slug: "video-animation", title: "Video & Animation", emoji: "🎬", gradient: "from-red-500/10 to-red-600/5", border: "group-hover:border-red-400/30" },
  { slug: "chatbots-virtual-companions", title: "Chatbots & AI", emoji: "🤖", gradient: "from-amber-500/10 to-amber-600/5", border: "group-hover:border-amber-400/30" },
  { slug: "ai-detection-anti-detection", title: "AI Detection", emoji: "🛡️", gradient: "from-rose-500/10 to-rose-600/5", border: "group-hover:border-rose-400/30" },
  { slug: "coding-development", title: "Coding & Dev", emoji: "💻", gradient: "from-cyan-500/10 to-cyan-600/5", border: "group-hover:border-cyan-400/30" },
  { slug: "music-audio", title: "Music & Audio", emoji: "🎵", gradient: "from-indigo-500/10 to-indigo-600/5", border: "group-hover:border-indigo-400/30" },
];

const categories = categoryMeta.map((cat) => {
  const data = categoriesData[cat.slug as keyof typeof categoriesData];
  return { ...cat, count: data ? formatCount(data.totalCount) : "0" };
});

export default function Categories() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-3">
            Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore AI tools organized across {Object.keys(categoriesData).length} major categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 max-w-4xl mx-auto">
          {categories.map((cat, index) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`group relative flex flex-col items-center gap-4 p-7 rounded-2xl border border-border/50 bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${cat.border}`}
            >
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${cat.gradient}`} />
              <div className="relative">
                <span className="text-4xl md:text-5xl block group-hover:scale-110 transition-transform duration-500">
                  {cat.emoji}
                </span>
              </div>
              <div className="text-center relative">
                <p className="text-sm font-semibold text-foreground leading-tight mb-1.5 group-hover:text-primary transition-colors">
                  {cat.title}
                </p>
                <p className="text-xs text-muted-foreground font-medium">{cat.count} tools</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all categories →
          </Link>
        </div>
      </div>
    </section>
  );
}