import Link from "next/link";
import { Star, ArrowUp, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData, Tool } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  for (const [category, subcategories] of Object.entries(toolsData)) {
    for (const subcategory of Object.keys(subcategories as object)) {
      params.push({ category, subcategory });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;
  const categoryInfo = (categoriesData as any)[category];
  const categoryTitle = categoryInfo?.title || category.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const subTitle = subcategory.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return {
    title: "Best " + subTitle + " Tools 2025 | " + categoryTitle + " | AI Tools Prime",
    description: "Discover and compare the best " + subTitle + " AI tools in 2025. Browse top-rated " + subTitle + " tools with reviews, features, and direct links.",
  };
}

const gradients = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-500",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600",
  "from-amber-500 to-orange-600",
  "from-teal-500 to-green-600",
];

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;
  const categoryInfo = (categoriesData as any)[category];
  const bySub = (toolsData as any)[category] as Record<string, Tool[]> | undefined;
  const displayTitle = categoryInfo?.title || category.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const subTitle = subcategory.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const tools = bySub && bySub[subcategory]
    ? [...bySub[subcategory].filter(Boolean)].sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0))
    : [];

  const subcategories = bySub ? Object.entries(bySub) : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href={"/category/" + category} className="hover:text-foreground">{displayTitle}</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{subTitle}</span>
        </div>

        {/* Hero Section */}
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Best {subTitle} AI Tools</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">
            Discover and compare the best {subTitle} tools available today. Browse {tools.length} top-rated options with features, ratings, and direct links.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {tools.length} AI Tools
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {displayTitle}
            </span>
          </div>
        </div>

        {/* Subcategory Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href={"/category/" + category}>
            <span className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary bg-background transition-all">
              All Tools
            </span>
          </Link>
          {subcategories.map(([subKey, subTools]) => {
            const sTitle = subKey.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
            const count = Array.isArray(subTools) ? subTools.length : 0;
            return (
              <Link key={subKey} href={"/category/" + category + "/" + subKey}>
                <span className={"px-4 py-2 rounded-full text-sm font-medium border transition-all " + (subKey === subcategory ? "bg-primary text-white border-primary shadow-md" : "border-border hover:border-primary hover:text-primary bg-background")}>
                  {sTitle} ({count})
                </span>
              </Link>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {tools.map((tool, index) => {
            const gradient = gradients[index % gradients.length];
            return (
              <div key={tool.id} className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className={"bg-gradient-to-r " + gradient + " p-5 flex items-center gap-3"}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl shadow-sm">
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white truncate text-sm leading-tight">{tool.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-300 text-yellow-300" />
                      <span className="text-xs text-white/80">{tool.rating?.toFixed(1) ?? "4.5"}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 gap-3">
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ArrowUp className="h-3 w-3" />{tool.upvotes?.toLocaleString()}
                    </span>
                    {tool.verified && (
                      <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-medium">Verified</span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Link href={"/" + tool.id} className="flex-1">
                      <button className="w-full text-xs font-semibold py-2 px-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-200">
                        View Details
                      </button>
                    </Link>
                    {tool.url && (
                      <a href={tool.url} target="_blank" rel="noopener noreferrer">
                        <button className="text-xs font-semibold py-2 px-3 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-200 flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                          Visit
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <Footer />
    </div>
  );
}
