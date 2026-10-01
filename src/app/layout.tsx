import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";
import { siteConfig } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Siddharth Fit — Personal Trainer & Fitness Coach",
    template: "%s | Siddharth Fit",
  },
  description: "Evidence-based strength coaching, biomechanical restoration, and sustainable health periodization by Siddharth.",
  keywords: [
    "Personal Trainer",
    "Strength Coach",
    "Fitness Coaching",
    "Biomechanics",
    "Progressive Overload",
    "Online Coaching",
    "Siddharth Fit",
  ],
  authors: [{ name: "Siddharth", url: siteConfig.url }],
  creator: "Siddharth",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Siddharth Fit — Personal Trainer & Fitness Coach",
    description: "Evidence-based strength coaching, biomechanical restoration, and sustainable health periodization.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Fit — Personal Trainer & Fitness Coach",
    description: "Evidence-based strength coaching, biomechanical restoration, and sustainable health periodization.",
    creator: "@09_sid_09",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
        <StructuredData type="website" />
        {/* Skip to Content for Screen Readers & Keyboard Nav */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main id="main-content" className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
