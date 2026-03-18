import Link from "next/link";
import { ArrowLeft, Star, Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData, Tool } from "@/data/toolsData";

function findTool(toolId: string): { tool: Tool; category: string; subcategory: string } | null {
  for (const [catKey, catData] of Object.entries(toolsData)) {
    for (const [subKey, subTools] of Object.entries(catData)) {
      if (Array.isArray(subTools)) {
        const found = subTools.find((t) => t && t.id === toolId);
        if (found) return { tool: found, category: catKey, subcategory: subKey };
      }
    }
  }
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const result = findTool(tool);
  if (!result) return { title: "Alternatives Not Found | AI Tools Prime" };
  return {
    title: "Top " + result.tool.name + " Alternatives | AI Tools Prime",
    description: "Best alternatives to " + result.tool.name + ". Compare similar AI tools.",
  };
}

export default async function AlternativesPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const result = findTool(tool);

  if (!result) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
          <Link href="/"><Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { tool: toolData, category, subcategory } = result;
  const bySub = (toolsData as any)[category] || {};
  const similar: Tool[] = (bySub[subcategory] || []).filter((t: Tool) => t && t.id !== tool);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href={"/" + tool} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to {toolData.name}
        </Link>

        <div className="bg-card rounded-2xl border border-border p-8 mb-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              <h1 className="text-3xl font-bold">Top {toolData.name} Alternatives</h1>
              <p className="text-muted-foreground">{toolData.description}</p>
              <p className="text-muted-foreground leading-relaxed">
                If you are exploring other options similar to {toolData.name}, here are some of the best {subcategory.replace(/-/g, " ")} tools. These alternatives offer different pricing, features, and levels of customization to help you find the perfect match for your needs.
              </p>
              <div className="flex gap-3 pt-2">
                <Button asChild className="gradient-primary text-white">
                  <a href={toolData.url || "#"} target="_blank" rel="noopener noreferrer">
                    Visit {toolData.name} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Link href={"/category/" + category}>
                  <Button variant="outline">Browse Category</Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Website Snapshot</h3>
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">Preview Not Available</p>
                  <p className="text-xs text-muted-foreground mb-4">Click below to visit the website</p>
                  <Button asChild variant="outline" size="sm">
                    <a href={toolData.url || "#"} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">{similar.length} Alternatives to {toolData.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {similar.map((t) => (
            <div key={t.id} className="group premium-card p-5 h-full flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{t.icon}</span>
                <div>
                  <h3 className="font-bold group-hover:text-primary transition-colors">{t.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs text-muted-foreground">{t.rating?.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{subcategory.replace(/-/g, " ")}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{t.pricing || "Free"}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{t.description}</p>
              <div className="flex items-center justify-between">
                <Link href={"/" + t.id} className="text-xs font-medium text-primary">Visit Tool →</Link>
                <Link href={"/alternatives/" + t.id} className="text-xs text-muted-foreground hover:text-primary transition-colors">{t.name} Alternatives</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}