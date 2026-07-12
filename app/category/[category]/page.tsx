import Link from "next/link";
import { Star, ArrowUp, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData, Tool } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sub?: string }>;
}) {
  const { category } = await params;
  const { sub } = await searchParams;
  const categoryInfo = (categoriesData as any)[category];
  const categoryTitle = categoryInfo?.title || category.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  if (sub) {
    const subTitle = sub.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
      title: subTitle + " AI Tools | " + categoryTitle + " | AI Tools Prime",
      description: "Browse the best " + subTitle + " AI tools in the " + categoryTitle + " category. Find and compare top AI tools.",
    };
  }

  return {
    title: categoryTitle + " AI Tools | AI Tools Prime",
    description: categoryInfo?.description || "Browse the best " + categoryTitle + " AI tools. Find and compare top AI tools in this category.",
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

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sub?: string }>;
}) {
  const { category } = await params;
  const { sub } = await searchParams;
  const categoryInfo = (categoriesData as any)[category];
  const bySub = (toolsData as any)[category] as Record<string, Tool[]> | undefined;
  const displayTitle = categoryInfo?.title || category.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const categoryDescription = categoryInfo?.description || "";

  const subcategories = bySub ? Object.entries(bySub) : [];
  const totalTools = subcategories.reduce((acc, [, tools]) => acc + (Array.isArray(tools) ? tools.length : 0), 0);

  let displayTools: Tool[] = [];
  if (sub && bySub && bySub[sub]) {
    displayTools = [...bySub[sub].filter(Boolean)].sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  } else {
    displayTools = subcategories
      .flatMap(([, tools]) => Array.isArray(tools) ? tools : [])
      .filter(Boolean)
      .sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  }

  const subTitle = sub ? sub.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          {sub ? (
            <>
              <Link href={"/category/" + category} className="hover:text-foreground">{displayTitle}</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{subTitle}</span>
            </>
          ) : (
            <span className="text-foreground font-medium">{displayTitle}</span>
          )}
        </div>

        {/* Hero Section */}
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">
            {sub ? subTitle : displayTitle} AI Tools
          </h1>
          {!sub && categoryDescription && (
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-4">{categoryDescription}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {displayTools.length} AI Tools
            </span>
            {!sub && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {subcategories.length} Subcategories
              </span>
            )}
          </div>
        </div>

        {/* Subcategory Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link href={"/category/" + category}>
            <span className={"px-4 py-2 rounded-full text-sm font-medium border transition-all " + (!sub ? "bg-primary text-white border-primary shadow-md" : "border-border hover:border-primary hover:text-primary bg-background")}>
              All ({totalTools})
            </span>
          </Link>
          {subcategories.map(([subKey, tools]) => {
            const sTitle = subKey.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
            const count = Array.isArray(tools) ? tools.length : 0;
            return (
              <Link key={subKey} href={"/category/" + category + "?sub=" + subKey}>
                <span className={"px-4 py-2 rounded-full text-sm font-medium border transition-all " + (sub === subKey ? "bg-primary text-white border-primary shadow-md" : "border-border hover:border-primary hover:text-primary bg-background")}>
                  {sTitle} ({count})
                </span>
              </Link>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayTools.map((tool, index) => {
            const gradient = gradients[index % gradients.length];
            return (
              <div key={tool.id} className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {/* Card Header with gradient */}
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

                {/* Card Body */}
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

                  {/* Action Buttons */}
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
