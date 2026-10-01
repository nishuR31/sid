import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Certificate } from "@/types/content";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant="secondary" className="font-mono text-[11px]">
            {certificate.credentialId || "Verified Credential"}
          </Badge>
          <span className="text-xs font-semibold text-muted-foreground">
            {certificate.year}
          </span>
        </div>

        <CardTitle className="text-xl sm:text-2xl font-bold leading-snug">
          {certificate.title}
        </CardTitle>

        <p className="text-xs font-semibold text-primary">
          {certificate.issuer}
        </p>
      </CardHeader>

      <CardContent className="pt-0 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {certificate.description}
        </p>

        {certificate.skills && certificate.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-muted text-muted-foreground border border-border/60"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-4 border-t border-border/60 flex items-center justify-between">
        <Link
          href={`/certificates/${certificate.slug}`}
          className="text-xs font-semibold text-primary hover:text-primary-light inline-flex items-center gap-1 group py-1"
        >
          <span>View certificate record</span>
          <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {certificate.verificationUrl && (
          <a
            href={certificate.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            title="External official verification"
          >
            <span>Verify</span>
            <ExternalLink className="size-3" />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
