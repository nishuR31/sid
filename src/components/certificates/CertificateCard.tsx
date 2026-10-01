import { Certificate } from "@/types/content";
import { GlassCertificateCard } from "@/components/ui/glass/GlassCertificateCard";

interface CertificateCardProps {
  certificate: Certificate;
  className?: string;
}

export function CertificateCard({ certificate, className }: CertificateCardProps) {
  return <GlassCertificateCard certificate={certificate} className={className} />;
}
