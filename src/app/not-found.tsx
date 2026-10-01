import Link from "next/link";
import { Compass, Home, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="py-20 md:py-32 my-auto">
      <Container size="narrow">
        <div className="clay-card p-10 sm:p-16 rounded-3xl bg-card border border-border/80 text-center flex flex-col items-center gap-6 shadow-xl">
          <div className="size-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center clay-pill border border-primary/20">
            <Compass className="size-8" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Page not found
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto leading-relaxed mt-1">
              The page you are looking for has been moved or doesn&apos;t exist. Let&apos;s get you back on track.
            </p>
          </div>

          {/* Quick Search Shortcut Box */}
          <div className="w-full max-w-md">
            <Link
              href="/search"
              className="flex items-center justify-between px-4 py-3 rounded-2xl bg-card border border-border/80 text-sm text-muted-foreground hover:text-foreground transition-all group clay-pill"
            >
              <div className="flex items-center gap-2.5">
                <Search className="size-4 text-primary" />
                <span>Search plans, credentials, or stories...</span>
              </div>
              <kbd className="px-2 py-0.5 text-xs font-mono bg-muted/60 rounded-lg border border-border/60">
                ⌘K
              </kbd>
            </Link>
          </div>

          {/* Recovery Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="rounded-2xl gap-2">
              <Link href="/">
                <Home className="size-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl gap-2">
              <Link href="/plans">
                <Compass className="size-4" />
                <span>View Coaching Plans</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-2xl gap-2">
              <Link href="/contact">
                <Mail className="size-4" />
                <span>Contact Siddharth</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
