import { TrendingUp, ArrowUpRight, Star, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const trendingTools = [
  { name: "ChatGPT", icon: "🤖", description: "Conversational AI for writing, brainstorming, and automation.", category: "Writing", upvotes: 1247, rating: 4.9, hot: true },
  { name: "Sora", icon: "🎬", description: "AI video generation from text and images by OpenAI.", category: "Video", upvotes: 1792, rating: 4.8, hot: true },
  { name: "ElevenLabs", icon: "🎵", description: "AI voice cloning, dubbing, and text-to-speech.", category: "Voice", upvotes: 1347, rating: 4.7, hot: false },
  { name: "Claude", icon: "🧠", description: "Advanced AI assistant by Anthropic for complex tasks.", category: "Coding", upvotes: 1456, rating: 4.8, hot: true },
  { name: "Midjourney", icon: "🎨", description: "Create stunning AI artwork from text prompts.", category: "Image", upvotes: 1890, rating: 4.9, hot: true },
  { name: "Adobe", icon: "🎨", description: "Full creative suite with AI-powered features.", category: "Design", upvotes: 1892, rating: 4.7, hot: false },
];

export default function TrendingTools() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Trending This Week</h2>
              <p className="text-sm text-muted-foreground mt-0.5">Most popular tools right now</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100">
            <Flame className="h-3.5 w-3.5 text-red-500 animate-pulse" />
            <span className="text-xs font-semibold text-red-500">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {trendingTools.map((tool, index) => (
            <Link key={tool.name}
              href={`/${tool.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
              className="group relative flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-hover hover:border-primary/15 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute -top-2.5 -left-2 z-10">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-md ${index < 3 ? 'gradient-primary' : 'bg-gray-400'}`}>
                  {index + 1}
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-muted/80 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform duration-500 border border-border/30 shrink-0">
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors truncate">{tool.name}</h3>
                  {tool.hot && (
                    <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-red-50 text-red-500">
                      <Flame className="h-2.5 w-2.5" />
                      <span className="text-[9px] font-bold uppercase">Hot</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{tool.description}</p>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5">{tool.category}</Badge>
                  <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />{tool.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">↑ {tool.upvotes.toLocaleString()}</span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}