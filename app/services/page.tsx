import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/config";
import {
  HardHat,
  Building2,
  Compass,
  Landmark,
  Factory,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialized Construction & Civil Engineering Services",
  description:
    "Explore Class 'A' engineering services by Lumbini Builders: Civil infrastructure, commercial high-rise complexes, 3D architectural design & BIM, and seismic retrofitting in Nepal.",
};

export default function ServicesPage() {
  const iconLookup: Record<string, React.ReactNode> = {
    HardHat: <HardHat className="w-6 h-6 text-slate-800" />,
    Building2: <Building2 className="w-6 h-6 text-slate-800" />,
    Compass: <Compass className="w-6 h-6 text-slate-800" />,
    Landmark: <Landmark className="w-6 h-6 text-slate-800" />,
    Factory: <Factory className="w-6 h-6 text-slate-800" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-slate-800" />,
  };

  return (
    <main className="flex-1 flex flex-col bg-slate-50">
      {/* Modern Banner */}
      <section className="bg-slate-950 text-white py-18 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-modern-dots opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
              <HardHat className="w-3.5 h-3.5" />
              <span>Turnkey Engineering & General Contracting</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Specialized Industrial &{" "}
              <span className="text-slate-400 font-light">Civil Engineering</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We provide end-to-end EPC (Engineering, Procurement, Construction) solutions.
              From deep foundations and BIM clash detection to high-rise commercial structures
              and seismic structural strengthening.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {siteConfig.services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 p-3 sm:p-5"
              >
                {/* Image Section with rounded-2xl */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden bg-slate-100 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-md border border-white/40">
                    {iconLookup[service.icon] || <HardHat className="w-6 h-6 text-slate-800" />}
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-red-50 text-[#e2181d] text-xs font-semibold rounded-full border border-red-200">
                        Capability 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                      {service.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features List */}
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Execution Scope:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#e2181d] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Deliverables */}
                    <div className="pt-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Audited QA/QC Standards:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliv, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                          >
                            <FileCheck2 className="w-3.5 h-3.5 text-slate-500" />
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Service Action Button */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#e2181d] text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#c41418] hover:shadow-md hover:shadow-red-900/20 transition-all shadow-xs"
                    >
                      <span>Request BOQ & Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950"
                    >
                      <PhoneCall className="w-4 h-4 text-slate-400" />
                      <span>Hotline: {siteConfig.contact.phoneDisplay.split("/")[0]}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modern Bottom Rounded CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Looking for a joint-venture or specialized subcontracting?
              </h3>
              <p className="text-slate-400 text-sm">
                We partner with international EPC consortiums and domestic government agencies.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-slate-950 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors whitespace-nowrap shadow-md"
            >
              Inquire for Joint Venture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
