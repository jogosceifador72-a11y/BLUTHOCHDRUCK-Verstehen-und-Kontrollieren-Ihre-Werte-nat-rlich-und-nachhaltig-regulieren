import React from 'react';
import { CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { ArrowRight, Download } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#05130e]/95 backdrop-blur-xl border-t border-emerald-500/30 px-4 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
        <div>
          <div className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">
            PDF-Leitfaden
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold font-display text-white tabular-nums">
              {PRICE_EUR} €
            </span>
            <span className="text-[10px] text-stone-400">Einmalig</span>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-stone-950 font-extrabold text-xs shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all active:scale-[0.98]"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Jetzt sichern</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
};
