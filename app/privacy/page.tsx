import { Shield, Eye, Lock, UserCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - AI TOOLS PRIME | Data Protection & Privacy",
  description: "Learn how AI Tools Prime collects, uses, and protects your personal information.",
};

const principles = [
  { icon: Eye, title: "Transparency", desc: "We're clear about what data we collect and how we use it" },
  { icon: Lock, title: "Security", desc: "Your data is protected with industry-standard security measures" },
  { icon: UserCheck, title: "Control", desc: "You have control over your personal information at all times" },
];

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly such as contact info when submitting tools, account details, feedback and reviews, and communication preferences. We also automatically collect website usage data, device information, browser type, IP address, and cookies." },
  { title: "How We Use Your Information", content: "We use your information to provide and improve our AI tools directory, process submitted tools, communicate about our services, analyze website usage, prevent fraud, ensure platform security, and comply with legal obligations." },
  { title: "Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist in operating our website, when required by law, in connection with a business transfer, or with your explicit consent." },
  { title: "Cookies and Tracking", content: "We use essential cookies for basic website functionality, analytics cookies to understand visitor behavior, and preference cookies to remember your settings. You can control cookie settings through your browser." },
  { title: "Your Rights", content: "You have the right to access, correct, delete, and port your personal information. You may also object to certain processing. To exercise these rights, contact us at privacy@aitoolsprime.com." },
  { title: "Data Security", content: "We implement appropriate technical and organizational security measures including encryption, secure servers, and regular security assessments to protect your personal information." },
  { title: "Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the 'Last updated' date." },
  { title: "Contact Us", content: "If you have questions about this Privacy Policy, contact us at privacy@aitoolsprime.com or support@aitoolsprime.com" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
          <p className="text-sm text-white/70">Last updated: December 2024</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center shadow-card">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
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