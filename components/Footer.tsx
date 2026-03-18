import { Facebook, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/full-list" className="hover:text-primary transition-all">Browse Tools</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-all">Categories</Link></li>
              <li><Link href="/submit" className="hover:text-primary transition-all">Submit</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-all">About</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/help" className="hover:text-primary transition-all">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-all">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-all">Terms of Service</Link></li>
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