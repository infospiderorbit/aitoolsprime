"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedTools from "@/components/FeaturedTools";
import TrendingTools from "@/components/TrendingTools";
import NewsletterCTA from "@/components/NewsletterCTA";
import Stats from "@/components/Stats";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <Categories />
      <FeaturedTools searchQuery={searchQuery} />
      <TrendingTools />
      <NewsletterCTA />
      <Stats />
      <Footer />
    </div>
  );
}