import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData } from "@/data/toolsData";

const categoryEmojis: { [key: string]: string } = {
  "writing-editing": "✍️",
  "image-generation-editing": "🖼️",
  "voice-generation-conversion": "🎙️",
  "video-animation": "🎬",
  "chatbots-virtual-companions": "🤖",
  "ai-detection-anti-detection": "🛡️",
  "coding-development": "💻",
  "music-audio": "🎵",
  "office-productivity": "📊",
  "social-media": "📱",
  "art-creative-design": "🎨",
  "daily-life": "🌟",
  "legal-finance": "⚖️",
  "business-management": "💼",
  "marketing-advertising": "📣",
  "health-wellness": "❤️",
  "education-translation": "📚",
  "business-research": "🔬",
  "research-data-analysis": "📈",
  "image-analysis": "🔍",
  "interior-architectural-design": "🏠",
  "other": "🔧",
};

function formatCategory(str: string) {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export const metadata = {
  title: "All AI Tool Categories | AI Tools Prime",
  description: "Browse all AI tool categories and subcategories.",
};

export default function CategoriesPage() {
  const categories = Object.entries(toolsData).map(([catKey, catData]) => {
    const subcategories = Object.entries(catData).map(([subKey, tools]) => ({
      key: subKey,
      count: Array.isArray(tools) ? tools.filter(Boolean).length : 0,
    })).filter((s) => s.count > 0).sort((a, b) => b.count - a.count);

    const totalCount = subcategories.reduce((sum, s) => sum + s.count, 0);
    return { key: catKey, title: formatCategory(catKey), emoji: categoryEmojis[catKey] || "🔧", totalCount, subcategories };
  }).sort((a, b) => b.totalCount - a.totalCount);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Find AI By Categories</h1>
          <p className="text-muted-foreground">Browse AI tools organized by category and functionality</p>
        </div>

        <div className="space-y-5">
          {categories.map((cat) => (
            <div key={cat.key} className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
              <Link href={"/category/" + cat.key}>
                <div className="flex items-center gap-4 px-6 py-4 border-b border-border hover:bg-muted/30 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                    {cat.emoji}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold group-hover:text-primary transition-colors">{cat.title}</h2>
                    <p className="text-xs text-muted-foreground">{cat.totalCount} tools · {cat.subcategories.length} subcategories</p>
                  </div>
                  <span className="text-xs text-primary font-medium">Browse all →</span>
                </div>
              </Link>

              <div className="px-6 py-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {cat.subcategories.map((sub) => (
                    <Link key={sub.key} href={"/category/" + cat.key + "?sub=" + sub.key}>
                      <div className="group flex flex-col gap-1 p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-pointer">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {formatCategory(sub.key)}
                        </span>
                        <span className="text-xs text-muted-foreground">{sub.count} tools</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}