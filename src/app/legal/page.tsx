import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, FileText, AlertTriangle, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Legal, Privacy Policy & Terms of Service",
  description: "Privacy policy, health & coaching disclosures, and terms of service for Siddharth Fit.",
};

export default function LegalPage() {
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
          eyebrow="Governance & Integrity"
          title="Privacy Policy & Terms of Coaching"
          description="Clear standards regarding client data confidentiality, evidence-based fitness coaching boundaries, and service protocols."
        />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Coaching & Medical Disclaimer Notice */}
          <div className="liquid-glass p-6 sm:p-8 rounded-3xl bg-card border border-primary/40 shadow-lg relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-primary/15 text-primary shrink-0 glass-pill mt-0.5">
                <AlertTriangle className="size-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-foreground">
                  Important Coaching & Medical Disclaimer
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Siddharth is an NSCA-Certified Strength and Conditioning Specialist (CSCS) and ACE-Certified Personal Trainer. Coaching programs, movement breakdowns, and nutritional frameworks are designed exclusively for fitness enhancement, biomechanical refinement, and strength progression.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  They <strong className="text-foreground">do not constitute medical advice</strong>, orthopedic diagnosis, or clinical physical therapy. Consult your physician or medical provider prior to undertaking any rigorous exercise program or major nutritional modification.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <section id="privacy" className="liquid-glass p-6 sm:p-10 rounded-3xl bg-card border border-border/80 space-y-6">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary glass-pill">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Privacy Policy</h3>
                <p className="text-xs text-muted-foreground">Last updated: October 2026</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h4 className="text-base font-bold text-foreground">1. Client Data Confidentiality</h4>
              <p>
                We collect personal intake details (name, email, training background, and movement goals) solely to evaluate your coaching suitability and structure your program. We respect client confidentiality and will never sell, rent, or trade your personal metrics or contact details to third-party brokers.
              </p>

              <h4 className="text-base font-bold text-foreground">2. Communication & Messaging Safety</h4>
              <p>
                Inquiries submitted through this site initiate direct email correspondence with Siddharth. To protect user privacy and avoid unauthorized marketing solicitation, direct cellular phone and WhatsApp numbers are shared only with enrolled clients under active contract.
              </p>

              <h4 className="text-base font-bold text-foreground">3. Analytics & Device Storage</h4>
              <p>
                This platform uses minimal anonymous telemetry strictly for performance optimization and UI accessibility (such as remembering your chosen Dark, Light, or System theme mode).
              </p>

              <h4 className="text-base font-bold text-foreground">4. Data Erasure & Rights</h4>
              <p>
                You may request immediate erasure of your consultation history or program records at any time by contacting{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary font-medium hover:underline">
                  {siteConfig.email}
                </a>.
              </p>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section id="terms" className="liquid-glass p-6 sm:p-10 rounded-3xl bg-card border border-border/80 space-y-6">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary glass-pill">
                <FileText className="size-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Terms of Service</h3>
                <p className="text-xs text-muted-foreground">Coaching agreement and service terms</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h4 className="text-base font-bold text-foreground">1. Engagement & Agreement</h4>
              <p>
                By enrolling in any coaching track (1-on-1 In-Person, Online Protocol, or Consultation), you agree to provide truthful training and health history disclosures and adhere to safety standards during movement execution.
              </p>

              <h4 className="text-base font-bold text-foreground">2. Non-Transactional Pricing Transparency</h4>
              <p>
                Starting rates displayed on this platform are indicative benchmarks. Customized fee schedules, training frequency, and intake milestones are finalized mutually following your initial movement assessment.
              </p>

              <h4 className="text-base font-bold text-foreground">3. Cancellation & Rescheduling</h4>
              <p>
                For 1-on-1 private sessions, a minimum 24-hour advance notice is requested for rescheduling. Online coaching protocols run on 4-week periodization cycles with ongoing check-in schedules agreed upon prior to intake.
              </p>

              <h4 className="text-base font-bold text-foreground">4. Intellectual Property</h4>
              <p>
                All periodization templates, custom exercise analysis videos, and guidance documents provided during coaching remain the intellectual property of Siddharth Fit and are licensed solely for your personal athletic development.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
