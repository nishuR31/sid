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
  bio: "Siddharth is a certified strength and conditioning specialist with over 7 years of hands-on coaching experience. Having coached competitive athletes, corporate executives, and everyday lifters, his methodology unites evidence-based exercise biomechanics with sustainable lifestyle engineering.",
  philosophy: "Fitness is not an extreme 12-week challenge; it is a lifelong physical discipline. We master foundational movement mechanics, respect recovery biology, and structure progressive overload tailored to the human, not a generic template.",
  email: siteConfig.email,
  experienceYears: 7,
  images: {
    hero: "/images/siddharth-hero.jpg",
    coaching: "/images/siddharth-coaching.jpg",
    strength: "/images/siddharth-strength.jpg",
  },
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
