"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/src/config";

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const defaultMessage =
    "Namaste Lumbini Builders! I am an investor/client interested in discussing a construction project in Nepal.";

  const handleSendWhatsApp = (msgToSend: string) => {
    const text = encodeURIComponent(msgToSend || defaultMessage);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Dialogue Popover */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-slate-950 p-5 flex items-start justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-slate-950 rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  NRN & Investor Direct Line
                </h4>
                <p className="text-[11px] text-emerald-300 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Online • Lumbini Executive Desk
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 bg-slate-50 space-y-3.5 text-xs">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs text-slate-700">
              <p className="font-semibold text-slate-950 mb-1">
                Direct Engineering Consultation:
              </p>
              <p className="text-slate-600 leading-relaxed">
                Connect directly with our Chief Estimators and Managing Director.
                Fast-track evaluation for commercial complexes, tenders, and private development.
              </p>
            </div>

            {/* Quick Prompt Pill Buttons */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Select an Inquiry:
              </span>
              <button
                type="button"
                onClick={() =>
                  handleSendWhatsApp(
                    "Namaste! I am an NRN investor interested in developing a commercial property in Lumbini / Butwal."
                  )
                }
                className="w-full text-left px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 rounded-xl border border-slate-200 text-xs font-medium transition-all shadow-xs"
              >
                🏢 NRN Commercial Property Development
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSendWhatsApp(
                    "Hello, we have a civil construction tender/RFQ to share with Lumbini Builders."
                  )
                }
                className="w-full text-left px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 rounded-xl border border-slate-200 text-xs font-medium transition-all shadow-xs"
              >
                📋 Tender & Government Contract RFQ
              </button>
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-slate-800"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendWhatsApp(customMsg);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleSendWhatsApp(customMsg)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl flex items-center justify-center font-bold shadow-xs transition-colors"
                  aria-label="Send via WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-3">
        {/* NRN Attention Callout Pill */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-white text-slate-800 border border-slate-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl group cursor-pointer transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-950">
              NRN & Investor WhatsApp
            </span>
          </button>
        )}

        {/* WhatsApp Icon Button with rounded-full */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat with Lumbini Builders on WhatsApp"
          className="relative group p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.507 14.307l-.009.075c-.247.933-1.464 1.764-2.28 1.911-.634.114-1.463.14-2.385-.157-1.423-.46-2.73-1.285-3.805-2.361-1.077-1.076-1.9-2.382-2.361-3.805-.297-.922-.271-1.751-.157-2.385.147-.816.978-2.033 1.911-2.28l.075-.009c.277-.038.56-.038.835.008.286.048.514.243.619.516l.896 2.338c.105.273.048.583-.146.804l-.626.717c-.195.223-.195.55 0 .773.725.827 1.621 1.503 2.637 1.99.223.107.49.073.682-.085l.775-.639c.221-.182.531-.239.804-.134l2.338.896c.273.105.468.333.516.619.046.275.046.558.008.835zM12 2C6.477 2 2 6.477 2 12c0 1.918.544 3.708 1.488 5.226L2 22l4.908-1.458C8.36 21.488 10.125 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
