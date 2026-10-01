import Link from "next/link";
import { siteConfig, profile } from "@/content/site";
import { socialLinks } from "@/content/social";
import { plans } from "@/content/plans";
import { ArrowUpRight, Mail, ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass/GlassButton";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* Section 44: Dark glass / charcoal environment, Peak-End Rule */
    <footer className="mt-auto pt-16 pb-12 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#07120F] text-[#F2F6F3] border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Soft Ambient Green Glow in the dark footer */}
        <div
          className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Feature CTA Banner (Peak-End Rule: Section 44 & 81) */}
        <div className="relative z-10 pb-12 mb-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#76B99D] block mb-2">
              Next Step
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Ready to build enduring strength?
            </h3>
            <p className="text-sm text-[#AABBB3] mt-2">
              No cookie-cutter routines. Personalized programming tailored to your anatomy and real calendar.
            </p>
          </div>

          <GlassButton asChild variant="primary" size="lg" className="shrink-0 bg-[#76B99D] text-[#07120F] hover:bg-[#8BD0B3]">
            <Link href="/contact">
              <span>Start a conversation</span>
              <ArrowRight className="size-4 ml-1" />
            </Link>
          </GlassButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12 relative z-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading font-extrabold text-2xl tracking-tight text-white group"
            >
              <div className="size-9 rounded-full bg-[#76B99D] text-[#07120F] flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                SF
              </div>
              <span className="tracking-tight">
                Siddharth <span className="font-light text-[#76B99D]">Fit</span>
              </span>
            </Link>

            <p className="text-[#AABBB3] text-sm leading-relaxed max-w-sm">
              {profile.tagline} Evidence-based strength coaching, biomechanical longevity, and sustainable habit periodization.
            </p>

            <div className="flex flex-col gap-1.5 pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#73857D]">
                Direct Consultation
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-semibold text-[#76B99D] hover:underline transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="size-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Explore</h4>
            <nav className="flex flex-col gap-2.5 text-sm" aria-label="Footer Explore">
              <Link href="/about" className="text-[#AABBB3] hover:text-white transition-colors">
                About Siddharth
              </Link>
              <Link href="/plans" className="text-[#AABBB3] hover:text-white transition-colors">
                Coaching Plans
              </Link>
              <Link href="/achievements" className="text-[#AABBB3] hover:text-white transition-colors">
                Proof &amp; Records
              </Link>
              <Link href="/certificates" className="text-[#AABBB3] hover:text-white transition-colors">
                Certifications
              </Link>
              <Link href="/testimonials" className="text-[#AABBB3] hover:text-white transition-colors">
                Client Outcomes
              </Link>
              <Link href="/contact" className="text-[#AABBB3] hover:text-white transition-colors">
                Contact Coach
              </Link>
            </nav>
          </div>

          {/* Coaching Programs */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Programs</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {plans.map((plan) => (
                <Link
                  key={plan.id}
                  href={`/plans/${plan.slug}`}
                  className="text-[#AABBB3] hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="truncate">{plan.name}</span>
                  <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <Link
                href="/contact?type=custom"
                className="text-[#76B99D] font-medium hover:underline pt-1 text-xs inline-flex items-center gap-1"
              >
                <span>Discuss Custom Coaching</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Connect & Social (Section 40) */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white">Connect</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AABBB3] hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-3.5 text-[#73857D] group-hover:text-[#76B99D] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#73857D] relative z-10">
          <div className="flex flex-col gap-2 max-w-2xl text-center md:text-left">
            <p className="leading-relaxed">
              <strong>Ethical Notice:</strong> Siddharth Fit is an evidence-based athletic coaching practice. Outcomes depend on individual biomechanics, adherence, and nutritional consistency.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
              <Link href="/legal#privacy" className="hover:text-white transition-colors underline">
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/legal#terms" className="hover:text-white transition-colors underline">
                Terms &amp; Coaching Disclaimer
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/settings" className="hover:text-white transition-colors underline">
                Accessibility
              </Link>
            </div>
          </div>
          <p className="shrink-0 text-center md:text-right">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
