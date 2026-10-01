import { siteConfig, profile } from "@/content/site";

interface StructuredDataProps {
  type?: "website" | "person" | "service";
}

export function StructuredData({ type = "website" }: StructuredDataProps) {
  const websiteSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  const personSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Personal Trainer & Strength Coach",
    description: profile.tagline,
    url: `${siteConfig.url}/about`,
    email: profile.email,
    knowsAbout: profile.specialties,
  };

  const serviceSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: "",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    description: siteConfig.description,
    provider: {
      "@type": "Person",
      name: profile.name,
    },
  };

  let schemaData: Record<string, unknown> = websiteSchema;
  if (type === "person") schemaData = personSchema;
  if (type === "service") schemaData = serviceSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
