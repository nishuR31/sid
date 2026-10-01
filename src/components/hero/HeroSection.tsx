import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "./HeroParallax";
import { CSS3DObject } from "@/components/effects/CSS3DObject";
import { profile } from "@/content/site";
import { Award, ShieldCheck, Flame, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-28">
      {/* Background Soft Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 translate-x-1/3 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            {/* Status Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-xs sm:text-sm font-semibold text-primary dark:text-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>Accepting New Clients • Online &amp; In-Person</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] text-balance">
              Transform Your Body. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-accent bg-clip-text text-transparent">
                Elevate Your Mind.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
              {profile.tagline} Master biomechanical fundamentals, build genuine strength, and develop sustainable habits designed for a lifetime of physical vitality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <Button asChild size="lg" className="rounded-2xl text-base px-8 shadow-md">
                <Link href="/contact">Talk to Siddharth</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl text-base px-8 border-primary/30 text-primary hover:bg-primary/10">
                <Link href="/plans">View Coaching Plans</Link>
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-border/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                <span>NSCA &amp; ACE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="size-4 text-amber-500" />
                <span>National Silver Medalist</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="size-4 text-primary" />
                <span>7+ Years Active Coaching</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card with Parallax & Floating Elements */}
          <div className="lg:col-span-5 relative flex justify-center py-4">
            <HeroParallax className="w-full max-w-md" depth={18}>
              <div className="clay-card relative aspect-[4/5] w-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-border/80 bg-gradient-to-b from-card via-card to-background/50">
                {/* Visual Header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/80 text-xs font-semibold text-foreground shadow-xs">
                    <Sparkles className="size-3.5 text-primary" />
                    <span>Evidence-Based</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-muted-foreground">SF-2025</span>
                </div>

                {/* Central Stylized 3D Object & Placeholder Art */}
                <div className="relative flex-1 flex flex-col items-center justify-center my-4">
                  <CSS3DObject className="scale-110 sm:scale-125" />
                  <div className="text-center mt-6 z-10">
                    <h3 className="font-heading font-black text-2xl text-foreground">Siddharth</h3>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mt-1">Strength &amp; Conditioning Coach</p>
                  </div>
                </div>

                {/* Bottom Highlight Stat Box */}
                <div className="glass-panel p-4 rounded-2xl flex items-center justify-between z-10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">Training Ethos</span>
                    <span className="text-sm font-semibold text-foreground">Precision Over Ego</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">Client Retention</span>
                    <span className="text-sm font-bold text-primary">94% Long-Term</span>
                  </div>
                </div>

                {/* Floating Decorative Badges with Zero Clipping */}
                <div className="absolute -top-3.5 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-2xl bg-card border border-border/80 text-xs font-bold text-foreground flex items-center gap-2 z-30 clay-pill">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>565kg Sanctioned Total</span>
                </div>

                <div className="absolute -bottom-3.5 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-2xl bg-card border border-border/80 text-xs font-bold text-foreground flex items-center gap-2 z-30 clay-pill">
                  <Award className="size-4 text-amber-500" />
                  <span>100% Drug-Free Athlete</span>
                </div>
              </div>
            </HeroParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
