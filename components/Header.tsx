"use client";
import { useState, useEffect } from "react";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { to: "/full-list", label: "Full List" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md border-b border-border/40"
          : isHome
            ? "bg-transparent border-b border-transparent"
            : "bg-card/80 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src="/Ai-tools-logo.png" alt="AI Tools Prime" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.to
                    ? "text-primary bg-primary/5"
                    : scrolled || !isHome
                      ? "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-border/50 mx-2" />
            <Button
              asChild
              className="bg-primary text-primary-foreground font-semibold px-6 rounded-xl hover:scale-[1.03] transition-all shadow-lg"
            >
              <Link href="/submit">
                Submit Tool
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Open menu"
                  className={`${!scrolled && isHome ? "text-white hover:bg-white/10" : ""}`}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background">
                <SheetHeader>
                  <SheetTitle className="text-left font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      href={link.to}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-foreground font-medium hover:bg-muted transition-colors"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground font-semibold rounded-xl"
                    >
                      <Link href="/submit">Submit Tool</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;