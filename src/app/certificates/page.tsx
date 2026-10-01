import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { certificates } from "@/content/certificates";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { GlassButton } from "@/components/ui/glass/GlassButton";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Accredited certifications held by Siddharth, including NSCA-CSCS, ACE-CPT, and Precision Nutrition.",
  alternates: {
    canonical: "/certificates",
  },
  openGraph: {
    title: "Certifications | Siddharth Fit",
    description:
      "Accredited credentials in strength & conditioning, exercise mechanics, and nutritional periodization.",
    url: `${siteConfig.url}/certificates`,
  },
};

export default function CertificatesPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Section 30: Certificates Header */}
        <SectionHeading
          eyebrow="Academic Credentials"
          title="Sanctioned Certifications"
          description="Accredited qualifications verifying mastery across exercise physiology, athletic periodization, injury mitigation, and nutritional biochemistry."
        />

        {/* Section 30: Grid 2-3 cols desktop, 1-2 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>

        {/* Verification Policy Card */}
        <div className="liquid-glass-strong p-8 sm:p-12 rounded-3xl border border-white/60 dark:border-white/15 text-center max-w-3xl mx-auto flex flex-col items-center gap-4 shadow-xl">
          <div className="size-12 rounded-full bg-primary/10 text-primary dark:text-sage flex items-center justify-center border border-primary/20">
            <ShieldCheck className="size-6" />
          </div>
          <h2 className="text-2xl font-bold font-heading text-foreground">
            Credential Verification Policy
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            Siddharth maintains active standing with the American Council on Exercise and the National Strength and Conditioning Association. Credential numbers can be validated directly on the official certifying body registries.
          </p>
          <div className="pt-2">
            <GlassButton asChild variant="primary" size="lg">
              <Link href="/contact">
                <span>Ask About Specific Accreditations</span>
                <ArrowRight className="size-4 ml-1" />
              </Link>
            </GlassButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
