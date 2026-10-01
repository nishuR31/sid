import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { HeroSection } from "@/components/hero/HeroSection";
import { PlanCard } from "@/components/plans/PlanCard";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { plans } from "@/content/plans";
import { achievements } from "@/content/achievements";
import { certificates } from "@/content/certificates";
import { testimonials } from "@/content/testimonials";
import { profile } from "@/content/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-24">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Numbers Bar */}
      <section className="border-y border-border/80 bg-card/60 py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-black text-primary">7+</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Years Coaching</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-black text-foreground">565kg</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Sanctioned Total</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-black text-accent">100%</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Drug-Free Athletics</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-black text-foreground">94%</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">1-Year Client Retention</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. About Siddharth / Training Philosophy */}
      <section className="relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Overview Column */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start flex flex-col gap-6">
              <ScrollReveal>
                <SectionHeading
                  align="left"
                  eyebrow="Coaching Ethos"
                  title="Evidence-Based Strength. Built For Longevity."
                  description="Fitness is not an extreme 12-week sprint; it is an enduring physical discipline. We eliminate internet dogma, assess your individual movement anatomy, and build progressive momentum you can sustain for decades."
                  className="mb-0"
                />

                <div className="space-y-4 pt-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-1.5 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0 border border-primary/20">
                      <CheckCircle2 className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground">Mastering Movement Kinematics</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Joint moment arms, active spinal bracing, and customized foot/grip positions to eliminate nagging impingement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-1.5 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0 border border-primary/20">
                      <CheckCircle2 className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground">Data-Driven Progressive Overload</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Every set, repetition, and RPE rating is tracked systematically to ensure steady adaptation without catastrophic fatigue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-1.5 rounded-xl bg-primary/10 text-primary mt-0.5 shrink-0 border border-primary/20">
                      <CheckCircle2 className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground">Nutrition Built Around Real Life</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nutritional periodization that fuels muscle protein synthesis and mental sharpness without turning social dinners into a chore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Button asChild size="lg" className="rounded-2xl">
                    <Link href="/about">Read Siddharth&apos;s Full Story</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Approach Pillars Grid - Scrolls smoothly with parallax depth */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.approachCategories.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1} yOffset={20}>
                  <Card className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="size-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/20">
                        <Sparkles className="size-5" />
                      </div>
                      <h4 className="font-bold text-base text-foreground mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Coaching Plans Overview */}
      <section className="bg-muted/30 py-20 border-y border-border/80">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Programs & Tracks"
              title="Structured Coaching Plans"
              description="Transparent, non-transactional starting points. Every program includes personalized movement screening and ongoing form oversight."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.slice(0, 3).map((plan, idx) => (
              <ScrollReveal key={plan.id} delay={idx * 0.1}>
                <PlanCard plan={plan} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-2xl">
              <Link href="/plans">
                <span>View Full Curriculum &amp; Compare Plans</span>
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 5. Custom Coaching Dedicated Section */}
      <section>
        <Container>
          <ScrollReveal>
            <div className="clay-card p-8 sm:p-14 bg-gradient-to-tr from-card via-card to-secondary/10 border-2 border-primary/20 rounded-3xl">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest font-bold text-primary block mb-2">
                  Tailored To You
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                  Your goals aren&apos;t standard. Your plan shouldn&apos;t be either.
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Whether you are rehabilitating a past shoulder separation, preparing for a tactical fitness test, or balancing intense executive travel schedules, Siddharth designs bespoke coaching agreements with custom session cadence.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="rounded-2xl shadow-md">
                    <Link href="/contact?plan=Custom%20Coaching">
                      Discuss a Custom Blueprint
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-foreground hover:text-primary">
                    <Link href="/contact">Ask a question first &rarr;</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 6. Achievements Preview */}
      <section>
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <SectionHeading
                align="left"
                eyebrow="Track Record"
                title="Verified Competitive &amp; Coaching Achievements"
                description="Tangible proof of physical capability and professional recognition. No fabricated titles."
                className="mb-0 max-w-2xl"
              />
              <Button asChild variant="outline" className="rounded-xl shrink-0 self-start md:self-end">
                <Link href="/achievements">
                  <span>All Achievements</span>
                  <ArrowRight className="size-3.5 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.slice(0, 3).map((achievement, idx) => (
              <ScrollReveal key={achievement.id} delay={idx * 0.1}>
                <AchievementCard achievement={achievement} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Certifications Preview */}
      <section className="bg-muted/20 py-20 border-y border-border/80">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <SectionHeading
                align="left"
                eyebrow="Academic Credentials"
                title="Sanctioned Certifications"
                description="Accredited qualifications in exercise physiology, athletic periodization, and nutritional science."
                className="mb-0 max-w-2xl"
              />
              <Button asChild variant="outline" className="rounded-xl shrink-0 self-start md:self-end">
                <Link href="/certificates">
                  <span>View All Certifications</span>
                  <ArrowRight className="size-3.5 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.slice(0, 3).map((cert, idx) => (
              <ScrollReveal key={cert.id} delay={idx * 0.1}>
                <CertificateCard certificate={cert} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Client Testimonials */}
      <section>
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Real Client Feedback"
              title="Verified Transformations"
              description="Authentic experiences from real clients. Sustainable strength gains, pain-free posture, and lifestyle resilience."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <ScrollReveal key={testimonial.id} delay={idx * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-2xl">
              <Link href="/testimonials">
                <span>Read More Client Stories</span>
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* 9. Final Contact CTA Banner */}
      <section>
        <Container>
          <ScrollReveal>
            <div className="clay-card p-10 sm:p-16 text-center rounded-3xl bg-gradient-to-b from-card via-card to-primary/10 border-2 border-primary/30 flex flex-col items-center gap-6">
              <span className="px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider">
                Start Your Journey
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight max-w-2xl text-balance">
                Ready to take control of your physical vitality?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl text-balance">
                Send Siddharth a message with your background and goals. Receive an honest, objective roadmap before making any commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="rounded-2xl text-base px-8 shadow-md">
                  <Link href="/contact">Talk to Siddharth</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl text-base px-8 border-primary/30 text-primary">
                  <Link href="/plans">Explore Coaching Plans</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
