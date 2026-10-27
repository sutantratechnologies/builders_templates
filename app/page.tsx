import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { ServicesTeaser } from "@/components/ServicesTeaser";
import { RecentProjectsPreview } from "@/components/RecentProjectsPreview";
import { siteConfig } from "@/src/config";
import Link from "next/link";
import { ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.companyName} | Class 'A' Government Contractor & Heavy Infrastructure`,
  description: siteConfig.shortDescription,
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* 1. Hero Section with modern image background */}
      <Hero />

      {/* 2. Floating Trust Bar with key metrics */}
      <TrustBar />

      {/* 3. Partner & Government Agency Marquee (Soft Gray Section) */}
      <div className="mt-8">
        <PartnerMarquee />
      </div>

      {/* 4. Core Services Showcase (Clean White Section) */}
      <ServicesTeaser />

      {/* 5. Recent Projects Preview (Soft Slate Gray Section) */}
      <RecentProjectsPreview />

      {/* 6. Modern Rounded Call-to-Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-10 sm:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-modern-dots opacity-20 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Class 'A' Contractor Pre-Qualified</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Planning a Commercial Complex, Bridge or Infrastructure Project?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Connect directly with Er. Rajesh Shrestha and our senior structural
                  engineering team in Butwal or Kathmandu. We provide rigorous tender
                  estimation, site geotechnical review, and guaranteed milestone delivery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#e2181d] text-white font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#c41418] hover:shadow-xl hover:shadow-red-900/30 transition-all"
                >
                  <span>Request Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-medium text-xs uppercase tracking-wider rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-slate-300" />
                  <span>{siteConfig.contact.phoneDisplay.split("/")[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
