"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { achievements } from "@/content/achievements";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Competitive", "Coaching", "Honor", "Education"];

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === "All") return achievements;
    return achievements.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Header */}
        <SectionHeading
          eyebrow="Verified Track Record"
          title="Achievements &amp; Proof"
          description="A verifiable record of athletic competition, coaching leadership, and applied biomechanical study. We do not manufacture accolades."
        />

        {/* Category Filters (Section 28) */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Achievement Categories"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
                    : "liquid-glass text-muted-foreground hover:text-foreground border border-white/40 dark:border-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        {/* Integrity Notice (Section 28) */}
        <div className="liquid-glass-strong p-8 sm:p-10 rounded-3xl border border-white/60 dark:border-white/15 text-center max-w-2xl mx-auto flex flex-col items-center gap-4 shadow-xl">
          <div className="size-12 rounded-full bg-primary/10 text-primary dark:text-sage flex items-center justify-center border border-primary/20">
            <ShieldCheck className="size-6" />
          </div>
          <h3 className="font-bold text-lg text-foreground font-heading">
            Authenticity &amp; Content Integrity Guarantee
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            All athletic totals, competition placements, and coaching milestones presented on this website correspond to sanctioned records or verifiable client cohorts. If you require verification documentation for any item, please contact Siddharth.
          </p>
          <GlassButton asChild variant="primary" size="default" className="mt-2">
            <Link href="/contact">
              <span>Inquire with Siddharth</span>
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </GlassButton>
        </div>
      </Container>
    </div>
  );
}
