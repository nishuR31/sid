import { Metadata } from "next";
import { notFound } from "next/navigation";
import { plans } from "@/content/plans";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { PlanDetail } from "@/components/plans/PlanDetail";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return plans.map((plan) => ({
    slug: plan.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const plan = plans.find((p) => p.slug === slug);

  if (!plan) {
    return {
      title: "Plan Not Found",
    };
  }

  return {
    title: `${plan.name} — Coaching Plan`,
    description: plan.description,
    alternates: {
      canonical: `/plans/${plan.slug}`,
    },
    openGraph: {
      title: `${plan.name} | ${siteConfig.name}`,
      description: plan.description,
      url: `${siteConfig.url}/plans/${plan.slug}`,
    },
  };
}

export default async function PlanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const plan = plans.find((p) => p.slug === slug);

  if (!plan) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <Container size="small">
        <PlanDetail plan={plan} />
      </Container>
    </div>
  );
}
