"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const PRICING_FILTERS = ["All", "Free", "Freemium", "Paid", "Free Trial"];

export default function PricingFilter({ selected }: { selected: string }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleFilter(p: string) {
    router.push("/full-list?pricing=" + p + "&page=1");
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      router.push("/full-list?search=" + encodeURIComponent(search.trim()) + "&page=1");
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-md mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search AI tools..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <Button type="submit" size="sm" className="gradient-primary text-white">Search</Button>
      </form>

      <div className="flex items-center justify-center gap-2 flex-wrap">
        {PRICING_FILTERS.map((p) => (
          <Button
            key={p}
            onClick={() => handleFilter(p)}
            variant={selected === p ? "default" : "outline"}
            size="sm"
            className={selected === p ? "gradient-primary text-white" : ""}>
            {p}
          </Button>
        ))}
      </div>
    </div>
  );
}