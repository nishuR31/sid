import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { certificates } from "@/content/certificates";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Accredited certifications held by Siddharth, including NSCA-CSCS, ACE-CPT, and Precision Nutrition.",
  alternates: {
    canonical: "/certificates",
  },
  openGraph: {
    title: "Certifications | Siddharth Fit",
    description: "Accredited credentials in strength & conditioning, exercise mechanics, and nutritional periodization.",
    url: `${siteConfig.url}/certificates`,
  },
};

export default function CertificatesPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Academic Credentials"
          title="Sanctioned Certifications"
          description="Accredited qualifications verifying mastery across exercise physiology, athletic periodization, injury mitigation, and nutritional biochemistry."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>

        {/* Verification Standards Card */}
        <div className="clay-card p-8 sm:p-12 rounded-3xl bg-secondary/10 border border-secondary/25 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <ShieldCheck className="size-6" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Credential Verification Policy</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            Siddharth maintains active standing with the American Council on Exercise and the National Strength and Conditioning Association. Credential numbers can be looked up directly on the respective certifying body registers.
          </p>
          <div className="pt-2">
            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/contact">Ask About Specific Accreditations &rarr;</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
