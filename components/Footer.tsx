import { Facebook, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const categories = [
    { slug: "writing-editing", title: "Writing & Editing" },
    { slug: "image-generation-editing", title: "Image Generation" },
    { slug: "voice-generation-conversion", title: "Voice & Speech" },
    { slug: "video-animation", title: "Video & Animation" },
    { slug: "chatbots-virtual-companions", title: "Chatbots & AI" },
    { slug: "coding-development", title: "Coding & Dev" },
    { slug: "music-audio", title: "Music & Audio" },
    { slug: "art-creative-design", title: "Art & Design" },
    { slug: "social-media", title: "Social Media" },
    { slug: "marketing-advertising", title: "Marketing" },
    { slug: "education-translation", title: "Education" },
    { slug: "business-research", title: "Business Research" },
    { slug: "health-wellness", title: "Health & Wellness" },
    { slug: "daily-life", title: "Daily Life" },
    { slug: "office-productivity", title: "Productivity" },
    { slug: "legal-finance", title: "Legal & Finance" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-primary">AI Tools Prime</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Discover, compare, and choose from the world's largest collection of AI tools.
              Your gateway to the future of artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/aitoolsprime/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/aitoolsprime" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@aitoolsprime.com" className="text-muted-foreground hover:text-primary transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories Column 1 */}
          <div>
            <h3 className="font-semibold mb-4">AI Categories</h3>
            <ul className="space-y-2 text-muted-foreground">
              {categories.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link href={"/category/" + cat.slug} className="hover:text-primary transition-all text-sm">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">More Categories</h3>
            <ul className="space-y-2 text-muted-foreground">
              {categories.slice(8).map((cat) => (
                <li key={cat.slug}>
                  <Link href={"/category/" + cat.slug} className="hover:text-primary transition-all text-sm">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Support */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li><Link href="/full-list" className="hover:text-primary transition-all text-sm">Browse All Tools</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-all text-sm">All Categories</Link></li>
              <li><Link href="/submit" className="hover:text-primary transition-all text-sm">Submit a Tool</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-all text-sm">About Us</Link></li>
            </ul>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/help" className="hover:text-primary transition-all text-sm">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-all text-sm">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-all text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-all text-sm">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 AI TOOLS PRIME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
