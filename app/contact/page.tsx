import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/src/config";
import { ContactForm } from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Tender Inquiries | Lumbini Builders Pvt. Ltd.",
  description:
    "Submit commercial construction tenders, architectural drawings, and RFQs to Lumbini Builders. Central office in Butwal-Bhairahawa Corridor and Kathmandu liaison.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-18 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-modern-dots opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Government & Commercial Liaison</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact & Tender <span className="text-slate-400 font-light">Inquiries</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect directly with our engineering directors, estimating team, and project
              managers for tender submissions, NRN investment partnerships, and commercial construction.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid (Soft Gray Section) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Cols: Corporate Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Central Office Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm">
                <div className="flex items-center gap-3.5 mb-6 border-b border-slate-100 pb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">
                      Corporate Headquarters
                    </h3>
                    <span className="text-xs text-slate-500 font-medium block">
                      Lumbini Province, Nepal
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold text-xs">Physical Address:</strong>
                      <span className="text-xs leading-relaxed">
                        {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                        {siteConfig.contact.address.province}, Nepal (PIN: {siteConfig.contact.address.postalCode})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold text-xs">Official Hotline:</strong>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-slate-900 font-medium hover:underline text-xs"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                      <span className="block text-xs text-slate-400">
                        Toll Free: {siteConfig.contact.tollFree}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold text-xs">Tenders & RFQ Desk:</strong>
                      <a
                        href={`mailto:${siteConfig.contact.tenderEmail}`}
                        className="text-slate-900 font-medium hover:underline block text-xs"
                      >
                        {siteConfig.contact.tenderEmail}
                      </a>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-slate-500 hover:underline block text-xs"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                    <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-500">
                      <strong className="block text-slate-800 font-semibold">Operational Hours:</strong>
                      <span>{siteConfig.contact.workingHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Liaison Offices */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Branch & Logistics Depots
                </h4>
                <div className="space-y-3">
                  {siteConfig.contact.address.branchOffices.map((office, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                    >
                      <span className="font-semibold block text-slate-900">
                        {office.split(":")[0]}
                      </span>
                      <span className="text-slate-500">{office.split(":")[1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp NRN Direct Banner */}
              <div className="bg-slate-950 rounded-3xl p-6 text-white space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>NRN Investor Priority Hotline</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Non-resident Nepalese clients and foreign EPC partners can chat directly with
                  executive leadership regarding joint-ventures and real estate construction.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Namaste%20Lumbini%20Builders!%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-full transition-colors shadow-xs"
                >
                  <span>Chat on WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right 7 Cols: B2B Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Large Google Maps Iframe (Clean White Section with Rounded Frame) */}
      <section className="bg-white py-14 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-950">
                Corporate Location & Site Access
              </h3>
              <p className="text-xs text-slate-500">
                Bhairahawa-Butwal Corridor, Lumbini Province, Nepal
              </p>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              GPS Coordinates: 27.6864° N, 83.4323° E (Highway Accessible for Heavy Flatbeds)
            </div>
          </div>

          <div className="w-full h-[450px] rounded-3xl bg-slate-100 border border-slate-200 shadow-xl overflow-hidden relative">
            <iframe
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lumbini Builders Headquarters Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
