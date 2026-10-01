"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, send to telemetry (e.g. Sentry) without exposing to UI
    console.error("Route error boundary triggered:", error);
  }, [error]);

  return (
    <div className="py-20 md:py-32 my-auto">
      <Container size="narrow">
        <div className="clay-card p-10 sm:p-14 rounded-3xl bg-card border-2 border-border/80 text-center flex flex-col items-center gap-6 shadow-xl">
          <div className="size-16 rounded-3xl bg-destructive/10 text-destructive flex items-center justify-center">
            <AlertCircle className="size-8" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Temporary Interruption
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight">
              Something went wrong. Let&apos;s get you back on track.
            </h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              An unexpected display glitch occurred while preparing this session. You can retry loading this view or return to the main homepage.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              onClick={() => reset()}
              size="lg"
              className="rounded-2xl gap-2 cursor-pointer shadow-md"
            >
              <RotateCcw className="size-4" />
              <span>Try Again</span>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl gap-2"
            >
              <Link href="/">
                <Home className="size-4" />
                <span>Return to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
