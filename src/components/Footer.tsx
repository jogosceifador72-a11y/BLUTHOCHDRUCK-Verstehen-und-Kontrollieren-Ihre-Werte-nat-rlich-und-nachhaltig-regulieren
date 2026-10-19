import React from 'react';
import { SocialLinks } from './SocialLinks';
import { CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030e08] border-t border-emerald-500/20 pt-16 pb-24 md:pb-16 text-stone-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Social Links Section in Button format as requested */}
        <div className="pb-14 border-b border-emerald-500/20">
          <SocialLinks />
        </div>

        {/* Brand & Summary Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-stone-950 flex items-center justify-center text-xs font-bold shadow-md">
                KZ
              </span>
              <span>Karin Zeit · Gesundheit</span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              „Bluthochdruck: Verstehen und Kontrollieren" – Ihr praktischer 30-Seiten-Leitfaden mit klarem 4-Wochen-Aktionsplan für natürliche Gefäßgesundheit und Vitalität im Alltag.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sichere Abwicklung über Hotmart (L108024302J) · {PRICE_EUR} €</span>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              Wichtiger rechtlicher Hinweis
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Dieses E-Book dient ausschließlich Informations- und Bildungszwecken. Es stellt keine medizinische Beratung, Diagnose oder Behandlung dar und ersetzt keinesfalls die Konsultation eines qualifizierten Arztes. Brechen Sie laufende medikamentöse Therapien niemals ohne vorherige ärztliche Rücksprache ab.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <div className="space-y-2 text-xs">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-emerald-400 hover:text-emerald-300 underline"
              >
                Direkt zum Hotmart Checkout
              </a>
              <a href="#top" className="block text-stone-400 hover:text-white">
                Nach oben scrollen ↑
              </a>
            </div>

            <div className="mt-6 text-xs text-stone-500">
              © {new Date().getFullYear()} Karin Zeit. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
