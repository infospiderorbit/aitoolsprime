"use client";
import { useState, useEffect, useCallback } from "react";
import { Search, Sparkles, Zap, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingIcons = ["🤖", "🎨", "✍️", "🎬", "🎵", "💻", "📊", "🧠"];
const typingPhrases = ["writing assistants...", "image generators...", "video creation...", "code helpers...", "voice cloning...", "chatbots..."];

interface HeroProps {
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
}

export default function Hero({ searchQuery, onSearchQueryChange }: HeroProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToResults = useCallback(() => {
    const el = document.getElementById("featured-tools");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const phrase = typingPhrases[currentPhrase];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(phrase.slice(0, displayText.length + 1));
        if (displayText.length === phrase.length) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setDisplayText(phrase.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  const stats = [
    { icon: Zap, value: "80k+", label: "AI Tools" },
    { icon: Layers, value: "21", label: "Categories" },
    { icon: TrendingUp, value: "500+", label: "Subcategories" },
  ];

  return (
    <section className="relative py-28 md:py-40 overflow-hidden gradient-hero">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-indigo-400/6 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        {floatingIcons.map((icon, i) => (
          <div key={i} className="absolute text-2xl opacity-[0.12] animate-float select-none"
            style={{ left: `${10 + (i * 12) % 85}%`, top: `${15 + ((i * 17) % 70)}%`, animationDelay: `${i * 0.6}s` }}>
            {icon}
          </div>
        ))}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] backdrop-blur-md mb-10">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium text-white/80 tracking-wide">The #1 AI Tools Directory</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight">
            <span className="text-white">Find the Perfect</span>
            <br />
            <span className="text-gradient">AI Tool</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl mx-auto leading-relaxed">
            Discover, compare & choose from 80k+ AI tools with curated reviews and daily updates.
          </p>

          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center bg-white/[0.06] backdrop-blur-xl rounded-2xl border border-white/[0.1] p-1.5 shadow-[0_8px_60px_-12px_rgba(0,0,0,0.5)] focus-within:border-white/25 transition-all duration-500">
              <Search className="absolute left-5 h-5 w-5 text-white/30" />
              <input
                type="text"
                placeholder={`Search AI tools for ${displayText}`}
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && searchQuery.trim()) scrollToResults(); }}
                className="w-full bg-transparent pl-12 pr-4 py-4 md:py-5 text-white placeholder:text-white/30 text-base outline-none"
              />
              <Button onClick={scrollToResults}
                className="hidden md:flex bg-white text-primary hover:bg-white/90 rounded-xl px-7 py-3 h-auto font-semibold shrink-0">
                Search <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-16">
            <span className="text-xs text-white/30 mr-1 self-center">Popular:</span>
            {["ChatGPT", "Midjourney", "AI Writing", "Video AI", "Voice Clone"].map((tag) => (
              <button key={tag} onClick={() => { onSearchQueryChange(tag); setTimeout(scrollToResults, 100); }}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-white/50 hover:bg-white/[0.12] hover:text-white/80 transition-all duration-300">
                {tag}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-8 md:gap-16">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/[0.08] flex items-center justify-center">
                      <Icon className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-xs md:text-sm text-white/35 font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}