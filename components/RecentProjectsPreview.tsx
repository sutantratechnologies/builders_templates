"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/config";
import { MapPin, ArrowRight, CheckCircle, Clock } from "lucide-react";

export const RecentProjectsPreview = () => {
  const recentProjects = siteConfig.projects.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
              <span>Featured Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Recent Landmark{" "}
              <span className="text-slate-500 font-light">Executions</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore our landmark commercial complexes, multi-span bridges, and
              healthcare wings engineered across Nepal.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-900 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all shadow-xs self-start md:self-end"
          >
            <span>View Full Portfolio ({siteConfig.projects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Modern Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-[#e2181d]/50 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden p-3.5"
            >
              {/* Rounded Image Container with next/image */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                {/* Status Badges with rounded-full pills */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                      project.category === "Completed"
                        ? "bg-slate-950/80 backdrop-blur-md text-white border border-white/20"
                        : "bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200"
                    }`}
                  >
                    {project.category === "Completed" ? (
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Clock className="w-3 h-3 text-amber-500" />
                    )}
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/80 backdrop-blur-md text-slate-800 border border-white/30">
                    {project.sector}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-1.5 text-xs text-white font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Client: {project.client}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-slate-700 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    Handover: <strong className="text-slate-800">{project.completionYear}</strong>
                  </span>
                  <Link
                    href={`/projects#${project.id}`}
                    className="inline-flex items-center gap-1.5 text-slate-900 font-semibold hover:text-[#e2181d] transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
