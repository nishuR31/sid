import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2, ExternalLink, ShieldCheck, BookOpen } from "lucide-react";
import { Certificate } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CertificateDetailProps {
  certificate: Certificate;
}

export function CertificateDetail({ certificate }: CertificateDetailProps) {
  return (
    <article className="max-w-4xl mx-auto flex flex-col gap-10">
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
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default" className="gap-1.5">
            <ShieldCheck className="size-3.5" />
            <span>Verified Credential</span>
          </Badge>
          {certificate.credentialId && (
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
              ID: {certificate.credentialId}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          {certificate.title}
        </h1>

        <p className="text-xl font-semibold text-primary">
          Issued by {certificate.issuer}
        </p>
      </div>

      {/* Certificate Visual Artifact Frame */}
      <Card className="border-2 border-primary/20 bg-gradient-to-b from-card via-card to-secondary/5 p-8 sm:p-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-border/80 pb-8">
          <div className="flex items-center gap-4">
            <div className="size-16 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Award className="size-9" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground block">
                Official Credential Record
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-0.5">
                {certificate.title}
              </h2>
              <span className="text-sm text-primary font-medium">{certificate.issuer}</span>
            </div>
          </div>

          {certificate.verificationUrl && (
            <Button asChild size="lg" className="rounded-2xl shrink-0">
              <a href={certificate.verificationUrl} target="_blank" rel="noopener noreferrer">
                <span>Verify on Issuer Site</span>
                <ExternalLink className="size-4 ml-2" />
              </a>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 text-sm">
          <div>
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block">Awarded</span>
            <span className="font-semibold text-foreground mt-1 block">{certificate.date}</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block">Status</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 mt-1 block">
              {certificate.expiryDate || "Active Lifetime"}
            </span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block">Verification</span>
            <span className="font-semibold text-foreground mt-1 block">Sanctioned</span>
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider block">Trainer</span>
            <span className="font-semibold text-foreground mt-1 block">Siddharth</span>
          </div>
        </div>
      </Card>

      {/* Details & Covered Competencies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <BookOpen className="size-5 text-primary" />
            <span>Curriculum &amp; Standard</span>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {certificate.description}
          </p>
        </Card>

        <Card className="p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <CheckCircle2 className="size-5 text-accent" />
            <span>Assessed Competencies</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-secondary/15 text-primary dark:text-foreground border border-secondary/30 text-xs font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-card border border-border/80 text-center flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold text-foreground">Want to apply these evidence-based principles?</h3>
        <p className="text-sm text-muted-foreground max-w-lg">
          Train under a coach whose credentials represent thousands of hours of academic study and practical clinical application.
        </p>
        <Button asChild size="lg" className="rounded-2xl px-8">
          <Link href="/contact">Inquire About Coaching &rarr;</Link>
        </Button>
      </div>
    </article>
  );
}
