"use client";
import { useState } from "react";
import { ArrowRight, Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) { toast.error("Please enter a valid email address."); return; }
    toast.success("You're subscribed! 🎉", { description: "Thanks for joining our newsletter." });
    setEmail("");
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto rounded-3xl gradient-primary p-10 md:p-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-300/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 mb-6">
              <Bell className="h-3.5 w-3.5 text-yellow-300" />
              <span className="text-xs font-medium text-white/90">Never miss a new tool</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Stay Ahead with AI</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">Get weekly curated picks of the best new AI tools delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                <input type="email" placeholder="Enter your email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-white/40 outline-none focus:border-white/40 transition-colors text-sm" />
              </div>
              <Button onClick={handleSubscribe} className="bg-white text-primary hover:bg-white/90 rounded-xl px-6 h-auto font-semibold shadow-lg shrink-0">
                Subscribe <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <p className="text-white/40 text-xs mt-4">No spam. Unsubscribe anytime. Join 10,000+ subscribers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}