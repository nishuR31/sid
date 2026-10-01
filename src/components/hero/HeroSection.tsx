"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Flame, Sparkles, ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";
import { GlassDumbbell } from "@/components/ui/glass/GlassDumbbell";
import { LiquidBlob, LiquidBlobSecondary } from "@/components/ui/glass/LiquidBlob";
import { GlassRefractionFilter } from "@/components/ui/glass/GlassRefractionFilter";
import { HeroParallax } from "./HeroParallax";
import { profile } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-16 pb-16 md:pb-28">
      {/* SVG Refraction Filter for Glass Effects (Section 56) */}
      <GlassRefractionFilter />

      {/* Ambient Depth Layer (Layer 0 - Section 3 & 54) */}
      <LiquidBlob className="-top-24 left-1/4" />
      <LiquidBlobSecondary className="top-1/3 -right-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text Content Column (55% or 7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start z-20">
            {/* Status Eyebrow Pill */}
            <GlassBadge variant="sage" size="md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-emerald-400"></span>
              </span>
              <span>Accepting New Clients • Online &amp; In-Person</span>
            </GlassBadge>

            {/* Main Headline (Section 11) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] text-balance font-heading">
              Build strength. <br />
              <span className="text-primary dark:text-sage">Build discipline.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
              Coaching designed around your biology, schedule, and biomechanics. Master foundational human movements, build resilient muscle, and forge sustainable habits with Siddharth.
            </p>

            {/* Action Buttons (Section 17: Von Restorff Principle) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <GlassButton asChild variant="primary" size="lg">
                <Link href="/contact">
                  <span>Talk to Siddharth</span>
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </GlassButton>
              <GlassButton asChild variant="secondary" size="lg">
                <Link href="/plans">
                  <span>Explore Coaching</span>
                </Link>
              </GlassButton>
            </div>

            {/* Trust Badges Bar (Section 1) */}
            <div className="pt-6 border-t border-border-glass/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary dark:text-sage" />
                <span>NSCA &amp; ACE Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="size-4 text-amber-700 dark:text-highlight" />
                <span>565kg Sanctioned Total</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="size-4 text-primary dark:text-sage" />
                <span>7+ Years Active Coaching</span>
              </div>
            </div>
          </div>

          {/* Siddharth's Photography Column (Occupies 45-60% Visual Area - Section 10 & 11) */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center py-4 z-10">
            {/* 3D Glass Dumbbell Sitting Beside/Behind (Section 53) */}
            <div className="absolute -top-10 -right-6 sm:-right-10 z-0 opacity-75 pointer-events-none scale-90 sm:scale-100">
              <GlassDumbbell />
            </div>

            <HeroParallax className="w-full max-w-md relative z-10" depth={12}>
              {/* Main Portrait Frame (Section 77) */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/60 dark:border-white/15 shadow-2xl bg-black/5">
                <Image
                  src={profile.images.hero}
                  alt="Siddharth - Strength & Conditioning Coach"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 480px"
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                />

                {/* Subtle environmental green gradient wash & vignette (Section 11) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Refraction Lens overlay at edges */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/40 dark:ring-white/20"
                  aria-hidden="true"
                />

                {/* Top Corner Certification Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="liquid-glass-strong px-3 py-1.5 rounded-full text-xs font-semibold text-foreground flex items-center gap-2 border border-white/60 dark:border-white/20 shadow-md">
                    <Sparkles className="size-3.5 text-primary dark:text-sage" />
                    <span>Evidence-Based</span>
                  </div>
                </div>

                {/* Floating Glass Panel (Section 12: Overlaps portrait lower corner, never covering face) */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="liquid-glass-strong rounded-2xl p-4 sm:p-5 border border-white/70 dark:border-white/25 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-primary dark:text-sage block">
                          Certified Specialist
                        </span>
                        <h3 className="font-heading font-black text-base sm:text-lg text-foreground tracking-tight">
                          Siddharth
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Strength • Mobility • Longevity
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-primary dark:text-sage block">
                          100% Drug-Free
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          Clean Athletics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HeroParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
