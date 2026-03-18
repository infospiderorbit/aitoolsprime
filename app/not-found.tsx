import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">The tool or page you are looking for does not exist.</p>
        <Link href="/">
          <Button className="gradient-primary text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}