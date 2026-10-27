"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/src/config";
import {
  HardHat,
  Building2,
  Compass,
  Landmark,
  Factory,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const ServicesTeaser = () => {
  const iconLookup: Record<string, React.ReactNode> = {
    HardHat: <HardHat className="w-6 h-6 text-slate-800" />,
    Building2: <Building2 className="w-6 h-6 text-slate-800" />,
    Compass: <Compass className="w-6 h-6 text-slate-800" />,
    Landmark: <Landmark className="w-6 h-6 text-slate-800" />,
    Factory: <Factory className="w-6 h-6 text-slate-800" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-slate-800" />,
  };

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
            Comprehensive Engineering &{" "}
            <span className="text-slate-500 font-light">Turnkey Construction</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From initial geotechnical survey and 3D architectural BIM modeling through
            structural framing, highway paving, and final commissioning.
          </p>
        </div>

        {/* Services Grid with Modern Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 rounded-3xl border border-slate-200/90 p-8 flex flex-col justify-between hover:bg-white hover:border-[#e2181d]/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:bg-[#e2181d] group-hover:border-[#e2181d] transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {iconLookup[service.icon] || <HardHat className="w-6 h-6" />}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 group-hover:text-[#e2181d] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#e2181d] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#e2181d] transition-colors"
                >
                  <span>Explore Technical Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Rounded Bottom Highlight Banner */}
        <div className="mt-16 bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-2xl font-bold tracking-tight text-white">
              Need Tender Estimation or Commercial Feasibility?
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Submit architectural blueprints or BOQ schedules to our engineering estimating
              division for complete structural cost evaluation.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#e2181d] text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#c41418] whitespace-nowrap transition-colors shadow-md"
          >
            Submit RFQ Document
          </Link>
        </div>
      </div>
    </section>
  );
};
