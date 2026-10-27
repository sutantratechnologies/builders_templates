import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/config";
import {
  ShieldCheck,
  HardHat,
  Tractor,
  FileCheck2,
  CheckCircle2,
  Clock,
  ArrowRight,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company Profile & Managing Director's Message",
  description:
    "Learn about Lumbini Builders Pvt. Ltd., Class 'A' Government Contractor in Nepal, our Managing Director Er. Rajesh Shrestha, heavy equipment fleet, and ISO safety standards.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* 1. Page Header Banner */}
      <section className="bg-slate-950 text-white py-18 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-modern-dots opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Corporate Profile & Governance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Two Decades of{" "}
              <span className="text-slate-400 font-light">Engineering Authority</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Established in {siteConfig.establishedYear}, {siteConfig.companyName} is a Class
              'A' premier contractor registered with the Ministry of Physical
              Infrastructure and Transport, specializing in high-load commercial, civic,
              and seismic civil developments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Message from the Managing Director (Clean White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 p-3 sm:p-5">
            {/* MD Portrait */}
            <div className="lg:col-span-5 relative min-h-[420px] rounded-2xl overflow-hidden bg-slate-900">
              <Image
                src={siteConfig.managingDirector.image}
                alt={siteConfig.managingDirector.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/40">
                <h3 className="text-base font-bold text-slate-950 tracking-tight">
                  {siteConfig.managingDirector.name}
                </h3>
                <p className="text-slate-600 text-xs font-semibold">
                  {siteConfig.managingDirector.title}
                </p>
                <p className="text-slate-400 text-[11px] font-mono mt-0.5">
                  {siteConfig.managingDirector.credentials}
                </p>
              </div>
            </div>

            {/* MD Message Text */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <Quote className="w-4 h-4 text-slate-400" />
                  <span>Executive Address</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                  Message from the Managing Director
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {siteConfig.managingDirector.message.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block font-serif italic text-lg text-slate-900 font-bold">
                    Rajesh Shrestha
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Managing Director • Nepal Engineering Council Regd.
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e2181d] text-white font-semibold text-xs rounded-full hover:bg-[#c41418] hover:shadow-md transition-colors shadow-xs self-start"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values & Safety Standards (Soft Gray Section) */}
      <section id="safety-standards" className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Public Procurement & Engineering Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
              Core Values & Safety Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Executing major governmental tenders demands rigorous safety oversight,
              seismic validation, and strict adherence to the Public Procurement Act (PPA) of Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.safetyAndValues.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 hover:shadow-xl p-8 flex flex-col justify-between transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200">
                      {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                      {idx === 1 && <FileCheck2 className="w-5 h-5" />}
                      {idx === 2 && <HardHat className="w-5 h-5" />}
                      {idx === 3 && <Clock className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 bg-slate-100 rounded-full border border-slate-200 text-slate-700 font-semibold">
                      {item.complianceStandard}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#e2181d] shrink-0" />
                  <span>Audited for Tender Evaluation</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tender Pre-qualification Highlight Box */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1">
              <span className="text-slate-950 font-bold text-sm block">
                Tender Pre-qualification Documents Available
              </span>
              <p className="text-slate-500 text-xs sm:text-sm">
                Request audited balance sheets, tax clearance certificates, equipment ownership registers, and key personnel CVs.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.contact.tenderEmail}?subject=Tender%20Prequalification%20Documents%20Request`}
              className="px-6 py-2.5 bg-[#e2181d] text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#c41418] transition-colors whitespace-nowrap shadow-xs"
            >
              Request Tender Dossier
            </a>
          </div>
        </div>
      </section>

      {/* 4. Equipment & Machinery Fleet List (Clean White Section) */}
      <section id="equipment-fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Tractor className="w-3.5 h-3.5" />
                <span>Heavy Fleet & In-House Assets</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                Equipment & Heavy Machinery Fleet
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We own and maintain our comprehensive heavy equipment inventory,
                eliminating rental delays and guaranteeing immediate project mobilization.
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-3xl font-extrabold text-slate-950 block">85+ Units</span>
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                Heavy Machines in Active Inventory
              </span>
            </div>
          </div>

          {/* Machinery Fleet Table with modern rounded container */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-950 text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 border-b border-slate-800">Machine Model / Specification</th>
                  <th className="py-4 px-6 border-b border-slate-800">Operational Category</th>
                  <th className="py-4 px-6 border-b border-slate-800">Fleet Quantity</th>
                  <th className="py-4 px-6 border-b border-slate-800">Technical Capacity</th>
                  <th className="py-4 px-6 border-b border-slate-800">Deployment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {siteConfig.equipment.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                    }`}
                  >
                    <td className="py-4 px-6 font-semibold text-slate-950">
                      <div className="flex items-center gap-2.5">
                        <Tractor className="w-4 h-4 text-slate-500 shrink-0" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium">{item.type}</td>
                    <td className="py-4 px-6 font-bold text-slate-950">{item.quantity}</td>
                    <td className="py-4 px-6 text-slate-500 text-xs font-mono">{item.capacity}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                          item.status === "Operational"
                            ? "bg-slate-100 text-slate-800 border border-slate-200"
                            : item.status === "On-Site"
                            ? "bg-amber-50 text-amber-900 border border-amber-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Bottom Rounded CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Schedule an Executive Project Consultation
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Connect with our structural directors at our Butwal headquarters or Tinkune office.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-slate-950 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors whitespace-nowrap shadow-md"
            >
              Contact Engineering Desk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
