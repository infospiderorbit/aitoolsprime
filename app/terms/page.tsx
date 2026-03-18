import { FileText, Scale, Users, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - AI TOOLS PRIME | User Agreement",
  description: "Read AI Tools Prime terms of service. Learn about our user agreement, guidelines for using our AI tools directory, and tool submission policies.",
};

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing and using AI Tools Prime, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service." },
  { title: "2. Description of Service", content: "AI Tools Prime is a directory and discovery platform for artificial intelligence tools and services. We provide a comprehensive directory of AI tools, reviews, ratings, categorization, search functionality, and educational content about AI technologies." },
  { title: "3. User Accounts and Registration", content: "To access certain features, you may need to register. You agree to provide accurate information, maintain your account, keep your password secure, notify us of unauthorized access, and accept responsibility for all activities under your account." },
  { title: "4. Tool Submissions and Content", content: "Tools must be functional AI-powered applications. Provide accurate descriptions and pricing. Ensure you have the right to submit the tool. All submitted content must be appropriate, lawful, and not infringe on third-party rights. We reserve the right to review, modify, or remove any submissions." },
  { title: "5. Prohibited Uses", content: "You may not use our Service for unlawful purposes, to violate regulations, to infringe intellectual property rights, to harass or discriminate, to submit false information, to upload malicious code, or to spam, phish, or scrape our platform." },
  { title: "6. Intellectual Property Rights", content: "The Service and its original content are the exclusive property of AI Tools Prime. You retain ownership of content you submit, but grant us a license to use, display, and distribute such content on our platform." },
  { title: "7. Third-Party Tools and Services", content: "Our platform lists third-party AI tools. We do not endorse or assume responsibility for any third-party tools. Users engage with third-party tools at their own risk." },
  { title: "8. Disclaimer of Warranties", content: "The information on this platform is provided on an 'as is' basis. AI Tools Prime makes no representations or warranties of any kind regarding the operation of the platform or the information included herein." },
  { title: "9. Limitation of Liability", content: "AI Tools Prime shall not be liable for any damages of any kind arising from the use of this platform, including direct, indirect, incidental, punitive, and consequential damages." },
  { title: "10. Termination", content: "We may terminate or suspend your account immediately, without prior notice, for any reason including breach of these Terms." },
  { title: "11. Changes to Terms", content: "We reserve the right to modify these terms at any time. By continuing to use the platform after changes become effective, you agree to be bound by the revised terms." },
  { title: "12. Contact Information", content: "If you have questions about these Terms, contact us at legal@aitoolsprime.com or support@aitoolsprime.com" },
];

const keyPoints = [
  { icon: Scale, title: "Fair Usage", desc: "Use our platform responsibly and in accordance with applicable laws" },
  { icon: Users, title: "Community", desc: "Maintain respectful interactions within our community" },
  { icon: AlertTriangle, title: "Compliance", desc: "Follow our guidelines for content and tool submissions" },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">Please read these terms carefully before using AI Tools Prime</p>
          <p className="text-sm text-white/70">Last updated: December 2024</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {keyPoints.map((k, i) => {
            const Icon = k.icon;
            return (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center shadow-card">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{k.title}</h3>
                <p className="text-muted-foreground text-sm">{k.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="space-y-4">
          {sections.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h2 className="text-xl font-bold mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}