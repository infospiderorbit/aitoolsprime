import Link from "next/link";
import { ArrowLeft, Star, ArrowUp } from "lucide-react";
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
    description: "Browse the best " + categoryTitle + " AI tools. Find and compare top AI tools in this category.",
  };
}

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

  // If subcategory selected - show its tools
  if (sub && bySub && bySub[sub]) {
    const tools = [...bySub[sub].filter(Boolean)].sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    const subTitle = sub.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href={"/category/" + category} className="hover:text-foreground">{displayTitle}</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{subTitle}</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{subTitle}</h1>
          <p className="text-muted-foreground mb-8">Explore {tools.length} AI tools in {displayTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link key={tool.id} href={"/" + tool.id}>
                <div className="premium-card p-5 h-full flex flex-col gap-3 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <h3 className="font-bold group-hover:text-primary transition-colors">{tool.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{tool.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ArrowUp className="h-3 w-3" />{tool.upvotes}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {tool.rating?.toFixed(1) ?? "4.5"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // No subcategory - show subcategory cards
  const subcategories = bySub ? Object.entries(bySub) : [];
  const totalTools = subcategories.reduce((acc, [, tools]) => acc + (Array.isArray(tools) ? tools.length : 0), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{displayTitle}</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{displayTitle}</h1>
        <p className="text-muted-foreground mb-8">{totalTools} AI tools across {subcategories.length} subcategories</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subcategories.map(([subKey, tools]) => {
            const subTitle = subKey.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
            const toolCount = Array.isArray(tools) ? tools.length : 0;
            const firstTool = Array.isArray(tools) && tools[0];
            return (
              <Link key={subKey} href={"/category/" + category + "?sub=" + subKey}>
                <div className="premium-card p-5 h-full flex flex-col gap-2 cursor-pointer group hover:border-primary transition-colors">
                  <span className="text-2xl">{firstTool ? firstTool.icon : "🤖"}</span>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{subTitle}</h3>
                  <p className="text-xs text-muted-foreground">{toolCount} tools</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
