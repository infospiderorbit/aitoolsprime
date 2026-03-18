import { Zap, Layers, Grid3X3, TrendingUp, Globe } from "lucide-react";

const stats = [
  { icon: Zap, value: "80k+", label: "AI Tools Listed", description: "Comprehensive directory" },
  { icon: Layers, value: "21", label: "Categories", description: "Well organized" },
  { icon: Grid3X3, value: "500+", label: "Subcategories", description: "Detailed taxonomy" },
  { icon: TrendingUp, value: "Daily", label: "Updates", description: "Always fresh" },
];

export default function Stats() {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-400/5 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur-sm mb-6">
            <Globe className="h-3.5 w-3.5 text-blue-300" />
            <span className="text-xs font-medium text-white/70">Trusted Worldwide</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trusted by Developers & Creators</h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto">Join thousands who discover the best AI tools every day</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label}
                className="relative text-center p-7 rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${index * 0.12}s` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.06] mb-5 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">{stat.value}</div>
                <div className="text-sm font-medium text-white/80 mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}