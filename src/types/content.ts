export type Plan = {
  id: string;
  slug: string;
  name: string;
  description: string;
  startingPrice: string;
  period: string;
  features: string[];
  recommended?: boolean;
  suitableFor: string;
  deliveryMethod?: string;
  includesNutrition?: boolean;
};

export type Achievement = {
  id: string;
  title: string;
  year: number;
  organization: string;
  category: "Competitive" | "Coaching" | "Honor" | "Education";
  description: string;
  verificationUrl?: string;
};

export type Certificate = {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  credentialId?: string;
  year: number;
  date: string;
  expiryDate?: string;
  description: string;
  verificationUrl?: string;
  skills: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  date: string;
  isVerified: boolean;
  achievementMetric?: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  label: string;
  handle?: string;
  description?: string;
};

export type ApproachCategory = {
  title: string;
  description: string;
  iconName?: string;
};

export type TrainerProfile = {
  name: string;
  tagline: string;
  bio: string;
  philosophy: string;
  email: string;
  experienceYears: number;
  specialties: string[];
  approachCategories: ApproachCategory[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  email: string;
};
