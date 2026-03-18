import PricingFilter from "@/components/PricingFilter";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toolsData, Tool } from "@/data/toolsData";

export const metadata = {
  title: "Full List of AI Tools | AI Tools Prime",
  description: "Browse the complete list of 80,000+ AI tools.",
};

const PAGE_SIZE = 48;
const PRICING_FILTERS = ["All", "Free", "Freemium", "Paid", "Free Trial"];

export default async function FullListPage({ searchParams }: { searchParams: Promise<{ page?: string; pricing?: string; search?: string }> }) {
  const params = await searchParams;
  const selectedPricing = params.pricing || "All";
  const currentPage = Math.max(1, parseInt(params.page || "1"));

  const allTools: Tool[] = [];
  Object.values(toolsData).forEach((cat) => {
    Object.values(cat).forEach((sub) => {
      if (Array.isArray(sub)) allTools.push(...sub.filter(Boolean));
    });
  });
  allTools.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));

 const searchQuery = params.search || "";
  const filtered = allTools
    .filter((t) => selectedPricing === "All" || (t.pricing || "Free") === selectedPricing)
    .filter((t) => !searchQuery || t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.description.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageTools = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Full AI Tools List</h1>
          <p className="text-muted-foreground mb-8">
            Browse our complete collection of {allTools.length.toLocaleString()}+ AI tools across all categories
          </p>
         <PricingFilter selected={selectedPricing} />
          <p className="text-sm text-muted-foreground">
            Showing {start + 1} - {Math.min(start + PAGE_SIZE, filtered.length)} of {filtered.length.toLocaleString()} tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {pageTools.map((tool) => (
            <Link key={tool.id} href={"/" + tool.id}>
              <div className="group premium-card p-5 h-full flex flex-col gap-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <h3 className="font-bold group-hover:text-primary transition-colors">{tool.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{tool.description}</p>
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {tool.pricing || "Free"}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {tool.rating?.toFixed(1)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {currentPage > 1 && (
            <Link href={"/full-list?pricing=" + selectedPricing + "&page=" + (currentPage - 1)}>
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>
            </Link>
          )}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let p = i + 1;
            if (totalPages > 5) {
              if (currentPage <= 3) p = i + 1;
              else if (currentPage >= totalPages - 2) p = totalPages - 4 + i;
              else p = currentPage - 2 + i;
            }
            return (
              <Link key={p} href={"/full-list?pricing=" + selectedPricing + "&page=" + p}>
                <Button
                  variant={p === currentPage ? "default" : "outline"}
                  size="sm"
                  className={p === currentPage ? "gradient-primary text-white" : ""}>
                  {p}
                </Button>
              </Link>
            );
          })}
          {currentPage < totalPages && (
            <Link href={"/full-list?pricing=" + selectedPricing + "&page=" + (currentPage + 1)}>
              <Button variant="outline" size="sm">
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          )}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Page {currentPage} of {totalPages}
        </p>
      </div>
      <Footer />
    </div>
  );
}