import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, Bookmark, Camera, Facebook, Twitter, Linkedin, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData, Tool } from "@/data/toolsData";
import { toolsProductInfoData } from "@/data/toolsProductInfo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function findTool(toolId: string): Tool | null {
  for (const catData of Object.values(toolsData)) {
    for (const subTools of Object.values(catData)) {
      if (Array.isArray(subTools)) {
        const found = subTools.find((t) => t && t.id === toolId);
        if (found) return found;
      }
    }
  }
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const toolData = findTool(tool);
  if (!toolData) return { title: "Tool Not Found | AI Tools Prime" };
  const info = toolsProductInfoData[tool];
  const metaDesc = info?.whatIs ? info.whatIs.substring(0, 160) : toolData.description.substring(0, 160);
  return {
    title: toolData.name + ": " + toolData.description.substring(0, 60) + " | AI Tools Prime",
    description: metaDesc,
  };
}

function SimilarToolsList({ category, subcategory, currentId }: { category: string, subcategory: string, currentId: string }) {
  const bySub = (toolsData as any)[category] || {};
  const subTools: Tool[] = bySub[subcategory] || [];
  const similar = subTools.filter((t) => t && t.id !== currentId).slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {similar.map((t) => (
          <Link key={t.id} href={"/" + t.id}>
            <div className="group p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="font-bold text-sm group-hover:text-primary transition-colors mb-1">{t.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-xs text-muted-foreground">{t.rating?.toFixed(1)}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                  {t.subcategory?.replace(/-/g, " ")}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                  {t.pricing || "Free"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{t.description}</p>
              <span className="text-xs font-medium text-primary">Visit Tool →</span>
            </div>
          </Link>
        ))}
      </div>
      <Link href={"/category/" + category}>
        <Button variant="outline" size="sm">View all alternatives</Button>
      </Link>
    </div>
  );
}

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const toolData = findTool(tool);

if (!toolData) notFound();

  const shareUrl = "https://www.aitoolsprime.com/" + toolData.id;
  const shareText = encodeURIComponent("Check out " + toolData.name + " - " + toolData.description);
  const savedCount = toolData.savedCount || 69;
  const addedDate = toolData.addedDate
    ? new Date(toolData.addedDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })
    : (() => { const h = toolData.id.split("").reduce((a,c) => a + c.charCodeAt(0) * 31, 0); const start = new Date("2026-01-01").getTime(); const end = new Date("2026-03-19").getTime(); const range = end - start; const t = start + ((h * 1000003) % range); return new Date(t).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" }); })();
  const info = (toolsProductInfoData as any)[toolData.id] || (toolsProductInfoData as any).default;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="bg-card rounded-2xl border border-border p-8 mb-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-3xl border border-border">
                  {toolData.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{toolData.name}</h1>
                  {toolData.verified && <Badge variant="secondary" className="mt-1">Verified</Badge>}
                </div>
              </div>

              <Button asChild size="lg" className="gradient-primary text-white">
                <a href={toolData.url || "#"} target="_blank" rel="noopener noreferrer">
                  Open Site <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <div className="flex items-center gap-6 py-4 border-y border-border flex-wrap">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className={"h-5 w-5 " + (i <= Math.floor(toolData.rating || 4.5) ? "fill-primary text-primary" : "text-muted-foreground")} />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">{toolData.rating?.toFixed(1) ?? "4.5"}</span>
                </div>
                <span className="text-sm text-muted-foreground">{toolData.reviewsCount || 0} Reviews</span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Bookmark className="h-4 w-4" />
                  <span>{savedCount} Saved</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Introduction</h3>
                <p className="text-muted-foreground leading-relaxed">{toolData.description}</p>
              </div>

              <div>
                <span className="text-sm text-muted-foreground">Added on: </span>
                <span className="text-sm font-medium">{addedDate}</span>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">Share this tool</h4>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" asChild>
                    <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(shareUrl)} target="_blank" rel="noopener noreferrer"><Facebook className="h-4 w-4" /></a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={"https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(shareUrl)} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /></a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={"https://twitter.com/intent/tweet?text=" + shareText + "&url=" + encodeURIComponent(shareUrl)} target="_blank" rel="noopener noreferrer"><Twitter className="h-4 w-4" /></a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={"https://wa.me/?text=" + shareText + "%20" + encodeURIComponent(shareUrl)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /></a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={"mailto:?subject=" + encodeURIComponent(toolData.name) + "&body=" + shareText}><Mail className="h-4 w-4" /></a>
                  </Button>
                </div>
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

        <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">{toolData.name} Product Information</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">{toolData.name} Overview</h3>
              <p className="text-muted-foreground leading-relaxed">{info.whatIs}</p>
              {info.features && (
                <div className="mt-4">
                  <h4 className="font-medium mb-3">This product stands out with features such as:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {info.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-primary">•</span>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {info.howToUse && (
             <div>
                <hr className="border-border mb-6" />
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{info.howToUse.title}</h3>
                  <p className="text-muted-foreground">{info.howToUse.description}</p>
                </div>
                <div className="space-y-3">
                  {info.howToUse.steps.map((step: any, i: number) => (
                    <div key={i} className="flex gap-4 p-4 rounded-lg border border-border bg-muted/20">
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm font-medium shrink-0">{i + 1}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {info.coreFeatures && (
              <div>
                <hr className="border-border mb-6" />
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{toolData.name}'s Core Features in Detail</h3>
                  <p className="text-muted-foreground">Powerful features from {toolData.name}</p>
                </div>
                <div className="space-y-3">
                  {info.coreFeatures.map((f: any, i: number) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <h4 className="font-medium">{f.title}</h4>
                        <p className="text-sm text-muted-foreground">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {info.useCases && (
              <div>
                <hr className="border-border mb-6" />
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{toolData.name} Use Cases</h3>
                  <p className="text-muted-foreground">Discover how {toolData.name} can benefit different users</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {info.useCases.map((u: any, i: number) => (
                    <div key={i} className="p-4 rounded-lg border border-border">
                      <h4 className="font-semibold mb-2">{u.title}</h4>
                      <p className="text-sm text-muted-foreground">{u.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      <div className="bg-card rounded-2xl border border-border p-8 shadow-card mt-8">
<Link href={"/alternatives/" + toolData.id} className="inline-flex items-center gap-2 text-xl font-bold mb-6 hover:text-primary transition-colors">
            🔎 Similar to '{toolData.name}'
          </Link>          <SimilarToolsList category={toolData.category} subcategory={toolData.subcategory} currentId={toolData.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}