new_content = '''import Link from "next/link";
import { ArrowLeft, Star, ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData, Tool } from "@/data/toolsData";
import { categoriesData } from "@/data/categoriesData";

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
  
  const tools: Tool[] = [];
  if (bySub) {
    if (sub && bySub[sub]) {
      tools.push(...bySub[sub].filter(Boolean));
    } else {
      Object.values(bySub).forEach((arr) => {
        if (Array.isArray(arr)) tools.push(...arr.filter(Boolean));
      });
    }
    tools.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
  }

  const subcategories = bySub ? Object.keys(bySub) : [];
  const displayTitle = categoryInfo?.title || category.replace(/-/g, " ");
  const activeSubcat = sub || "";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-2">{displayTitle}</h1>
        <p className="text-muted-foreground mb-6">Explore {tools.length} AI tools</p>
        
        {subcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <Link href={"/category/" + category}>
              <span className={"px-3 py-1 rounded-full text-sm border cursor-pointer " + (!activeSubcat ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted")}>
                All
              </span>
            </Link>
            {subcategories.map((sc) => (
              <Link key={sc} href={"/category/" + category + "?sub=" + sc}>
                <span className={"px-3 py-1 rounded-full text-sm border cursor-pointer " + (activeSubcat === sc ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted")}>
                  {sc.replace(/-/g, " ")}
                </span>
              </Link>
            ))}
          </div>
        )}

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
'''
open("/Users/ankitraghav/aitoolsprime/app/category/[category]/page.tsx", "w").write(new_content)
print("Done!")
