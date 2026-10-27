"use client";

import React from "react";
import { siteConfig } from "@/src/config";
import { Building2, Shield, Landmark } from "lucide-react";

export const PartnerMarquee = () => {
  const duplicatedPartners = [...siteConfig.partners, ...siteConfig.partners];

  return (
    <section className="bg-slate-50/70 py-12 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Trusted by Government Departments & Private Enterprises
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Pre-qualified Class 'A' Contractor • Public Procurement Act Compliant
          </span>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Modern soft fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-5 py-2">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-400 transition-colors shrink-0 group"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                {partner.category === "Government Agency" ? (
                  <Landmark className="w-4 h-4" />
                ) : partner.category === "International Donor" ? (
                  <Shield className="w-4 h-4" />
                ) : (
                  <Building2 className="w-4 h-4" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 group-hover:text-slate-950">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
