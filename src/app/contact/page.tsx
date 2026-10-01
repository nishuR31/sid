import { Suspense } from "react";
import { Metadata } from "next";
import { Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";

export const metadata: Metadata = {
  title: "Contact & Consult",
  description: "Reach out to Siddharth directly to discuss your fitness goals, injury history, and coaching track.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Consult | Siddharth Fit",
    description: "Start a conversation directly with Siddharth. No automated billing or sales funnels.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container size="default">
        <SectionHeading
          eyebrow="Direct Intake"
          title="Talk to Siddharth"
          description="Have questions about which coaching track fits your schedule, or want a candid assessment of your fitness goals? Fill out the intake details below or reach out directly."
        />

        {/* Form and Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto mb-16">
          {/* Main Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 text-center text-muted-foreground rounded-3xl bg-card border border-border">
                  Loading intake form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Direct channels & Communication SLA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="clay-card p-6 sm:p-8 rounded-3xl bg-card border border-border/80 flex flex-col gap-5">
              <h3 className="font-bold text-xl text-foreground">Direct Channels</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect with Siddharth directly via Instagram or send a direct email. We do not provide phone numbers to prevent unsolicited contact.
              </p>
              <SocialLinks />
            </div>

            <div className="p-6 rounded-3xl bg-secondary/15 border border-secondary/30 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Clock className="size-4" />
                <span>Response Time SLA</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All coaching inquiries receive a personalized response from Siddharth within 24 business hours. No automated bot replies.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-muted/40 border border-border/60 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero Sales Pressure</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If Siddharth believes another specialized provider or physical therapist is a better fit for your current physiological state, he will tell you openly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
