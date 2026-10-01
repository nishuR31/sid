import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Flame, Award } from "lucide-react";
import { profile, siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { GlassImageFrame, GlassSection } from "@/components/ui/glass/GlassImageFrame";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";
import { PhilosophySequence } from "@/components/ui/glass/GlassTimeline";
import { StructuredData } from "@/components/seo/StructuredData";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "About Siddharth",
  description:
    "Learn about Siddharth's training philosophy, 7+ years of coaching background, and evidence-based biomechanical methodology.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Siddharth | Siddharth Fit",
    description:
      "Learn about Siddharth's training philosophy, 7+ years of coaching background, and evidence-based biomechanical methodology.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
};

export default function AboutPage() {
  const philosophySteps = [
    {
      step: "01",
      title: "Assess",
      description: "Joint kinematics, mobility deficits, prior injuries, and lifestyle constraints.",
    },
    {
      step: "02",
      title: "Plan",
      description: "Custom phased periodization with data-driven progressive overload curves.",
    },
    {
      step: "03",
      title: "Train",
      description: "Biomechanical precision, strict movement cues, and form audits on every lift.",
    },
    {
      step: "04",
      title: "Adapt",
      description: "Weekly review cadence adjusting volume, sleep hygiene, and macronutrients.",
    },
    {
      step: "05",
      title: "Progress",
      description: "Sustained strength milestones, physical recomposition, and long-term autonomy.",
    },
  ];

  return (
    <div className="py-12 md:py-20 flex flex-col gap-16">
      <StructuredData type="person" />
      <Container>
        {/* Section 23: About Page Hero - Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <GlassBadge variant="sage" size="md" className="w-fit">
              <span>Certified Coach &amp; Competitive Athlete</span>
            </GlassBadge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground font-heading text-balance leading-tight">
              Evidence-based strength. <br />
              <span className="text-primary dark:text-sage">Built for longevity.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              {profile.tagline}
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <GlassButton asChild variant="primary" size="lg">
                <Link href="/contact">
                  <span>Talk to Siddharth</span>
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </GlassButton>
              <GlassButton asChild variant="secondary" size="lg">
                <Link href="/plans">Explore Coaching Plans</Link>
              </GlassButton>
            </div>
          </div>

          {/* Siddharth's Portrait Frame (Section 10 & 23) */}
          <div className="lg:col-span-5">
            <GlassImageFrame
              src={profile.images.hero}
              alt="Siddharth - Strength & Conditioning Coach"
              aspectRatio="portrait"
              className="shadow-2xl"
              overlayBadge={
                <div className="liquid-glass-strong rounded-2xl p-4 border border-white/60 dark:border-white/15">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-foreground">Siddharth</span>
                    <span className="text-primary dark:text-sage font-mono">7+ Yrs Coaching</span>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* Philosophy & Approach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="liquid-glass-strong p-8 sm:p-10 rounded-3xl flex flex-col gap-5 border border-white/60 dark:border-white/15">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading tracking-tight">
              The Coaching Ethos
            </h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 text-sm sm:text-base">
              <p>{profile.philosophy}</p>
              <p>
                Too many lifters get trapped in extreme 12-week cycles of burnout, aggressive caloric deficits, and chronic joint impingement caused by copying generic routines from social media influencers.
              </p>
              <p>
                My methodology is rooted in movement kinematics, joint moment arms, and sustainable lifestyle design. We optimize lifting form to your skeleton, not the other way around.
              </p>
            </div>
          </div>

          <div className="liquid-glass p-8 sm:p-10 rounded-3xl flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading tracking-tight">
              Specialized Competencies
            </h2>
            <div className="space-y-3.5">
              {profile.specialties.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-primary/10 text-primary dark:text-sage flex items-center justify-center shrink-0">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/90">{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border/40 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-2xl font-black font-heading text-primary dark:text-sage">7+</span>
                <span className="text-[11px] block uppercase font-bold text-muted-foreground">Years</span>
              </div>
              <div>
                <span className="text-2xl font-black font-heading text-foreground">500+</span>
                <span className="text-[11px] block uppercase font-bold text-muted-foreground">Clients</span>
              </div>
              <div>
                <span className="text-2xl font-black font-heading text-primary dark:text-sage">565kg</span>
                <span className="text-[11px] block uppercase font-bold text-muted-foreground">Total</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Narrative Sequence (Section 25) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-sage block mb-1">
              Methodology
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
              How Every Client Progresses
            </h2>
          </div>
          <PhilosophySequence steps={philosophySteps} />
        </div>

        {/* Coaching Image Frame Interlude */}
        <div className="mb-20">
          <GlassImageFrame
            src={profile.images.coaching}
            alt="Siddharth coaching a client"
            aspectRatio="editorial"
            className="shadow-2xl"
          />
        </div>

        {/* CTA Card */}
        <div className="liquid-glass-strong rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-sage/40 dark:border-primary/40 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground tracking-tight mb-3">
            Start Your Journey with Siddharth
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6">
            Inquire about remote or in-person personal coaching. We will discuss your goals, training history, and build a program tailored to you.
          </p>
          <GlassButton asChild variant="primary" size="lg">
            <Link href="/contact">
              <span>Talk to Siddharth</span>
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </GlassButton>
        </div>
      </Container>
    </div>
  );
}
