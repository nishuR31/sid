import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import { Certificate } from "@/types/content";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";

interface CertificateDetailProps {
  certificate: Certificate;
}

export function CertificateDetail({ certificate }: CertificateDetailProps) {
  return (
    <article className="max-w-5xl mx-auto flex flex-col gap-10">
      <div>
        <Link
          href="/certificates"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group py-1"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Certifications</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <GlassBadge variant="sage" size="md">
            <ShieldCheck className="size-3.5" />
            <span>Verified Sanctioned Credential</span>
          </GlassBadge>
          {certificate.credentialId && (
            <span className="text-xs font-mono px-3 py-1 rounded-full liquid-glass border border-white/40 dark:border-white/10 text-muted-foreground">
              ID: {certificate.credentialId}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-heading">
          {certificate.title}
        </h1>

        <p className="text-lg sm:text-xl font-semibold text-primary dark:text-sage">
          Issued by {certificate.issuer}
        </p>
      </div>

      {/* Section 32: Layout - Left: Large Certificate Document, Right: Credential Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Large Certificate Visual Document */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[1.414/1] w-full bg-gradient-to-br from-[#FAF8F5] to-[#EFEBE4] dark:from-[#0E1F1A] dark:to-[#071310] p-8 rounded-3xl flex flex-col justify-between border border-border-glass shadow-2xl overflow-hidden">
            <div className="absolute inset-4 border border-primary/20 dark:border-primary/30 rounded-2xl pointer-events-none" />
            <div className="absolute inset-5 border border-dashed border-primary/15 dark:border-primary/20 rounded-xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary dark:text-sage">
                <ShieldCheck className="size-6" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  Accredited Certification
                </span>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:text-sage">
                {certificate.year}
              </span>
            </div>

            <div className="relative z-10 text-center my-auto py-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-1">
                Conferred Upon
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#10231E] dark:text-[#F2F6F3] tracking-tight">
                Siddharth
              </h3>
              <p className="text-sm sm:text-base font-bold text-primary dark:text-sage mt-2">
                {certificate.title}
              </p>
              <span className="text-xs text-muted-foreground block mt-1">
                {certificate.issuer}
              </span>
            </div>

            <div className="relative z-10 flex items-end justify-between pt-4 border-t border-primary/10 text-xs font-mono text-muted-foreground">
              <div>
                <span className="block font-bold">Credential: {certificate.credentialId || "VERIFIED"}</span>
                <span className="text-[11px] text-muted-foreground/70">{certificate.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-primary dark:text-sage font-bold">
                <Award className="size-4" />
                <span>Sanctioned Standing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Credential Information & Skills */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="liquid-glass-strong p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-white/15 shadow-xl flex flex-col gap-5">
            <h3 className="text-xl font-bold font-heading text-foreground">
              Credential Specifications
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 rounded-2xl liquid-glass">
                <span className="text-[11px] uppercase font-bold text-muted-foreground block">
                  Issuer
                </span>
                <span className="font-semibold text-foreground mt-0.5 block">
                  {certificate.issuer}
                </span>
              </div>
              <div className="p-3 rounded-2xl liquid-glass">
                <span className="text-[11px] uppercase font-bold text-muted-foreground block">
                  Credential ID
                </span>
                <span className="font-semibold font-mono text-foreground mt-0.5 block">
                  {certificate.credentialId || "Recorded"}
                </span>
              </div>
              <div className="p-3 rounded-2xl liquid-glass">
                <span className="text-[11px] uppercase font-bold text-muted-foreground block">
                  Awarded Date
                </span>
                <span className="font-semibold text-foreground mt-0.5 block">
                  {certificate.date}
                </span>
              </div>
              <div className="p-3 rounded-2xl liquid-glass">
                <span className="text-[11px] uppercase font-bold text-muted-foreground block">
                  Status
                </span>
                <span className="font-semibold text-primary dark:text-sage mt-0.5 block">
                  {certificate.expiryDate || "Active Lifetime"}
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {certificate.description}
            </p>

            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground block mb-2">
                Related Expertise
              </span>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, idx) => (
                  <GlassBadge key={idx} variant="primary" size="sm">
                    {skill}
                  </GlassBadge>
                ))}
              </div>
            </div>

            {certificate.verificationUrl && (
              <div className="pt-2">
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary dark:text-sage hover:underline"
                >
                  <span>Verify on official {certificate.issuer} registry</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Section 32 CTA: Ask Siddharth About Coaching */}
          <div className="liquid-glass p-6 rounded-3xl border border-white/50 dark:border-white/10 flex flex-col gap-3">
            <h4 className="font-bold text-base text-foreground font-heading">
              Interested in training under this methodology?
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Siddharth applies these exact biomechanical protocols to every custom training client.
            </p>
            <GlassButton asChild variant="primary" size="lg" className="w-full mt-1">
              <Link href={`/contact?subject=Inquiry regarding ${encodeURIComponent(certificate.title)}`}>
                <span>Ask Siddharth About Coaching</span>
                <ArrowRight className="size-4 ml-1" />
              </Link>
            </GlassButton>
          </div>
        </div>
      </div>
    </article>
  );
}
