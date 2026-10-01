"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Copy, Check, Mail, AlertCircle, ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass/GlassButton";
import { GlassBadge } from "@/components/ui/glass/GlassBadge";
import { siteConfig } from "@/content/site";
import { plans } from "@/content/plans";

export function ContactForm() {
  const searchParams = useSearchParams();
  const planQuery = searchParams.get("plan") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: planQuery ? `Coaching Inquiry: ${planQuery}` : "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || `Coaching Inquiry from ${formData.name}`
    );

    const bodyText = `Hi Siddharth,

My name is ${formData.name}.
Email: ${formData.email}

Message:
${formData.message}

Looking forward to hearing from you.`;

    const body = encodeURIComponent(bodyText);
    const link = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setMailtoUrl(link);
    setSubmitted(true);

    // Section 43: Browser launches email client
    window.location.href = link;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto liquid-glass-strong rounded-3xl p-6 sm:p-10 border border-white/60 dark:border-white/15 shadow-2xl">
      <div className="flex flex-col gap-2 mb-8">
        <GlassBadge variant="sage" size="md" className="w-fit mb-1">
          <Mail className="size-3.5 text-primary dark:text-sage" />
          <span>Direct Contact</span>
        </GlassBadge>
        {/* Section 41 Headings */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-heading">
          Ready to start?
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Tell Siddharth what you&apos;re working toward. We will review your background and map out a concrete coaching trajectory.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs font-bold uppercase tracking-wider text-foreground"
            >
              Name <span className="text-destructive">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="glass-input"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs font-bold uppercase tracking-wider text-foreground"
            >
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="rahul@example.com"
              className="glass-input"
            />
          </div>
        </div>

        {/* Subject (Section 41) */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-subject"
            className="text-xs font-bold uppercase tracking-wider text-foreground"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. 1-on-1 Personal Training Inquiry / Online Strength Coaching"
            className="glass-input"
          />
        </div>

        {/* Message (Section 41) */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-message"
            className="text-xs font-bold uppercase tracking-wider text-foreground"
          >
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell Siddharth about your current training routine, goals, injury history, and schedule..."
            className="glass-input resize-y"
          />
        </div>

        {/* Section 43: Button "Open Email" */}
        <div className="pt-2">
          <GlassButton
            type="submit"
            variant="primary"
            size="lg"
            className="w-full text-base font-semibold shadow-lg"
          >
            <Send className="size-4 mr-2" />
            <span>Open Email</span>
          </GlassButton>
        </div>

        {/* Section 43: Mailto Fallback */}
        {submitted && (
          <div className="p-5 rounded-2xl liquid-glass border-sage/40 dark:border-primary/40 flex flex-col gap-3 text-sm animate-in fade-in-50 duration-200">
            <div className="flex items-start gap-2.5 text-foreground font-semibold">
              <Check className="size-5 text-primary dark:text-sage shrink-0" />
              <span>Email client launched!</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your email application didn&apos;t open? Copy Siddharth&apos;s email address to write directly:
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <GlassButton
                type="button"
                variant="secondary"
                size="sm"
                onClick={copyEmail}
              >
                {copied ? (
                  <Check className="size-3.5 text-primary dark:text-sage" />
                ) : (
                  <Copy className="size-3.5" />
                )}
                <span>{copied ? "Copied Email!" : "Copy Siddharth's Email"}</span>
              </GlassButton>

              {mailtoUrl && (
                <a
                  href={mailtoUrl}
                  className="text-xs text-primary dark:text-sage font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Launch email client again</span>
                  <ArrowRight className="size-3" />
                </a>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-1">
          <AlertCircle className="size-3.5 shrink-0" />
          <span>
            Direct private communication. Siddharth typically responds within 24 business hours.
          </span>
        </div>
      </form>
    </div>
  );
}
