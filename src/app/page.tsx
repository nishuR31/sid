import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Dumbbell,
  Activity,
  Compass,
  UserCheck,
  Sparkles,
  ArrowRight,
  Flame,
  Award,
} from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { GlassPanel } from "@/components/ui/glass/GlassPanel";
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardDescription, GlassCardContent, GlassCardFooter } from "@/components/ui/glass/GlassCard";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";
import { GlassImageFrame, GlassSection, GlassDivider } from "@/components/ui/glass/GlassImageFrame";
import { PhilosophySequence, GlassTimeline } from "@/components/ui/glass/GlassTimeline";
import { GlassPricingCard, CustomCoachingPanel } from "@/components/ui/glass/GlassPricingCard";
import { GlassTestimonial } from "@/components/ui/glass/GlassTestimonial";
import { GlassCertificateCard } from "@/components/ui/glass/GlassCertificateCard";
import { GlassSocialButton } from "@/components/ui/glass/GlassSocialButton";
import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { profile } from "@/content/site";
import { achievements } from "@/content/achievements";
import { certificates } from "@/content/certificates";
import { testimonials } from "@/content/testimonials";
import { plans } from "@/content/plans";
import { socialLinks } from "@/content/social";

export default function Home() {
  // Section 25: 5-step horizontal philosophy sequence
  const philosophySteps = [
    {
      step: "01",
      title: "Assess",
      description:
        "Comprehensive screening of joint mobility, kinematics, posture, and training history.",
    },
    {
      step: "02",
      title: "Plan",
      description:
        "Personalized periodization mapped to equipment access, schedule, and recovery biology.",
    },
    {
      step: "03",
      title: "Train",
      description:
        "Mastering compound execution with strict progressive overload and form critique.",
    },
    {
      step: "04",
      title: "Adapt",
      description:
        "Continuous feedback loops tuning nutrition, volume, and fatigue management.",
    },
    {
      step: "05",
      title: "Progress",
      description:
        "Measurable physical strength, joint resilience, and sustainable discipline.",
    },
  ];

  // Section 26: 4 focused services
  const services = [
    {
      icon: <Dumbbell className="size-6 text-primary dark:text-sage" />,
      title: "Strength & Hypertrophy",
      description:
        "Evidence-based resistance programming designed to maximize muscular development without joint wear.",
    },
    {
      icon: <Flame className="size-6 text-primary dark:text-sage" />,
      title: "Fat Loss & Conditioning",
      description:
        "Metabolic conditioning and nutritional architecture that preserves lean mass while optimizing body composition.",
    },
    {
      icon: <Activity className="size-6 text-primary dark:text-sage" />,
      title: "Mobility & Joint Health",
      description:
        "End-range articular strength and corrective movement kinematics to eliminate chronic aches.",
    },
    {
      icon: <UserCheck className="size-6 text-primary dark:text-sage" />,
      title: "Personalized 1-on-1 Coaching",
      description:
        "Direct guidance, video audits, and weekly accountability tailored to your specific physical goals.",
    },
  ];

  return (
    <div className="flex flex-col gap-0 pb-16 overflow-hidden">
      {/* 1. Hero Section (Section 11, 12, 17, 53, 56) */}
      <HeroSection />

      {/* 2. Trust Numbers Bar (Section 80) */}
      <section className="relative z-20 px-4 sm:px-6 -mt-6 sm:-mt-10 mb-4">
        <div className="max-w-5xl mx-auto liquid-glass-strong rounded-3xl p-5 sm:p-8 shadow-xl border border-white/60 dark:border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col gap-1 px-2 sm:px-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary dark:text-sage font-heading">
                7+
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground leading-snug">
                Years Coaching
              </span>
            </div>
            <div className="flex flex-col gap-1 px-2 sm:px-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground font-heading">
                500+
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground leading-snug">
                Clients Coached
              </span>
            </div>
            <div className="flex flex-col gap-1 px-2 sm:px-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary dark:text-sage font-heading">
                565kg
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground leading-snug">
                Sanctioned Total
              </span>
            </div>
            <div className="flex flex-col gap-1 px-2 sm:px-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground font-heading">
                100%
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-muted-foreground leading-snug">
                Drug-Free Athletics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section (Section 23-24: Asymmetric layout, Left photo, Right glass card) */}
      <section className="py-12 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Large Editorial Photo of Siddharth Coaching (Section 23) */}
            <div className="lg:col-span-6">
              <ScrollReveal>
                <GlassImageFrame
                  src={profile.images.coaching}
                  alt="Siddharth coaching a client on barbell kinematics"
                  aspectRatio="editorial"
                  className="shadow-2xl"
                  overlayBadge={
                    <div className="liquid-glass-strong rounded-2xl p-4 border border-white/60 dark:border-white/15">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Sparkles className="size-4 text-primary dark:text-sage" />
                        <span>Biomechanical Precision &amp; Active Form Guidance</span>
                      </div>
                    </div>
                  }
                />
              </ScrollReveal>
            </div>

            {/* Right: Glass Information Card (Section 24) */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.1}>
                <div className="liquid-glass-strong rounded-3xl p-8 sm:p-10 border border-white/60 dark:border-white/15 shadow-xl flex flex-col gap-6">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-primary dark:text-sage block mb-2 font-mono">
                      Coaching Philosophy
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-heading leading-tight">
                      Strength is a lifelong discipline, not a 12-week sprint.
                    </h2>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {profile.philosophy}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {profile.bio}
                  </p>

                  {/* Credential chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {profile.specialties.map((specialty, idx) => (
                      <GlassBadge key={idx} variant="primary" size="sm">
                        {specialty}
                      </GlassBadge>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <GlassButton asChild variant="primary" size="md">
                      <Link href="/about">
                        <span>Read Siddharth&apos;s Full Story</span>
                        <ArrowRight className="size-4 ml-1" />
                      </Link>
                    </GlassButton>
                    <GlassButton asChild variant="secondary" size="md">
                      <Link href="/contact">Ask a Question</Link>
                    </GlassButton>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Training Philosophy Horizontal Sequence (Section 25) */}
      <GlassSection
        eyebrow="Progression Architecture"
        title="How We Build Lasting Results"
        description="Every client follows a structured, evidence-backed narrative progression from initial diagnostic to long-term autonomy."
      >
        <ScrollReveal>
          <PhilosophySequence steps={philosophySteps} />
        </ScrollReveal>
      </GlassSection>

      {/* 5. Services Section (Section 26-27: 3-4 services maximum) */}
      <GlassSection
        eyebrow="Specialized Coaching"
        title="Focused Training Domains"
        description="No bloated service catalogs. Four core disciplines executed with surgical biomechanical rigor."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05}>
              <GlassCard
                variant="default"
                hoverEffect
                className="h-full group hover:border-primary/40 transition-all duration-300"
              >
                <GlassCardHeader>
                  <div className="size-12 rounded-2xl liquid-glass flex items-center justify-center mb-2 group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300">
                    {srv.icon}
                  </div>
                  <GlassCardTitle className="text-lg">
                    {srv.title}
                  </GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <GlassCardDescription>
                    {srv.description}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </GlassSection>

      {/* 6. Photography Interlude: Strength in Action (Section 10 & 100 & 117) */}
      <section className="py-8 sm:py-12 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ScrollReveal>
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 dark:border-white/10 aspect-[4/3] sm:aspect-[16/7]">
            {/* Full-bleed image fills the aspect-ratio container */}
            <Image
              src={profile.images.strength}
              alt="Siddharth performing heavy deadlift with disciplined form"
              fill
              sizes="(max-width: 768px) 100vw, 1320px"
              className="object-cover object-center"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            {/* Floating Glass Brand Statement (Section 117) */}
            <div className="absolute inset-0 z-20 flex items-end p-4 sm:p-8 lg:p-12">
              <div className="liquid-glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-2xl border border-white/60 dark:border-white/15 backdrop-blur-xl">
                <span className="text-[10px] sm:text-xs uppercase font-mono font-bold tracking-widest text-primary dark:text-sage block mb-1.5">
                  Core Credo
                </span>
                <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight leading-tight">
                  &ldquo;Strength is visible. Discipline is structured. Progress is personal.&rdquo;
                </p>
                <span className="text-xs sm:text-sm text-white/70 block mt-2">
                  — Siddharth, Certified Strength &amp; Conditioning Coach
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 7. Achievements & Proof Wall (Section 28-29) */}
      <GlassSection
        eyebrow="Sanctioned Proof"
        title="Tested on the Platform"
        description="True coaching mastery starts with personal adherence. Siddharth tests his methodology against strict national competition standards."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Achievement Card (Section 28) */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="liquid-glass-strong rounded-3xl p-8 border-sage/40 dark:border-primary/40 shadow-xl flex flex-col justify-between h-full">
                <div>
                  <GlassBadge variant="highlight" size="md" className="mb-4">
                    <Award className="size-3.5 fill-current" />
                    <span>Featured Sanctioned Benchmark</span>
                  </GlassBadge>

                  <span className="text-xs font-mono font-bold text-muted-foreground block mb-1">
                    2024 National Open
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground font-heading tracking-tight mb-4">
                    National Powerlifting Championship — Silver Medal
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Competed in the 83kg Open Division under IPF sanctioned judging, achieving an official 565kg three-lift total (squat, bench press, deadlift).
                  </p>
                </div>

                <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black font-heading text-primary dark:text-sage">
                      565 kg
                    </span>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">
                      Sanctioned Total
                    </span>
                  </div>
                  <GlassButton asChild variant="secondary" size="sm">
                    <Link href="/achievements">Explore All Records</Link>
                  </GlassButton>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Achievement Timeline (Section 29) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <GlassTimeline items={achievements.slice(1, 4)} />
            </ScrollReveal>
          </div>
        </div>
      </GlassSection>

      {/* 8. Accreditations & Certificates Gallery (Section 30-32) */}
      <GlassSection
        eyebrow="Verified Credentials"
        title="Accredited Education"
        description="Continuous professional education grounded in peer-reviewed exercise physiology, biomechanics, and sports nutrition."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.slice(0, 3).map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 0.05}>
              <GlassCertificateCard certificate={cert} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <GlassButton asChild variant="secondary" size="lg">
            <Link href="/certificates">
              <span>View All 5 Accredited Certifications</span>
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </GlassButton>
        </div>
      </GlassSection>

      {/* 9. Testimonials & Social Proof (Section 33-34) */}
      <GlassSection
        eyebrow="Client Outcomes"
        title="Real Humans. Measurable Vitality."
        description="Authentic client accounts. No manufactured hype or guaranteed quick fixes—just consistent progress earned through discipline."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Large Testimonial (Section 33) */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <GlassTestimonial
                {...testimonials[0]}
                featured
              />
            </ScrollReveal>
          </div>

          {/* Secondary Testimonials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {testimonials.slice(1, 3).map((t, idx) => (
              <ScrollReveal key={t.id} delay={idx * 0.08}>
                <GlassTestimonial {...t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </GlassSection>

      {/* 10. Coaching Plans & Pricing (Section 36-39) */}
      <GlassSection
        eyebrow="Coaching Tiers"
        title="Transparent Starting Points"
        description="Clear, non-transactional partnership structures. Understand the scope in under ten seconds."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.slice(0, 3).map((plan, idx) => (
            <ScrollReveal key={plan.id} delay={idx * 0.06}>
              <GlassPricingCard
                id={plan.id}
                name={plan.name}
                price={plan.startingPrice}
                period={plan.period}
                description={plan.description}
                features={plan.features.slice(0, 5)}
                recommended={plan.recommended}
                suitableFor={plan.suitableFor}
                className="h-full"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Section 39: Custom Coaching Distinct Glass Panel */}
        <ScrollReveal delay={0.15}>
          <CustomCoachingPanel />
        </ScrollReveal>
      </GlassSection>

      {/* 11. Social Channels Strip (Section 40) */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="liquid-glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                Follow Siddharth&apos;s Training
              </h3>
              <p className="text-xs text-muted-foreground">
                Daily exercise tutorials, movement biomechanics, and long-term discipline.
              </p>
            </div>
            <GlassBadge variant="sage" size="sm">
              Official Channels
            </GlassBadge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.slice(0, 4).map((s) => (
              <GlassSocialButton
                key={s.url}
                platform={s.label}
                url={s.url}
                handle={s.handle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Contact Section Endpoint (Section 41-43) */}
      <section id="contact-section" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </section>
    </div>
  );
}
