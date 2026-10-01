"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home, Mail } from "lucide-react";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { Container } from "@/components/layout/Container";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error boundary triggered:", error);
  }, [error]);

  return (
    <div className="py-20 md:py-32 my-auto">
      <Container size="narrow">
        <div className="liquid-glass-strong p-8 sm:p-14 rounded-3xl border border-white/60 dark:border-white/15 text-center flex flex-col items-center gap-6 shadow-2xl">
          <div className="flex flex-col gap-2 max-w-md">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary dark:text-sage">
              Session Paused
            </span>
            {/* Section 48 Message */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground font-heading tracking-tight">
              Something interrupted the workout.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mt-1">
              Try again or head back to the main floor.
            </p>
          </div>

          {/* Section 48 Actions: Retry, Home, Contact */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <GlassButton
              onClick={() => reset()}
              variant="primary"
              size="lg"
              className="gap-2 cursor-pointer shadow-md"
            >
              <RotateCcw className="size-4" />
              <span>Retry</span>
            </GlassButton>
            <GlassButton asChild variant="secondary" size="lg" className="gap-2">
              <Link href="/">
                <Home className="size-4" />
                <span>Home</span>
              </Link>
            </GlassButton>
            <GlassButton asChild variant="secondary" size="lg" className="gap-2">
              <Link href="/contact">
                <Mail className="size-4" />
                <span>Contact</span>
              </Link>
            </GlassButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
