import Link from "next/link";
import { Home, Search, Target, Mail } from "lucide-react";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassDumbbell } from "@/components/ui/glass/GlassDumbbell";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="py-16 md:py-28 my-auto">
      <Container size="narrow">
        <div className="liquid-glass-strong p-8 sm:p-14 rounded-3xl border border-white/60 dark:border-white/15 text-center flex flex-col items-center gap-6 shadow-2xl">
          {/* Section 47 Visual: subtle 3D glass dumbbell */}
          <div className="scale-90 sm:scale-100 my-2">
            <GlassDumbbell />
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary dark:text-sage">
              404 • Set Interrupted
            </span>
            {/* Section 47 Fitness Metaphor Headline */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground font-heading tracking-tight">
              Looks like this set got interrupted.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mt-1">
              Let&apos;s get you back on track. The page or program you requested doesn&apos;t exist or has moved.
            </p>
          </div>

          {/* Quick Search Shortcut Box */}
          <div className="w-full max-w-md">
            <Link
              href="/search"
              className="flex items-center justify-between px-4 py-3 rounded-2xl liquid-glass border border-white/40 dark:border-white/10 text-sm text-muted-foreground hover:text-foreground transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Search className="size-4 text-primary dark:text-sage" />
                <span>Search plans, credentials, or proof...</span>
              </div>
              <kbd className="px-2 py-0.5 text-xs font-mono bg-white/40 dark:bg-black/40 rounded-lg border border-border/60">
                ⌘K
              </kbd>
            </Link>
          </div>

          {/* Recovery Links (Section 47: Home, Plans, Search, Contact) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <GlassButton asChild variant="primary" size="default">
              <Link href="/">
                <Home className="size-4 mr-1.5" />
                <span>Home</span>
              </Link>
            </GlassButton>
            <GlassButton asChild variant="secondary" size="default">
              <Link href="/plans">
                <Target className="size-4 mr-1.5" />
                <span>Plans</span>
              </Link>
            </GlassButton>
            <GlassButton asChild variant="secondary" size="default">
              <Link href="/contact">
                <Mail className="size-4 mr-1.5" />
                <span>Contact</span>
              </Link>
            </GlassButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
