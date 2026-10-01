import { Metadata } from "next";
import { notFound } from "next/navigation";
import { certificates } from "@/content/certificates";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { CertificateDetail } from "@/components/certificates/CertificateDetail";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return certificates.map((cert) => ({
    slug: cert.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    return {
      title: "Certificate Not Found",
    };
  }

  return {
    title: certificate.title,
    description: certificate.description.slice(0, 160),
    alternates: {
      canonical: `/certificates/${certificate.slug}`,
    },
    openGraph: {
      title: `${certificate.title} | ${siteConfig.name}`,
      description: certificate.description.slice(0, 160),
      url: `${siteConfig.url}/certificates/${certificate.slug}`,
    },
  };
}

export default async function CertificateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <Container size="small">
        <CertificateDetail certificate={certificate} />
      </Container>
    </div>
  );
}
