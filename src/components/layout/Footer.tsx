import Link from "next/link";
import { siteConfig, profile } from "@/content/site";
import { socialLinks } from "@/content/social";
import { plans } from "@/content/plans";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto pt-10 pb-12 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl clay-card rounded-3xl p-8 sm:p-12 lg:p-14 border border-border/80 bg-card text-card-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 font-heading font-extrabold text-2xl tracking-tight text-foreground">
              <div className="size-9 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground clay-pill shadow-xs">
                <span className="font-bold text-lg leading-none">S</span>
              </div>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {profile.tagline} Evidence-based strength coaching, biomechanical longevity, and sustainable habit periodization.
            </p>
            <div className="flex flex-col gap-1.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Direct Consultation</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-semibold text-primary hover:text-primary-light transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="size-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-foreground">Explore</h3>
            <nav className="flex flex-col gap-2.5 text-sm" aria-label="Footer Explore">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Siddharth
              </Link>
              <Link href="/plans" className="text-muted-foreground hover:text-foreground transition-colors">
                Coaching Plans
              </Link>
              <Link href="/achievements" className="text-muted-foreground hover:text-foreground transition-colors">
                Achievements
              </Link>
              <Link href="/certificates" className="text-muted-foreground hover:text-foreground transition-colors">
                Certifications
              </Link>
              <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Client Stories
              </Link>
              <Link href="/search" className="text-muted-foreground hover:text-foreground transition-colors">
                Search Site
              </Link>
            </nav>
          </div>

          {/* Coaching Programs */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-foreground">Coaching Plans</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              {plans.map((plan) => (
                <Link
                  key={plan.id}
                  href={`/plans/${plan.slug}`}
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">{plan.name}</span>
                  <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-primary font-medium hover:underline pt-1 text-xs"
              >
                Request Custom Plan &rarr;
              </Link>
            </div>
          </div>

          {/* Connect & Social */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-foreground">Connect</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-2 px-4 py-2.5 rounded-2xl bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold clay-pill border border-primary/20 transition-all"
              >
                Book Intake Call
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-6 border-t border-border/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="max-w-2xl text-balance text-center md:text-left">
            <strong>Disclaimer:</strong> {siteConfig.name} is an informational portfolio. No direct online transactions or fitness guarantees are processed via this website. All coaching agreements, assessments, and onboarding are conducted externally.
          </p>
          <p className="shrink-0">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
