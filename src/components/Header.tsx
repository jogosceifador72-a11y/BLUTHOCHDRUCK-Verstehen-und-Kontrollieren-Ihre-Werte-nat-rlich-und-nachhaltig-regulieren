import React from 'react';
import { CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#05130e]/90 backdrop-blur-md border-b border-emerald-500/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#top" 
          className="text-stone-100 font-bold tracking-tight text-lg sm:text-xl font-display flex items-center gap-2.5 whitespace-nowrap shrink-0 hover:text-emerald-300 transition-colors"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            KZ
          </span>
          <span className="bg-gradient-to-r from-stone-100 via-emerald-100 to-stone-200 bg-clip-text text-transparent">
            Karin Zeit · Gesundheit
          </span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, unboxed text) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#vorteile" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Ihre Vorteile
          </a>
          <a href="#aktionsplan" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            4-Wochen-Plan
          </a>
          <a href="#blutdruck-checker" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Werte-Checker
          </a>
          <a href="#fuer-wen" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            Für wen geeignet
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-stone-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_28px_rgba(16,185,129,0.55)] transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <span>Jetzt für {PRICE_EUR} €</span>
            <ArrowRight className="w-4 h-4 text-stone-950 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </header>
  );
};
