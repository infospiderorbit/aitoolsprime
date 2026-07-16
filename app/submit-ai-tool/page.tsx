import Link from "next/link";
import { Star, CheckCircle, Zap, RefreshCw, Crown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Submit Your AI Tool - AI TOOLS PRIME | Get Listed",
  description: "Submit your AI tool to AI Tools Prime. Reach 100,000+ AI professionals monthly.",
};

const faqs = [
  { q: "Q1. How long does it take for my tool to be published?", a: "Express Listing: within 3 days. Verified Listing: within 2 business days. Featured Ads: within 24 hours." },
  { q: "Q2. Why do you charge a fee for listing?", a: "We review every submission to ensure quality, prevent spam, and give genuine exposure to your AI tool. The small one-time fee helps us maintain and promote the platform." },
  { q: "Q3. Can I edit or update my tool information after publishing?", a: "Yes ✅ You can request updates anytime. The Update AI option makes it easy to modify descriptions, links, or media." },
  { q: "Q4. What is the Verified Badge?", a: "A blue check mark on your tool page that shows users your AI tool is genuine and trusted. Verified tools also get more visibility and higher clicks." },
  { q: "Q5. What is the difference between Verified Listing and Featured Ads?", a: "Verified Listing provides long-term trust, more links, media, and extended homepage visibility. Featured Ads give premium short-term exposure where your tool is highlighted almost everywhere on the site." },
  { q: "Q6. Do you guarantee traffic or signups?", a: "We guarantee visibility (homepage, categories, featured spots), but actual traffic depends on audience interest and your tool's value." },
  { q: "Q7. Is the payment one-time or recurring?", a: "All current plans are one-time fees, no recurring charges." },
];

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium">✨ AItoolsprime</span>
          </div>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Reach a Premium Audience of AI Professionals</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Connect with over 100,000+ AI professionals and users who trust our platform for discovering top-quality AI tools.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { val: "100,000+", label: "visitors per month" },
              { val: "4x", label: "AItoolsprime traffic growth in 6 months" },
              { val: "54%", label: "of visitors use desktop" },
              { val: "200+", label: "countries reached by our visitors" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{s.val}</div>
                <div className="text-gray-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">By joining AItoolsprime, you can present your tool to a global audience of AI professionals and real users.</p>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-16">
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Option</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Submit AI ⭐", desc: "List your AI tools and get direct traffic" },
              { icon: Star, title: "Advertise AI", desc: "Featured and highlighted across the site" },
              { icon: RefreshCw, title: "Update AI", desc: "Quickly update your tool information" },
            ].map((opt, i) => {
              const Icon = opt.icon;
              return (
                <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center shadow-card hover:-translate-y-1 transition-all duration-300">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{opt.title}</h3>
                  <p className="text-muted-foreground">{opt.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-16 text-center">💰 Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <div className="gradient-primary rounded-xl px-6 py-3 text-center text-white font-bold mb-4">
                <p>🟦 Express Listing</p>
                <p className="text-sm font-normal opacity-90">(fast approval & go live quickly)</p>
              </div>
              <div className="text-5xl font-bold mb-1">$49</div>
              <p className="text-muted-foreground text-sm mb-6">(one-time fee)</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {["Listed in 'Latest AI' on homepage + Full AI List", "30 days in 'Aitoolsprime Selection' on Homepage", "Description of up to 165 characters", "An extra link to your product page", "Indexed on Google"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <a href="mailto:submit@aitoolsprime.com" className="block w-full gradient-primary text-white text-center py-3 rounded-xl font-semibold">Submit your website</a>
            </div>

            <div className="bg-card rounded-2xl border-2 border-primary p-8 shadow-card relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="gradient-primary text-white px-6 py-1.5 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="gradient-primary rounded-xl px-6 py-3 text-center text-white font-bold mb-4 mt-2">
                <p>🟦 Verified Listing</p>
                <p className="text-sm font-normal opacity-90">(trust badge + higher credibility)</p>
              </div>
              <div className="text-5xl font-bold mb-1">$149</div>
              <p className="text-muted-foreground text-sm mb-6">(one-time fee)</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {["All Express Listing features", "Verified blue check mark for trust", "3 extra links to your product page", "Write up to 1000 words", "Add media: videos, audio, images", "60 days in 'Aitoolsprime Selection' on Homepage"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <a href="mailto:submit@aitoolsprime.com" className="block w-full gradient-primary text-white text-center py-3 rounded-xl font-semibold">Submit your website</a>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <div className="gradient-primary rounded-xl px-6 py-3 text-center text-white font-bold mb-4">
                <div className="flex items-center justify-center gap-2">🟦 Premium Featured <Crown className="h-5 w-5 text-yellow-300" /></div>
                <p className="text-sm font-normal opacity-90">(maximum visibility + top placement)</p>
              </div>
              <div className="text-5xl font-bold mb-1">$249</div>
              <p className="text-muted-foreground text-sm mb-6">Featured duration: 3 days</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {["Gold checkmark for maximum trust", "3 days featured on the website", "Featured on all category pages & homepage", "Featured on Full AI List and all product pages", "+7 days on homepage among the 8 featured tools"].map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><Crown className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <a href="mailto:submit@aitoolsprime.com" className="block w-full gradient-primary text-white text-center py-3 rounded-xl font-semibold">Book a place</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-16 text-center">❓ Frequently Asked Questions</h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h3 className="text-lg font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}