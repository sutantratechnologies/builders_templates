"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/config";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Menu,
  X,
  Building2,
  ShieldCheck,
  FileText,
} from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Company Profile", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Projects", href: "/projects" },
    { name: "Contact & Tender", href: "/contact" },
  ];

  return (
    <>
      {/* Top Modern Utility Bar */}
      <div className="bg-slate-50 text-slate-600 text-xs border-b border-slate-200/80 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-900 font-semibold text-[11px] bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
              {siteConfig.contractorClassification.split("(")[0].trim()}
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              {siteConfig.registrationNumber}
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {siteConfig.contact.workingHours.split("(")[0]}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-2 hover:text-slate-950 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>Hotline: {siteConfig.contact.phoneDisplay.split("/")[0].trim()}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.tenderEmail}`}
              className="inline-flex items-center gap-2 hover:text-slate-950 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>Tenders: {siteConfig.contact.tenderEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Modern Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-white border-b border-slate-200/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Official Logo Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt={siteConfig.companyName}
                width={190}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                      isActive
                        ? "bg-slate-950 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Modern Rounded CTA: Request a Quote */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#e2181d] text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#c41418] hover:shadow-lg hover:shadow-red-900/20 transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="py-2.5 px-3 bg-slate-50 rounded-xl mb-3 border border-slate-200/60">
              <span className="text-xs uppercase tracking-wider text-slate-800 font-bold block">
                {siteConfig.contractorClassification.split("(")[0]}
              </span>
              <span className="text-xs text-slate-500">
                Hotline: {siteConfig.contact.phoneDisplay}
              </span>
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? "bg-slate-950 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-950 text-white rounded-xl font-bold uppercase tracking-wider text-xs shadow-md"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
