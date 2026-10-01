"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, X, Target, FileCheck2, Award, MessageSquare, Compass, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";
import { testimonials } from "@/content/testimonials";

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Plan" | "Certificate" | "Achievement" | "Story" | "Page";
  url: string;
  keywords: string[];
}

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const suggestionChips = [
    { label: "Strength", query: "strength" },
    { label: "1-on-1 Training", query: "1-on-1" },
    { label: "Online Protocol", query: "online" },
    { label: "CSCS Credential", query: "cscs" },
    { label: "565kg Total", query: "565kg" },
    { label: "Nutrition & Diet", query: "nutrition" },
    { label: "Transformations", query: "transformations" },
  ];

  const searchIndex: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [
      {
        id: "p-home",
        title: "Home & Coaching Overview",
        subtitle: "Siddharth Fit overview, training philosophy, and trust indicators",
        category: "Page",
        url: "/",
        keywords: ["home", "main", "overview", "philosophy", "siddharth", "coach"],
      },
      {
        id: "p-about",
        title: "About Siddharth & Ethos",
        subtitle: "Biography, 7+ years background, credentials, and coaching philosophy",
        category: "Page",
        url: "/about",
        keywords: ["about", "bio", "experience", "coach", "background", "philosophy"],
      },
      {
        id: "p-plans",
        title: "Coaching Programs & Pricing",
        subtitle: "Online coaching, 1-on-1 personal training, and custom consultations",
        category: "Page",
        url: "/plans",
        keywords: ["plans", "pricing", "cost", "rates", "programs", "tiers"],
      },
      {
        id: "p-achievements",
        title: "Competition Achievements",
        subtitle: "Competitive awards, 565kg total, coaching milestones",
        category: "Page",
        url: "/achievements",
        keywords: ["achievements", "records", "medals", "powerlifting", "silver", "gold"],
      },
      {
        id: "p-certificates",
        title: "Professional Certifications",
        subtitle: "NSCA-CSCS, ACE-CPT, Precision Nutrition credentials",
        category: "Page",
        url: "/certificates",
        keywords: ["certificates", "credentials", "cscs", "ace", "pn1", "accreditation"],
      },
      {
        id: "p-testimonials",
        title: "Client Stories & Reviews",
        subtitle: "Verified client results, pain-free posture transformations",
        category: "Page",
        url: "/testimonials",
        keywords: ["reviews", "testimonials", "stories", "transformations", "results"],
      },
      {
        id: "p-contact",
        title: "Contact & Intake Form",
        subtitle: "Direct intake application, free consultation, and email inquiry",
        category: "Page",
        url: "/contact",
        keywords: ["contact", "email", "apply", "book", "hire", "consultation", "message"],
      },
    ];

    plans.forEach((p) => {
      items.push({
        id: `plan-${p.id}`,
        title: p.name,
        subtitle: `${p.startingPrice} ${p.period} — ${p.description}`,
        category: "Plan",
        url: `/plans/${p.slug}`,
        keywords: [p.name.toLowerCase(), p.description.toLowerCase(), ...p.features.map((f) => f.toLowerCase())],
      });
    });

    certificates.forEach((c) => {
      items.push({
        id: `cert-${c.id}`,
        title: c.title,
        subtitle: `${c.issuer} (${c.year}) — ${c.skills.join(", ")}. ${c.description}`,
        category: "Certificate",
        url: `/certificates/${c.slug}`,
        keywords: [c.title.toLowerCase(), c.issuer.toLowerCase(), ...c.skills.map((s) => s.toLowerCase())],
      });
    });

    achievements.forEach((a) => {
      items.push({
        id: `achieve-${a.id}`,
        title: a.title,
        subtitle: `${a.organization} (${a.year}) — ${a.description}`,
        category: "Achievement",
        url: "/achievements",
        keywords: [a.title.toLowerCase(), a.organization.toLowerCase(), a.category.toLowerCase()],
      });
    });

    testimonials.forEach((t) => {
      items.push({
        id: `test-${t.id}`,
        title: `${t.name} (${t.role})`,
        subtitle: `${t.achievementMetric || ""} — ${t.quote}`,
        category: "Story",
        url: "/testimonials",
        keywords: [t.name.toLowerCase(), t.role.toLowerCase(), t.quote.toLowerCase(), t.achievementMetric?.toLowerCase() || ""],
      });
    });

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    let results = searchIndex;

    if (selectedCategory !== "All") {
      results = results.filter((item) => item.category === selectedCategory);
    }

    const raw = query.trim().toLowerCase();
    if (raw) {
      const tokens = raw.replace(/[^\w\s-]/g, " ").split(/\s+/).filter(Boolean);
      results = results.filter((item) => {
        const searchTarget = [
          item.title.toLowerCase(),
          item.subtitle.toLowerCase(),
          item.category.toLowerCase(),
          ...item.keywords,
        ].join(" ");
        return tokens.every((token) => searchTarget.includes(token));
      });
    }

    return results;
  }, [query, selectedCategory, searchIndex]);

  const categories = ["All", "Plan", "Certificate", "Achievement", "Story", "Page"];

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "Plan":
        return <Target className="size-5 text-emerald-500 dark:text-emerald-400" />;
      case "Certificate":
        return <FileCheck2 className="size-5 text-sky-500 dark:text-sky-400" />;
      case "Achievement":
        return <Award className="size-5 text-amber-500 dark:text-amber-400" />;
      case "Story":
        return <MessageSquare className="size-5 text-purple-500 dark:text-purple-400" />;
      default:
        return <Compass className="size-5 text-muted-foreground" />;
    }
  };

  const getCategoryBadge = (category: SearchItem["category"]) => {
    switch (category) {
      case "Plan":
        return (
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shrink-0">
            Plan
          </span>
        );
      case "Certificate":
        return (
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/25 shrink-0">
            Certificate
          </span>
        );
      case "Achievement":
        return (
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25 shrink-0">
            Achievement
          </span>
        );
      case "Story":
        return (
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/25 shrink-0">
            Story
          </span>
        );
      default:
        return (
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/70 shrink-0">
            Page
          </span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Input Box */}
      <div className="clay-card p-3 sm:p-4 rounded-3xl bg-card border border-border/80 shadow-lg flex items-center gap-3 mb-3">
        <Search className="size-6 text-muted-foreground shrink-0 ml-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keywords (e.g. strength, CSCS, online, powerlifting, nutrition)..."
          className="flex-1 bg-transparent text-base sm:text-lg text-foreground placeholder:text-muted-foreground outline-none font-medium"
          autoFocus
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer clay-pill transition-colors"
            aria-label="Clear search query"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      {/* Popular Suggestion Chips */}
      <div className="flex flex-wrap items-center gap-1.5 mb-6 px-1">
        <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-1">
          <Sparkles className="size-3 text-primary" /> Suggestions:
        </span>
        {suggestionChips.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onClick={() => setQuery(chip.query)}
            className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/15 hover:bg-secondary/30 text-foreground border border-border/60 hover:border-primary/40 clay-pill transition-all cursor-pointer active:scale-95"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer clay-pill ${
                isSelected
                  ? "bg-primary text-primary-foreground font-bold shadow-xs border-transparent scale-105"
                  : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {cat === "All" ? "All Results" : cat + "s"}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4 px-1">
        Showing {filteredItems.length} result{filteredItems.length === 1 ? "" : "s"}
      </div>

      {/* Results List */}
      <div className="flex flex-col gap-3">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-card border border-border/70 text-muted-foreground flex flex-col items-center gap-2">
            <Compass className="size-10 text-muted-foreground/50 mb-1" />
            <p className="text-base font-semibold text-foreground">No matches found for &ldquo;{query}&rdquo;</p>
            <p className="text-sm">Try broader keywords or reset the category filter.</p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="clay-card p-4 sm:p-5 rounded-3xl bg-card border border-border/80 clay-card-hover group flex items-start justify-between gap-4 transition-all"
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className="p-2.5 rounded-2xl bg-card border border-border/80 shrink-0 clay-pill mt-0.5">
                  {getCategoryIcon(item.category)}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {getCategoryBadge(item.category)}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-2" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Content Explorer"
          title="Search Siddharth Fit"
          description="Instant discovery across all programs, credentials, competition records, and client transformation reviews."
        />

        <Suspense
          fallback={
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="h-14 rounded-3xl bg-muted/40 animate-pulse" />
              <div className="h-24 rounded-3xl bg-muted/30 animate-pulse" />
              <div className="h-24 rounded-3xl bg-muted/30 animate-pulse" />
            </div>
          }
        >
          <SearchContent />
        </Suspense>
      </Container>
    </div>
  );
}
