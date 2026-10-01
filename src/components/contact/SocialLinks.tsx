import { Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { socialLinks } from "@/content/social";
import { siteConfig } from "@/content/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

export function SocialLinks() {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <InstagramIcon className="size-5 text-primary" />;
      case "youtube":
        return <YoutubeIcon className="size-5 text-primary" />;
      case "guardian":
        return <ShieldCheck className="size-5 text-primary" />;
      case "linkedin":
        return <LinkedinIcon className="size-5 text-primary" />;
      default:
        return <Mail className="size-5 text-primary" />;
    }
  };

  const getChannelInfo = (link: { platform: string; label: string }) => {
    if (link.platform.toLowerCase() === "instagram") {
      if (link.label.toLowerCase().includes("life")) {
        return "Mindset & Daily Habits";
      }
      return "Training Execution & Form";
    }
    if (link.platform.toLowerCase() === "youtube") {
      return "Video Breakdowns & Guides";
    }
    if (link.platform.toLowerCase() === "guardian") {
      return "Nutrition & Supplement Store";
    }
    if (link.platform.toLowerCase() === "linkedin") {
      return "Professional Coaching Network";
    }
    return "Inquiry & Consultation";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Direct Email Card */}
      <a
        href={`mailto:${siteConfig.email}`}
        className="group p-5 rounded-3xl bg-card border border-border/80 clay-card clay-card-hover flex items-center justify-between transition-all"
      >
        <div className="flex items-center gap-3.5">
          <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 clay-pill">
            <Mail className="size-5" />
          </div>
          <div>
            <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors block">
              Direct Email
            </span>
            <span className="text-xs text-muted-foreground">Inquiries &amp; Consultations</span>
          </div>
        </div>
        <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </a>

      {/* Social Platforms & Referrals */}
      {socialLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-3xl bg-card border border-border/80 clay-card clay-card-hover flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-3.5">
            <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary clay-pill">
              {getIcon(link.platform)}
            </div>
            <div>
              <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors block">
                {link.label}
              </span>
              <span className="text-xs text-muted-foreground">{getChannelInfo(link)}</span>
            </div>
          </div>
          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      ))}
    </div>
  );
}
