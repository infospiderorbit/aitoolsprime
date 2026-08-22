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
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <a href="https://theresanaiforthat.com/ai/ai-tools-prime/?ref=featured&v=12430352" target="_blank" rel="nofollow">
          <img width="300" src="https://media.theresanaiforthat.com/featured-on-taaft.png?width=600" alt="Featured on There's An AI For That" />
        </a>
      </div>
      <Footer />
    </div>
  );
}