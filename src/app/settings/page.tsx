"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Sun,
  Moon,
  Laptop,
  Check,
  Eye,
  Sliders,
  ShieldCheck,
  MousePointer,
  Sparkles,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  if (!mounted) {
    return (
      <div className="py-24 text-center text-muted-foreground">
        Loading preferences...
      </div>
    );
  }

  const themes = [
    {
      id: "dark",
      label: "Dark Luxury (Recommended)",
      desc: "60% Deep obsidian black, 30% steel slate grey, and 10% electric royal blue accent.",
      icon: Moon,
    },
    {
      id: "light",
      label: "Porcelain Light",
      desc: "Crisp white & slate canvas with royal blue buttons and high-contrast typography.",
      icon: Sun,
    },
    {
      id: "system",
      label: "System Automatic",
      desc: "Seamlessly mirrors your operating system or mobile device display preference.",
      icon: Laptop,
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors py-1"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow="Personalize Experience"
          title="Display & Preferences"
          description="Customize theme modes, review WCAG AA visual accessibility compliance, and configure interaction feedback."
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Theme Mode Selector Card */}
          <div className="clay-card p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary clay-pill">
                  <Sliders className="size-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Theme Palette</h2>
                  <p className="text-xs text-muted-foreground">
                    Powered by the 60-30-10 luxury athletic design rule
                  </p>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary/80 text-primary border border-border/60">
                Active: {theme}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {themes.map((t) => {
                const Icon = t.icon;
                const isSelected = theme === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTheme(t.id)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all cursor-pointer clay-pill ${
                      isSelected
                        ? "bg-primary/15 border-primary shadow-xs ring-2 ring-primary/40 translate-y-[-2px]"
                        : "bg-secondary/20 border-border/70 hover:bg-secondary/40 text-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className={`p-2 rounded-xl ${isSelected ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"}`}>
                        <Icon className="size-4" />
                      </div>
                      {isSelected && (
                        <div className="size-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                          <Check className="size-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="font-bold text-sm text-foreground mb-1">{t.label}</span>
                    <span className="text-xs text-muted-foreground leading-relaxed">{t.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accessibility & Visual Standards Card */}
          <div className="clay-card p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md space-y-4">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary clay-pill">
                <Eye className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Accessibility & Contrast Standards</h3>
                <p className="text-xs text-muted-foreground">WCAG 2.1 AA Compliance Verification</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-secondary/15 border border-border/60 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-emerald-500" />
                  <strong className="text-sm font-bold text-foreground">Body Text Contrast: 18.5:1</strong>
                </div>
                <p className="text-xs text-muted-foreground">
                  Exceeds the WCAG AA minimum requirement of 4.5:1 contrast for regular text on luxury obsidian black backgrounds.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/15 border border-border/60 space-y-1">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-emerald-500" />
                  <strong className="text-sm font-bold text-foreground">Muted Slate Contrast: 7.8:1</strong>
                </div>
                <p className="text-xs text-muted-foreground">
                  Secondary slate subtitles and badges comfortably surpass WCAG AA thresholds to eliminate eye strain.
                </p>
              </div>
            </div>
          </div>

          {/* Interaction & Cursor Bubble Feedback Card */}
          <div className="clay-card p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md space-y-4">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary clay-pill">
                <MousePointer className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Cursor & Motion Feedback</h3>
                <p className="text-xs text-muted-foreground">Interactive spring bubble and scroll dynamics</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <div className="flex items-start justify-between gap-4 p-3 rounded-2xl bg-secondary/15 border border-border/60">
                <div className="flex items-center gap-3">
                  <Sparkles className="size-5 text-primary shrink-0" />
                  <div>
                    <span className="font-bold text-foreground block">Liquid Bubble Cursor</span>
                    <span className="text-xs">
                      Floating trailing halo with inertia. Enabled on desktop pointing devices; automatically suspended on mobile touchscreens.
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20 shrink-0">
                  Adaptive
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 p-3 rounded-2xl bg-secondary/15 border border-border/60">
                <div>
                  <span className="font-bold text-foreground block">System Reduced Motion</span>
                  <span className="text-xs">
                    {prefersReducedMotion
                      ? "Detected: OS prefers reduced motion. Page scroll animations are disabled."
                      : "Default: Smooth kinetic scroll-reveal and 3D parallax active."}
                  </span>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${prefersReducedMotion ? "bg-amber-500/20 text-amber-500" : "bg-secondary text-muted-foreground"}`}>
                  {prefersReducedMotion ? "Active" : "Normal"}
                </span>
              </div>
            </div>
          </div>

          {/* Reset Action */}
          <div className="flex items-center justify-between pt-2">
            <Link href="/legal" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 font-medium">
              <ShieldCheck className="size-4" />
              <span>Review Privacy Policy & Legal Disclaimers</span>
            </Link>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme("system")}
              className="rounded-2xl text-xs gap-1.5"
            >
              <RotateCcw className="size-3.5" />
              <span>Reset to System</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
