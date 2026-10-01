"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  Award,
  FileCheck2,
  Target,
  MessageSquare,
  Compass,
  Sparkles,
} from "lucide-react";
import { plans } from "@/content/plans";
import { certificates } from "@/content/certificates";
import { achievements } from "@/content/achievements";
import { testimonials } from "@/content/testimonials";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Plan" | "Certificate" | "Achievement" | "Story" | "Page";
  url: string;
  keywords: string[];
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Comprehensive static index with rich searchable keywords
  const searchIndex: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [
      {
        id: "rec-plan-1",
        title: "1-on-1 In-Person Training",
        subtitle: "Comprehensive movement evaluation, in-gym form coaching, and progressive overload",
        category: "Plan",
        url: "/plans/personal-training",
        keywords: [
          "1-on-1",
          "1 on 1",
          "one on one",
          "in person",
          "personal training",
          "gym",
          "coach",
          "private",
          "squat",
          "bench",
          "deadlift",
          "technique",
          "hypertrophy",
          "strength",
        ],
      },
      {
        id: "rec-plan-2",
        title: "Online Coaching Protocol",
        subtitle: "Global asynchronous video analysis, customized periodization, and weekly tracking",
        category: "Plan",
        url: "/plans/online-coaching",
        keywords: [
          "online",
          "remote",
          "coaching",
          "programming",
          "periodization",
          "video analysis",
          "form review",
          "custom plan",
          "macros",
          "nutrition",
          "global",
        ],
      },
      {
        id: "rec-plan-3",
        title: "Form & Biomechanics Consultation",
        subtitle: "One-off virtual technical audit and injury prevention breakdown for main lifts",
        category: "Plan",
        url: "/plans/form-consultation",
        keywords: [
          "form check",
          "consultation",
          "biomechanics",
          "movement",
          "technique audit",
          "injury prevention",
          "rehab",
          "posture",
          "mobility",
        ],
      },
      {
        id: "rec-cert-1",
        title: "NSCA-CSCS Certification",
        subtitle: "Certified Strength and Conditioning Specialist — gold-standard biomechanics",
        category: "Certificate",
        url: "/certificates/nsca-cscs",
        keywords: [
          "cscs",
          "nsca",
          "strength and conditioning",
          "certified",
          "specialist",
          "biomechanics",
          "accredited",
          "exercise science",
        ],
      },
      {
        id: "rec-cert-2",
        title: "ACE Certified Personal Trainer",
        subtitle: "American Council on Exercise — functional movement and injury prevention",
        category: "Certificate",
        url: "/certificates/ace-cpt",
        keywords: [
          "ace",
          "cpt",
          "personal trainer",
          "american council on exercise",
          "functional movement",
          "certified",
        ],
      },
      {
        id: "rec-cert-3",
        title: "Precision Nutrition Level 1 (Pn1)",
        subtitle: "Evidence-based sports nutrition, macronutrient periodization, and habit coaching",
        category: "Certificate",
        url: "/certificates/precision-nutrition-pn1",
        keywords: [
          "precision nutrition",
          "pn1",
          "nutrition",
          "diet",
          "macros",
          "calories",
          "fat loss",
          "meal planning",
          "weight loss",
        ],
      },
      {
        id: "rec-achieve-1",
        title: "565kg Sanctioned Total",
        subtitle: "National Powerlifting Championship silver medal performance",
        category: "Achievement",
        url: "/achievements",
        keywords: [
          "565kg",
          "565",
          "total",
          "powerlifting",
          "national",
          "silver medal",
          "competition",
          "squat",
          "bench press",
          "deadlift",
          "record",
        ],
      },
      {
        id: "rec-achieve-2",
        title: "State Powerlifting Championship Gold",
        subtitle: "First place overall in the -83kg open division",
        category: "Achievement",
        url: "/achievements",
        keywords: [
          "gold medal",
          "state championship",
          "first place",
          "83kg",
          "champion",
          "powerlifting",
        ],
      },
      {
        id: "rec-story-1",
        title: "Verified Client Transformations",
        subtitle: "Real client results, pain-free posture restoration, and sustainable health habits",
        category: "Story",
        url: "/testimonials",
        keywords: [
          "reviews",
          "testimonials",
          "client stories",
          "results",
          "transformations",
          "before and after",
          "back pain",
          "fat loss",
        ],
      },
      {
        id: "p-about",
        title: "About Siddharth & Ethos",
        subtitle: "7+ years background, competitive history, and evidence-based training principles",
        category: "Page",
        url: "/about",
        keywords: [
          "about",
          "siddharth",
          "biography",
          "bio",
          "background",
          "experience",
          "philosophy",
          "ethos",
          "coach",
        ],
      },
      {
        id: "p-contact",
        title: "Contact & Intake Consultation",
        subtitle: "Direct intake application, free consultation, and inquiry form",
        category: "Page",
        url: "/contact",
        keywords: [
          "contact",
          "email",
          "apply",
          "book",
          "hire",
          "consultation",
          "inquiry",
          "message",
        ],
      },
      {
        id: "p-plans",
        title: "All Coaching Programs",
        subtitle: "Explore pricing, tiers, and personalized training packages",
        category: "Page",
        url: "/plans",
        keywords: [
          "plans",
          "pricing",
          "programs",
          "cost",
          "rates",
          "tiers",
          "packages",
        ],
      },
    ];

    // Add remaining plans
    plans.forEach((p) => {
      if (!items.some((i) => i.id === `plan-${p.id}`)) {
        items.push({
          id: `plan-${p.id}`,
          title: p.name,
          subtitle: `${p.startingPrice} ${p.period} — ${p.description}`,
          category: "Plan",
          url: `/plans/${p.slug}`,
          keywords: [p.name.toLowerCase(), p.description.toLowerCase(), ...p.features.map((f) => f.toLowerCase())],
        });
      }
    });

    // Add remaining certificates
    certificates.forEach((c) => {
      if (!items.some((i) => i.id === `cert-${c.id}`)) {
        items.push({
          id: `cert-${c.id}`,
          title: c.title,
          subtitle: `${c.issuer} (${c.year}) — ${c.skills.join(", ")}`,
          category: "Certificate",
          url: `/certificates/${c.slug}`,
          keywords: [c.title.toLowerCase(), c.issuer.toLowerCase(), ...c.skills.map((s) => s.toLowerCase())],
        });
      }
    });

    // Add remaining achievements
    achievements.forEach((a) => {
      if (!items.some((i) => i.id === `achieve-${a.id}`)) {
        items.push({
          id: `achieve-${a.id}`,
          title: a.title,
          subtitle: `${a.organization} (${a.year})`,
          category: "Achievement",
          url: "/achievements",
          keywords: [a.title.toLowerCase(), a.organization.toLowerCase(), a.category.toLowerCase()],
        });
      }
    });

    // Add testimonials
    testimonials.forEach((t) => {
      items.push({
        id: `test-${t.id}`,
        title: `${t.name} (${t.role})`,
        subtitle: t.quote.slice(0, 95) + "...",
        category: "Story",
        url: "/testimonials",
        keywords: [t.name.toLowerCase(), t.role.toLowerCase(), t.quote.toLowerCase(), t.achievementMetric?.toLowerCase() || ""],
      });
    });

    return items;
  }, []);

  // Curated default suggestions when query is empty: diverse, high-value pathways
  const defaultSuggestions = useMemo(() => {
    return searchIndex.slice(0, 7);
  }, [searchIndex]);

  // Suggestion tags for one-click discovery
  const suggestionChips = [
    { label: "Strength", query: "strength" },
    { label: "1-on-1", query: "1-on-1" },
    { label: "Online Coaching", query: "online" },
    { label: "CSCS Credential", query: "cscs" },
    { label: "565kg Total", query: "565kg" },
    { label: "Nutrition", query: "nutrition" },
    { label: "Client Results", query: "transformations" },
  ];

  // Tokenized, fuzzy query filtering
  const filteredItems = useMemo(() => {
    const raw = query.trim().toLowerCase();
    if (!raw) {
      return defaultSuggestions;
    }

    // Split search input into tokens to support multi-term queries (e.g. "1 on 1 coaching")
    const tokens = raw.replace(/[^\w\s-]/g, " ").split(/\s+/).filter(Boolean);

    return searchIndex.filter((item) => {
      const searchTarget = [
        item.title.toLowerCase(),
        item.subtitle.toLowerCase(),
        item.category.toLowerCase(),
        ...item.keywords,
      ].join(" ");

      return tokens.every((token) => searchTarget.includes(token));
    });
  }, [query, searchIndex, defaultSuggestions]);

  // Focus input dynamically on next animation frame
  useEffect(() => {
    if (isOpen) {
      const frame = requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isOpen]);

  // Scroll active item into view smoothly when navigating with keyboard
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement | undefined;
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  // Handle keyboard events (Escape, Arrows, Enter)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        router.push(filteredItems[selectedIndex].url);
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
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

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "Plan":
        return <Target className="size-4 text-emerald-500 dark:text-emerald-400" />;
      case "Certificate":
        return <FileCheck2 className="size-4 text-sky-500 dark:text-sky-400" />;
      case "Achievement":
        return <Award className="size-4 text-amber-500 dark:text-amber-400" />;
      case "Story":
        return <MessageSquare className="size-4 text-purple-500 dark:text-purple-400" />;
      default:
        return <Compass className="size-4 text-muted-foreground" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search site content"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-background/80 backdrop-blur-md animate-in fade-in-50 duration-150"
    >
      <div
        className="fixed inset-0"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="liquid-glass-strong relative w-full max-w-xl border border-white/60 dark:border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-border/80 gap-3">
          <Search className="size-5 text-muted-foreground shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search plans, credentials, records, or topics..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base font-medium"
            aria-autocomplete="list"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setSelectedIndex(0);
              }}
              className="p-1 text-muted-foreground hover:text-foreground rounded-lg cursor-pointer transition-colors"
              aria-label="Clear search input"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="text-xs px-2.5 py-1 liquid-glass rounded-lg text-muted-foreground hover:text-foreground font-mono cursor-pointer transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2.5 flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-b border-border/50 bg-white/20 dark:bg-black/20">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground shrink-0 flex items-center gap-1 mr-1">
            <Sparkles className="size-3 text-primary dark:text-sage" /> Popular:
          </span>
          {suggestionChips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => {
                setQuery(chip.query);
                setSelectedIndex(0);
              }}
              className="px-3 py-1 rounded-full liquid-glass hover:liquid-glass-strong text-xs font-semibold text-foreground transition-all shrink-0 cursor-pointer border border-white/40 dark:border-white/10"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Section Label */}
        <div className="px-4 pt-3 pb-1 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          <span>{query.trim() ? "Search Results" : "Suggested Pathways"}</span>
          <span className="text-[10px] font-normal lowercase">
            {filteredItems.length} {filteredItems.length === 1 ? "result" : "results"}
          </span>
        </div>

        {/* Results List without ugly browser scrollbars */}
        <div
          ref={listRef}
          className="overflow-y-auto p-2 space-y-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex-1"
          role="listbox"
        >
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm flex flex-col items-center gap-2">
              <Compass className="size-8 text-muted-foreground/50 mb-1" />
              <p className="font-semibold text-foreground">No matches found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs">Try searching for &ldquo;coaching&rdquo;, &ldquo;1-on-1&rdquo;, &ldquo;CSCS&rdquo;, or &ldquo;strength&rdquo;.</p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => {
                    router.push(item.url);
                    handleClose();
                  }}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? "liquid-glass-strong text-foreground border border-primary/40 shadow-xs translate-x-1"
                      : "hover:bg-white/30 dark:hover:bg-white/5 text-foreground/80 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-xl liquid-glass shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm truncate text-foreground">
                          {item.title}
                        </span>
                        {getCategoryBadge(item.category)}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`size-4 shrink-0 ml-2 transition-transform ${
                      isSelected ? "text-primary translate-x-1" : "text-muted-foreground/60"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer keyboard guide */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-t border-border/80 text-[11px] text-muted-foreground font-medium">
          <div className="flex items-center gap-3">
            <span>Use ↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>ESC to close</span>
          </div>
          <button
            onClick={() => {
              router.push(`/search?q=${encodeURIComponent(query)}`);
              handleClose();
            }}
            className="hover:text-primary transition-colors underline cursor-pointer"
          >
            Open full search page
          </button>
        </div>
      </div>
    </div>
  );
}
