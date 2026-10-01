"use client";

import * as React from "react";
import Link from "next/link";
import { Award, ShieldCheck, ExternalLink, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Certificate } from "@/types/content";
import { GlassButton } from "./GlassButton";
import { GlassBadge } from "./GlassBadge";

export function GlassCertificateCard({
  certificate,
  className,
}: {
  certificate: Certificate;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group liquid-glass rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/40",
        className
      )}
    >
      {/* Authentic Certificate Document Visual Canvas (Section 31 & 92) */}
      <div className="relative aspect-[1.414/1] w-full bg-gradient-to-br from-[#FAF8F5] to-[#EFEBE4] dark:from-[#0E1F1A] dark:to-[#071310] p-6 sm:p-7 flex flex-col justify-between border-b border-border/50 overflow-hidden">
        {/* Environmental Watermark Crest */}
        <div
          className="absolute -right-8 -bottom-8 size-40 sm:size-48 opacity-[0.06] dark:opacity-[0.08] pointer-events-none select-none text-primary"
          aria-hidden="true"
        >
          <Award className="size-full" />
        </div>

        {/* Certificate Decorative Border */}
        <div className="absolute inset-3 border border-primary/20 dark:border-primary/30 rounded-2xl pointer-events-none" />
        <div className="absolute inset-4 border border-dashed border-primary/15 dark:border-primary/20 rounded-xl pointer-events-none" />

        {/* Top Header of Document */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary dark:text-sage" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-primary/80 dark:text-sage/80 uppercase">
              Official Credential
            </span>
          </div>
          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:text-sage">
            {certificate.year}
          </span>
        </div>

        {/* Center Title & Recipient */}
        <div className="relative z-10 my-auto text-center py-2">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold block mb-1">
            This Certifies That
          </span>
          <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#10231E] dark:text-[#F2F6F3] tracking-tight">
            Siddharth
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-primary dark:text-sage mt-1">
            {certificate.title}
          </p>
          <span className="text-[11px] text-muted-foreground block mt-1">
            Issued by {certificate.issuer}
          </span>
        </div>

        {/* Bottom Seal & Credential ID */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-primary/10 text-[10px] sm:text-[11px] text-muted-foreground font-mono">
          <div>
            <span className="block font-medium">ID: {certificate.credentialId || "VERIFIED"}</span>
            <span className="text-[9px] text-muted-foreground/70">{certificate.date}</span>
          </div>
          <div className="flex items-center gap-1 text-primary dark:text-sage font-bold">
            <CheckCircle className="size-3.5 fill-primary/20" />
            <span>Accredited</span>
          </div>
        </div>

        {/* Glass Reflection Sheen on Hover */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Metadata & Actions (Section 30-31) */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="font-bold text-base sm:text-lg text-foreground tracking-tight mb-2">
            {certificate.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {certificate.description}
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-1.5">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-primary/5 text-secondary dark:text-sage border border-primary/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-border/40 flex items-center justify-between">
          <Link
            href={`/certificates/${certificate.slug}`}
            className="text-xs font-semibold text-primary dark:text-sage hover:underline inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            <span>View Full Details</span>
            <span>→</span>
          </Link>

          {certificate.verificationUrl && (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              title="Verify credential on issuing body registry"
            >
              <span>Verify Registry</span>
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
