import Link from "next/link";
import { Sparkles, Search, MessageCircle, Book, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Help Center - AI TOOLS PRIME | Find Support & Resources",
  description: "Get help with AI Tools Prime. Find answers to common questions, browse our guides, and learn how to discover and submit AI tools.",
};

const faqData = [
  {
    category: "Getting Started",
    questions: [
      { q: "How do I find AI tools on AI Tools Prime?", a: "You can browse our extensive catalog by category, use the search function, or explore our featured tools section. Each tool includes detailed information, pricing, and user reviews." },
      { q: "Is AI Tools Prime free to use?", a: "Yes! Browsing and discovering AI tools on our platform is completely free. Some listed tools may have their own pricing models." },
      { q: "How do I submit my AI tool?", a: "Click the 'Submit' button in the navigation bar and fill out our submission form with your tool's details, features, and relevant information." },
    ],
  },
  {
    category: "Tool Listings",
    questions: [
      { q: "How are tools reviewed before listing?", a: "Our team reviews each submission for quality, functionality, and relevance. We ensure all listed tools meet our community standards." },
      { q: "Can I update my tool's information?", a: "Yes, you can contact us at support@aitoolsprime.com with updates to your tool's listing." },
      { q: "What makes a tool featured?", a: "Featured tools are selected based on innovation, user engagement, and overall quality. We also offer promotional opportunities." },
    ],
  },
];

const quickLinks = [
  { icon: Sparkles, title: "Getting Started Guide", desc: "Learn how to navigate and discover the best AI tools for your needs", label: "View Guide" },
  { icon: MessageCircle, title: "Submit Your Tool", desc: "Step-by-step instructions for listing your AI tool on our platform", label: "Learn More", href: "/submit" },
  { icon: Search, title: "Search & Filter", desc: "Master our advanced search and filtering options to find exactly what you need", label: "View Tutorial" },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Book className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to your questions and get the most out of AI Tools Prime
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {quickLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center shadow-card">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <Link href={item.href || "#"}>
                  <button className="w-full border border-border rounded-xl py-2 text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                    {item.label} <ExternalLink className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          {faqData.map((cat, ci) => (
            <div key={ci} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-primary">{cat.category}</h3>
              <div className="space-y-4">
                {cat.questions.map((faq, i) => (
                  <div key={i} className="bg-card rounded-2xl border-l-4 border-l-primary border border-border p-6 shadow-card">
                    <h4 className="font-bold mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl border border-border p-10 max-w-2xl mx-auto shadow-card">
            <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6">Can't find the answer you're looking for? Our support team is here to help.</p>
            <Link href="/contact">
              <button className="gradient-primary text-white px-8 py-2.5 rounded-xl font-semibold">Contact Support</button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">Email us at: support@aitoolsprime.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}