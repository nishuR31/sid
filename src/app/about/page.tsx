import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { profile, siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CSS3DObject } from "@/components/effects/CSS3DObject";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "About Siddharth",
  description: "Learn about Siddharth's training philosophy, 7+ years of coaching background, and evidence-based biomechanical methodology.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Siddharth | Siddharth Fit",
    description: "Learn about Siddharth's training philosophy, 7+ years of coaching background, and evidence-based biomechanical methodology.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Siddharth | Siddharth Fit",
    description: "Evidence-based strength coaching and sustainable habit periodization.",
  },
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <StructuredData type="person" />
      <Container>
        {/* Page Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/15 text-primary text-xs font-semibold uppercase tracking-wider w-fit">
              <span>Personal Trainer &amp; Coach</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground text-balance">
              Building Physical Strength &amp; Mental Discipline
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-2xl shadow-md">
                <Link href="/contact">Talk to Siddharth</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-primary/30 text-primary">
                <Link href="/plans">View Coaching Plans</Link>
              </Button>
            </div>
          </div>

          {/* Visual Presentation Card */}
          <div className="lg:col-span-5">
            <Card className="p-8 aspect-square flex flex-col items-center justify-between text-center relative overflow-hidden bg-gradient-to-b from-card via-card to-primary/5 border-2 border-border/80">
              <div className="w-full flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span className="font-bold text-primary">SIDDHARTH FIT</span>
                <span>EST. 2018</span>
              </div>

              <div className="my-auto relative flex flex-col items-center">
                <CSS3DObject className="scale-110" />
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-4 block">
                  [Portrait Placeholder]
                </span>
              </div>

              <div className="w-full py-2.5 px-4 rounded-xl bg-muted/50 border border-border/60 text-xs font-medium text-foreground flex items-center justify-between">
                <span>7+ Years Experience</span>
                <span className="text-primary font-bold">50+ Athletes Coached</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Philosophy & Approach In-Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              The Coaching Philosophy
            </h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p>{profile.philosophy}</p>
              <p>
                Too many lifters get caught in endless cycles of burnout, aggressive deficits, and joint pain caused by copying arbitrary routines off social media. My system is built around understanding your individual lever lengths, prior injuries, and weekly schedule to construct progressive training you genuinely enjoy.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              Background &amp; Credentials
            </h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p>{profile.bio}</p>
              <p>
                From preparing competitive powerlifters for state and national podiums to helping desk-bound remote professionals fix chronic thoracic stiffness, the goal is always identical: autonomy, resilience, and lifelong physical capability.
              </p>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Areas of Specialization"
            description="Deep practical and theoretical expertise applied across every client program."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.specialties.map((specialty, idx) => (
              <Card key={idx} className="p-6 flex items-start gap-4">
                <div className="size-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground mb-1">{specialty}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Systematic protocols tested through hundreds of hours of hands-on client instruction.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 4 Pillars of Approach */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Systematic Methodology"
            title="The 4 Pillars of the Siddharth Fit System"
            description="How every client journey is structured from day one."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.approachCategories.map((cat, idx) => (
              <Card key={idx} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="size-8 rounded-full bg-primary/15 text-primary text-xs font-black flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="clay-card p-10 sm:p-14 rounded-3xl bg-secondary/15 border border-secondary/30 text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Have questions about how this approach applies to your body?
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg">
            No sales scripts or automated upsells. Send Siddharth an email detailing your background and get candid guidance.
          </p>
          <Button asChild size="lg" className="rounded-2xl px-8 shadow-sm">
            <Link href="/contact">Start Conversation With Siddharth</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
