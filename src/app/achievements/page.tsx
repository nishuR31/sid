"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { achievements } from "@/content/achievements";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { Button } from "@/components/ui/button";

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Competitive", "Coaching", "Honor", "Education"];

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === "All") return achievements;
    return achievements.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <SectionHeading
          eyebrow="Verified Track Record"
          title="Achievements &amp; Honors"
          description="A verifiable record of athletic competition, coaching leadership, and applied biomechanical study. We do not manufacture accolades."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12" role="tablist" aria-label="Achievement Categories">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`px-4.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer clay-pill ${
                  isSelected
                    ? "bg-primary text-primary-foreground font-bold shadow-xs scale-105 border-transparent"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border/70"
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

        {/* Integrity Notice */}
        <div className="clay-card p-8 sm:p-10 rounded-3xl border border-border/80 text-center max-w-2xl mx-auto flex flex-col items-center gap-4 bg-card">
          <div className="size-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center clay-pill border border-primary/20">
            <ShieldCheck className="size-5" />
          </div>
          <h3 className="font-bold text-lg text-foreground">Content Integrity Guarantee</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            All athletic totals, competition placements, and coaching milestones presented on this website correspond to sanctioned records or verifiable client cohorts. If you require verification documentation for any item, please contact Siddharth.
          </p>
          <Button asChild variant="outline" size="sm" className="rounded-2xl mt-2">
            <Link href="/contact">Inquire with Siddharth &rarr;</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
