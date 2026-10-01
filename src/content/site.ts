import { SiteConfig, TrainerProfile } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Siddharth Fit",
  description: "Personal training and fitness coaching by Siddharth. Evidence-based programming, progressive overload, and sustainable habit formation.",
  url: "https://siddharthfit.com",
  email: "contact@siddharthfit.com",
};

export const profile: TrainerProfile = {
  name: "Siddharth",
  tagline: "Building physical strength, metabolic resilience, and mental clarity.",
  bio: "[PLACEHOLDER] Siddharth is a certified strength and conditioning coach with over 7 years of hands-on coaching experience. Having worked with corporate executives, competitive athletes, and everyday lifters, his coaching unites exercise biomechanics with sustainable lifestyle engineering.",
  philosophy: "[PLACEHOLDER] Fitness is not an ephemeral 12-week challenge; it is a foundational life practice. We master movement fundamentals, respect recovery biology, and structure progressive adaptation tailored to the human, not a cookie-cutter template.",
  email: siteConfig.email,
  experienceYears: 7,
  specialties: [
    "Hypertrophy & Strength Development",
    "Postural Correction & Biomechanics",
    "Metabolic Conditioning",
    "Sustainable Nutrition & Habit Design",
    "Injury Prevention & Active Longevity",
  ],
  approachCategories: [
    {
      title: "Biomechanical Precision",
      description: "Every movement is calibrated to individual joint kinematics, optimizing muscle stimulus while eliminating joint wear.",
    },
    {
      title: "Progressive Overload",
      description: "Data-tracked progression curves ensure continual physiological adaptation without reckless fatigue accumulation.",
    },
    {
      title: "Nutritional Architecture",
      description: "Macro-balanced, calorie-appropriate guidance built around whole foods and your real daily calendar.",
    },
    {
      title: "Mental Discipline & Accountability",
      description: "Weekly reviews, objective performance markers, and proactive problem-solving to sustain long-term consistency.",
    },
  ],
};
