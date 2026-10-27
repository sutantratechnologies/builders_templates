"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/config";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Credentials (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt={siteConfig.companyName}
                width={180}
                height={48}
                className="h-10 sm:h-11 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium block mt-2.5">
                {siteConfig.contractorClassification.split("(")[0]} • Est. {siteConfig.establishedYear}
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {siteConfig.shortDescription}
            </p>

            {/* Official Registration Badges with rounded-2xl */}
            <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-3.5 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                    Registration
                  </span>
                  <span className="text-white text-xs font-semibold">
                    {siteConfig.registrationNumber.split(":")[1] || siteConfig.registrationNumber}
                  </span>
                </div>
              </div>
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-3.5 flex items-center gap-3">
                <Award className="w-4 h-4 text-slate-400 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase tracking-wider">
                    Tax / Pan
                  </span>
                  <span className="text-white text-xs font-semibold">
                    {siteConfig.vatPanNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Company Profile & MD Message</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#safety-standards"
                  className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Safety Standards & ISO QA/QC</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#equipment-fleet"
                  className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Machinery & Heavy Fleet</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Project Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white text-slate-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>B2B RFQ & Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Sectors */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-white text-slate-400 transition-colors block text-xs"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Central Office & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.province}, Nepal
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white font-medium text-slate-300"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white font-medium text-slate-300"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-500 leading-snug">
                  {siteConfig.contact.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {siteConfig.companyName}. All Rights Reserved.
            Licensed by {siteConfig.licenseAuthority}.
          </p>
          <div className="flex items-center gap-4 text-[11px] tracking-wide text-slate-400">
            <span>Seismic NBC 105:2020 Compliant</span>
            <span>•</span>
            <span>Class 'A' Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
