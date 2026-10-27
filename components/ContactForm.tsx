"use client";

import React, { useState } from "react";
import { siteConfig } from "@/src/config";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  location: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Commercial Complex",
    budgetRange: "NPR 5 - 20 Crore",
    location: "Butwal-Bhairahawa Corridor",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * Dummy async function ready for Web3Forms or any custom API endpoint.
   * To activate Web3Forms:
   * 1. Set your Web3Forms access key
   * 2. POST to https://api.web3forms.com/submit
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // In production with Web3Forms, uncomment the block below:
      /*
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          from_name: "Lumbini Builders B2B Portal",
          ...formData,
        }),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.message || "Failed to submit form");
      */

      // Simulated network request for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "Commercial Complex",
        budgetRange: "NPR 5 - 20 Crore",
        location: "Butwal-Bhairahawa Corridor",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "There was an unexpected error submitting your request. Please call our hotline directly."
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 text-slate-900 shadow-xl relative">
      <div className="mb-8 space-y-2">
        <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
          Official Tender & RFQ Desk
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
          Request Project Quotation
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
          Submit your project requirements for review by our estimating engineers and
          Managing Director Er. Rajesh Shrestha.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>RFQ Received Successfully</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
            Thank you for reaching out to Lumbini Builders. Our technical estimation desk will
            review your specifications and contact your team within 24 business hours.
            For urgent tenders, please call{" "}
            <strong className="text-emerald-950">{siteConfig.contact.phoneDisplay}</strong>.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 px-4 py-1.5 bg-emerald-700 text-white font-semibold text-xs rounded-full hover:bg-emerald-600 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-center gap-3 text-xs">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Er. Sunil Thapa"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            />
          </div>

          {/* Company / Developer Name */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
              Company / Entity Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Horizon Real Estate Group / Govt Dept"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
              Official Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="sunil@horizoncorp.com.np"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            />
          </div>

          {/* Phone / WhatsApp */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+977 98******** or International"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            />
          </div>

          {/* Project Type */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
              Project Category
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            >
              <option value="Commercial Complex">Commercial Complex & Shopping Mall</option>
              <option value="Heavy Civil & Highway">Heavy Civil & Highway / Bridge Infrastructure</option>
              <option value="Hospital & Medical Facility">Institutional, Hospital & Medical Facility</option>
              <option value="Industrial Warehouse PEB">Industrial Plant & Pre-Engineered Warehouse</option>
              <option value="Residential Gated Community">Residential Gated Housing / Multi-Family Tower</option>
              <option value="Seismic Retrofitting">Seismic Retrofitting & Structural Survey</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
              Estimated Budget Range
            </label>
            <select
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
            >
              <option value="NPR 1 - 5 Crore">NPR 1 Crore – 5 Crore</option>
              <option value="NPR 5 - 20 Crore">NPR 5 Crore – 20 Crore</option>
              <option value="NPR 20 - 50 Crore">NPR 20 Crore – 50 Crore</option>
              <option value="NPR 50+ Crore / Mega Project">NPR 50+ Crore (Major Public / Private Venture)</option>
              <option value="NRN Foreign Direct Investment">NRN / Foreign Direct Investment (USD/EUR/AUD)</option>
            </select>
          </div>
        </div>

        {/* Project Location */}
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
            Project Location in Nepal
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Bhairahawa-Butwal Corridor / Kathmandu / Pokhara"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
          />
        </div>

        {/* Message / Scope */}
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider font-semibold text-slate-600 block">
            Project Scope & Specifications <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe total built-up square footage, structural drawings availability, target start date, and special engineering criteria..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white transition-colors"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Strict NDA observed on all architectural and structural drawings</span>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#e2181d] text-white font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#c41418] hover:shadow-lg hover:shadow-red-900/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Submit RFQ</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
