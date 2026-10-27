"use client";

import React from "react";
import { siteConfig } from "@/src/config";
import { Calendar, Building2, Users2, Tractor, ShieldCheck } from "lucide-react";

export const TrustBar = () => {
  const iconLookup: Record<string, React.ReactNode> = {
    Calendar: <Calendar className="w-6 h-6 text-slate-700 shrink-0" />,
    Building2: <Building2 className="w-6 h-6 text-slate-700 shrink-0" />,
    Users2: <Users2 className="w-6 h-6 text-slate-700 shrink-0" />,
    Tractor: <Tractor className="w-6 h-6 text-slate-700 shrink-0" />,
  };

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-start gap-4 ${
                idx !== 0 ? "pt-5 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200/60 shrink-0">
                {iconLookup[stat.iconName] || (
                  <ShieldCheck className="w-6 h-6 text-slate-700" />
                )}
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
