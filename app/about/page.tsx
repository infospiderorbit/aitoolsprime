import Link from "next/link";
import { Sparkles, Target, Users, Zap, Globe, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - AI TOOLS PRIME | Our Mission & Team",
  description: "Learn about AI Tools Prime mission to democratize AI access. Meet our team building the world's most comprehensive AI tools directory with 2,500+ tools.",
};

const teamMembers = [
  { name: "Alex Chen", role: "Founder & CEO", description: "AI researcher with 10+ years in machine learning and product development." },
  { name: "Sarah Johnson", role: "Head of Product", description: "Former tech lead at major AI companies, passionate about user experience." },
  { name: "David Rodriguez", role: "Technical Director", description: "Full-stack developer specializing in AI integration and scalable platforms." },
];

const stats = [
  { label: "AI Tools Listed", value: "2,500+", icon: Zap },
  { label: "Monthly Users", value: "100K+", icon: Users },
  { label: "Countries Served", value: "150+", icon: Globe },
  { label: "Tools Added Monthly", value: "200+", icon: TrendingUp },
];

const values = [
  { icon: Users, title: "Accessibility", desc: "We believe AI should be accessible to everyone, regardless of technical background or company size." },
  { icon: Sparkles, title: "Innovation", desc: "We're committed to showcasing cutting-edge AI technologies and supporting innovative creators." },
  { icon: Target, title: "Quality", desc: "Every tool in our directory is carefully reviewed to ensure it meets our standards for functionality and value." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">About AI Tools Prime</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're democratizing access to artificial intelligence by building the world's most comprehensive directory of AI tools and services.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="bg-card rounded-2xl border border-border p-10 shadow-card">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To bridge the gap between AI innovation and practical application by providing a centralized platform where individuals and businesses can discover, evaluate, and implement the right AI solutions for their needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center shadow-card">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Problem We Saw</h3>
              <p className="text-muted-foreground mb-4">As artificial intelligence rapidly advanced, we noticed a growing disconnect between groundbreaking AI innovations and their practical adoption. Businesses and individuals struggled to navigate the overwhelming landscape of AI tools, often missing opportunities to leverage solutions that could transform their workflows.</p>
              <p className="text-muted-foreground">The AI ecosystem was fragmented, with valuable tools scattered across the internet without a centralized discovery platform.</p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-card">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Founded in 2024</h3>
              <p className="text-muted-foreground">Born from a passion to make AI accessible to everyone</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-card md:order-2">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Solution</h3>
              <p className="text-muted-foreground">A comprehensive, user-friendly AI tools directory</p>
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-semibold mb-6">How We're Solving It</h3>
              <p className="text-muted-foreground mb-4">AI Tools Prime serves as the bridge between AI innovation and practical implementation. We carefully curate and categorize AI tools, providing detailed information, user reviews, and expert insights to help users make informed decisions.</p>
              <p className="text-muted-foreground">Our platform empowers developers, entrepreneurs, marketers, and professionals from all industries to discover and implement AI solutions that can enhance their productivity and drive innovation.</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center shadow-card">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center shadow-card">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{member.name.split(" ").map((n) => n[0]).join("")}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-card rounded-2xl border border-border p-10 max-w-2xl mx-auto shadow-card">
            <h2 className="text-2xl font-bold mb-2">Join Our Mission</h2>
            <p className="text-muted-foreground mb-6">Help us build the most comprehensive AI tools directory in the world.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link href="/submit">
                <button className="gradient-primary text-white px-6 py-2 rounded-xl font-semibold">Submit Your Tool</button>
              </Link>
              <Link href="/contact">
                <button className="border border-border px-6 py-2 rounded-xl font-semibold hover:bg-muted transition-colors">Contact Us</button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">Questions? Reach us at: hello@aitoolsprime.com</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}