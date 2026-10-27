import React from "react";
import type { Metadata } from "next";
import { ProjectsFilterGallery } from "@/components/ProjectsFilterGallery";
import { siteConfig } from "@/src/config";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Projects & Engineering Portfolio",
  description:
    "Explore completed and ongoing landmark civil, commercial, and institutional projects by Lumbini Builders Pvt. Ltd. across Nepal.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex flex-col bg-slate-50">
      {/* Modern Banner */}
      <section className="bg-slate-950 text-white py-18 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-modern-dots opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Class 'A' Project Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Landmark Projects &{" "}
              <span className="text-slate-400 font-light">Structural Assets</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our track record of over 140+ completed and ongoing developments,
              including multi-story shopping centers, arterial highway bridges, medical wings,
              and industrial logistics parks across Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section on Soft Gray */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsFilterGallery />
        </div>
      </section>

      {/* Modern Bottom Rounded CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Ready to construct your next landmark in Nepal?
              </h3>
              <p className="text-slate-400 text-sm">
                We provide fixed-cost general contracting, BOQ verification, and timeline guarantees.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-slate-950 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors whitespace-nowrap shadow-md"
            >
              Submit Project Blueprint
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
