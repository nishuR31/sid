"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Copy, Check, AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";
import { plans } from "@/content/plans";

export function ContactForm() {
  const searchParams = useSearchParams();
  const planQuery = searchParams.get("plan") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: planQuery,
    goals: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Coaching Inquiry: ${formData.plan || "General"} — from ${formData.name}`
    );

    const bodyText = `Hi Siddharth,

My name is ${formData.name}.
Email: ${formData.email}
Interested Plan: ${formData.plan || "Custom / Undecided"}
Primary Fitness Goals: ${formData.goals}

Message:
${formData.message}

Looking forward to hearing from you.`;

    const body = encodeURIComponent(bodyText);
    const link = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setMailtoUrl(link);
    setSubmitted(true);

    // Trigger user's email client
    window.location.href = link;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border border-border/80 shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-primary mb-1">
          <Mail className="size-4" />
          <span>Direct Lead Intake</span>
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold">
          Send a Coaching Inquiry
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Fill out your details below. Your submission will open your local email client with your answers cleanly formatted.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-foreground">
                Your Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-foreground">
                Email Address <span className="text-destructive">*</span>
              </label>
              <Input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
              />
            </div>
          </div>

          {/* Plan Selection */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-plan" className="text-xs font-bold uppercase tracking-wider text-foreground">
              Interested Coaching Program
            </label>
            <select
              id="contact-plan"
              value={formData.plan}
              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
              className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary clay-input transition-all"
            >
              <option value="">Select a program (or custom)...</option>
              {plans.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name} ({p.startingPrice} / {p.period})
                </option>
              ))}
              <option value="Custom Coaching">Custom Tailored Coaching</option>
              <option value="Undecided">Undecided / Needs Recommendation</option>
            </select>
          </div>

          {/* Goals */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-goals" className="text-xs font-bold uppercase tracking-wider text-foreground">
              Primary Goal &amp; Timeline
            </label>
            <Input
              id="contact-goals"
              type="text"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="e.g. Build strength, fix lower back discomfort, prepare for marathon"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-foreground">
              Your Training Background &amp; Questions <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell Siddharth about your current routine, injury history, schedule constraints, and what you hope to achieve..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="rounded-2xl text-base font-semibold shadow-md mt-2 flex items-center justify-center gap-2">
            <Send className="size-4" />
            <span>Generate &amp; Send via Email</span>
          </Button>

          {/* Fallback & Status Box */}
          {submitted && (
            <div className="p-4 rounded-2xl bg-secondary/15 border border-secondary/30 flex flex-col gap-3 text-sm animate-in fade-in-50 duration-200">
              <div className="flex items-start gap-2.5 text-foreground font-semibold">
                <Check className="size-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Email client opened!</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If your email application did not launch automatically, you can copy Siddharth&apos;s email address or click the button below to retry:
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={copyEmail}
                  className="rounded-xl text-xs gap-1.5"
                >
                  {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                  <span>{copied ? "Copied Email!" : "Copy Email"}</span>
                </Button>
                {mailtoUrl && (
                  <a
                    href={mailtoUrl}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    Click here to open email app again &rarr;
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Privacy Note */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <AlertCircle className="size-3.5 shrink-0" />
            <span>Your information is handled directly through your email client. No third-party servers store your message.</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
