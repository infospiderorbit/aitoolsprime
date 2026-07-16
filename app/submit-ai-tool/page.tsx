import Link from "next/link";
import { CheckCircle, Crown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BadgeForm from "./BadgeForm";

export const metadata = {
  title: "Submit AI Tool - List Your AI Tool on AI Tools Prime",
  description: "Submit your AI tool to AI Tools Prime. Get listed and reach 100,000+ AI professionals monthly.",
};

const faqs = [
  { q: "Q1. How long does it take for my tool to be published?", a: "Free Badge Listing: within 24 hours after badge verification. Express Listing: within 3 days. Verified Listing: within 2 business days." },
  { q: "Q2. Why do you charge a fee for listing?", a: "We review every submission to ensure quality, prevent spam, and give genuine exposure to your AI tool. The small one-time fee helps us maintain and promote the platform." },
  { q: "Q3. Can I edit or update my tool information after publishing?", a: "Yes. You can request updates anytime by emailing hello@aitoolsprime.com." },
  { q: "Q4. What is the Verified Badge?", a: "A blue check mark on your tool page that shows users your AI tool is genuine and trusted. Verified tools also get more visibility and higher clicks." },
  { q: "Q5. Is the payment one-time or recurring?", a: "All current plans are one-time fees, no recurring charges." },
  { q: "Q6. Do you guarantee traffic or signups?", a: "We guarantee visibility (homepage, categories, featured spots), but actual traffic depends on audience interest and your tool value." },
  { q: "Q7. What is the Free Badge Listing?", a: "Embed our badge on your website and get listed on AI Tools Prime for free. It is our way of building a community of trusted AI tools together." },
];

export default function SubmitAIToolPage() {
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
        </div>
      </section>

      <main className="container mx-auto px-4 pb-16">

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Option</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏅", title: "Free Badge Listing", desc: "Embed our badge on your site and get listed for free" },
              { icon: "⚡", title: "Express Listing", desc: "List your AI tool and get direct traffic quickly" },
              { icon: "⭐", title: "Verified Listing", desc: "Trust badge and higher credibility and visibility" },
            ].map((opt, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{opt.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{opt.title}</h3>
                <p className="text-muted-foreground">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-16 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <div className="bg-green-500 rounded-xl px-6 py-3 text-center text-white font-bold mb-4">
                <p>Free Badge Listing</p>
                <p className="text-sm font-normal opacity-90">Add our badge to your website and get a free listing in the directory.</p>
              </div>
              <div className="text-5xl font-bold mb-1 text-green-500">FREE</div>
              <p className="text-muted-foreground text-sm mb-6">No credit card required</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {[
                  "Listed in AI Tools Prime directory",
                  "Embed our badge on your website",
                  "NoFollow backlink from our platform",
                  "Basic tool listing with description",
                  "Indexed on Google",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <BadgeForm />
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <div className="gradient-primary rounded-xl px-6 py-3 text-center text-white font-bold mb-4">
                <p>Express Listing</p>
                <p className="text-sm font-normal opacity-90">Fast approval and go live quickly</p>
              </div>
              <div className="text-5xl font-bold mb-1">$49</div>
              <p className="text-muted-foreground text-sm mb-6">One-time fee</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {[
                  "Listed in Latest AI on homepage and Full AI List",
                  "30 days in Aitoolsprime Selection on Homepage",
                  "Description of up to 165 characters",
                  "1 Dofollow link to your product page",
                  "Indexed on Google",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <a href="mailto:hello@aitoolsprime.com?subject=Express Listing - $49&body=I would like to submit my AI tool for Express Listing.%0A%0ATool Name: %0ATool URL: %0ADescription: %0ACategory: " className="block w-full gradient-primary text-white text-center py-3 rounded-xl font-semibold">Submit Your Tool - $49</a>
            </div>

            <div className="bg-card rounded-2xl border-2 border-primary p-8 shadow-card relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="gradient-primary text-white px-6 py-1.5 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="gradient-primary rounded-xl px-6 py-3 text-center text-white font-bold mb-4 mt-2">
                <p>Verified Listing</p>
                <p className="text-sm font-normal opacity-90">Trust badge and higher credibility</p>
              </div>
              <div className="text-5xl font-bold mb-1">$149</div>
              <p className="text-muted-foreground text-sm mb-6">One-time fee</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {[
                  "All Express Listing features",
                  "Verified blue check mark for trust",
                  "1 Dofollow link to your product page",
                  "Write up to 1000 words",
                  "Add media: videos, audio, images",
                  "60 days in Aitoolsprime Selection on Homepage",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <a href="mailto:hello@aitoolsprime.com?subject=Verified Listing - $149&body=I would like to submit my AI tool for Verified Listing.%0A%0ATool Name: %0ATool URL: %0ADescription: %0ACategory: %0AExtra Links: " className="block w-full gradient-primary text-white text-center py-3 rounded-xl font-semibold">Submit Your Tool - $149</a>
            </div>

          </div>
        </section>

        <section className="mb-20">
          <div className="bg-card rounded-2xl border border-border p-10 shadow-card text-center">
            <div className="text-4xl mb-4">&#9997;&#65039;</div>
            <h2 className="text-3xl font-bold mb-4">Guest Post on AI Tools Prime</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Write for our audience of 100,000+ AI enthusiasts. Share your expertise, get a dofollow backlink, and build your authority in the AI space. We accept high-quality articles about AI tools, trends, and tutorials.
            </p>
            <ul className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              {["Dofollow backlink included", "Reach 100K+ monthly readers", "AI niche audience", "Author bio with photo", "Promoted on social media"].map((f, i) => (
                <li key={i} className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full"><CheckCircle className="h-4 w-4 text-green-500" />{f}</li>
              ))}
            </ul>
            <a href="mailto:hello@aitoolsprime.com?subject=Guest Post Request&body=I would like to write a guest post for AI Tools Prime.%0A%0AMy Name: %0AMy Website: %0AProposed Topic: %0AAbout Me: " className="inline-block gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">Submit Guest Post Idea</a>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 p-10 shadow-card text-center">
            <div className="text-4xl mb-4">&#128226;</div>
            <h2 className="text-3xl font-bold mb-4">Advertise on AI Tools Prime</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Put your AI tool or brand in front of a highly targeted audience of AI professionals, developers, and enthusiasts. Banner ads, sponsored content, and newsletter sponsorships available.
            </p>
            <ul className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              {["Homepage banner ads", "Category page sponsorship", "Newsletter sponsorship", "Sponsored tool highlight", "Custom partnership deals"].map((f, i) => (
                <li key={i} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border"><CheckCircle className="h-4 w-4 text-primary" />{f}</li>
              ))}
            </ul>
            <a href="mailto:hello@aitoolsprime.com?subject=Advertising Inquiry&body=I am interested in advertising on AI Tools Prime.%0A%0ACompany Name: %0AWebsite: %0ABudget Range: %0AAdvertising Goal: " className="inline-block gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">Get Advertising Details</a>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
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
