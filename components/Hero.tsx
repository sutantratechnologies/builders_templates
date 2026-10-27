"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/src/config";
import { ArrowRight, ChevronRight, Building2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[82vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* High-Resolution Modern Architectural Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
          alt="Modern Architectural Commercial Building Tower"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.85] contrast-105"
        />
        {/* Lighter scrim overlay to keep background image vivid and clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/25 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clean, Impactful Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Minimal Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-xs font-medium shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#e2181d] animate-pulse" />
              <span>{siteConfig.contractorClassification.split("(")[0]} • Class 'A' Contractor</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Building the Future with{" "}
                <span className="text-slate-200 font-light">
                  Precision & Clarity
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-xl font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                Over two decades of Class 'A' civil engineering, commercial landmarks,
                and seismic-resilient infrastructure across Nepal.
              </p>
            </motion.div>

            {/* Rounded Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#e2181d] text-white font-semibold text-sm rounded-full hover:bg-[#c41418] hover:shadow-xl hover:shadow-red-950/40 transition-all active:scale-[0.99]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white font-medium text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Clean, Elegant Building Showcase (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            {/* Clean Rounded-3xl Building Image Frame with Zero Clutter */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl group">
              <div className="relative h-80 sm:h-[420px] lg:h-[460px] w-full">
                <Image
                  src="/commercial_tower.jpg"
                  alt="Modern Commercial Tower built by Lumbini Builders"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Simple, Minimal Bottom Caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-white">
                      Horizon Commercial Complex
                    </h3>
                    <p className="text-xs text-slate-300">
                      Bhairahawa-Butwal Corridor • Class 'A' Landmark
                    </p>
                  </div>
                  <span className="text-xs font-medium bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    G+8 Storeys
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
