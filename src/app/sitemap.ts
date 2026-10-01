import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { plans } from "@/content/plans";
import { certificates } from "@/content/certificates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/plans",
    "/achievements",
    "/certificates",
    "/testimonials",
    "/contact",
    "/search",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic plan detail routes
  const planRoutes = plans.map((plan) => ({
    url: `${baseUrl}/plans/${plan.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic certificate detail routes
  const certificateRoutes = certificates.map((cert) => ({
    url: `${baseUrl}/certificates/${cert.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...planRoutes, ...certificateRoutes];
}
