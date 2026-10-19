import React from 'react';
import { motion } from 'motion/react';
import { CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { Check, ShieldCheck, ArrowRight, Lock, Award, HeartHandshake } from 'lucide-react';

export const PricingOffer: React.FC = () => {
  return (
    <section id="preis" className="py-16 sm:py-24 bg-gradient-to-b from-[#04120b] via-[#072418] to-[#04110a] border-t border-emerald-500/20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            Transparenter Festpreis · Keine versteckten Kosten
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Starten Sie noch heute in Ihre Gefäßgesundheit
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Sichern Sie sich den kompletten 30-Seiten-Praxis-Leitfaden inklusive des strukturierten 4-Wochen-Aktionsplans zum einmaligen Sonderpreis.
          </p>
        </motion.div>

        {/* Pricing Card with Glowing Border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-white/[0.04] backdrop-blur-2xl rounded-3xl border-2 border-emerald-400/50 shadow-[0_0_50px_rgba(16,185,129,0.25)] overflow-hidden"
        >
          {/* Top highlight ribbon */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-stone-950 px-6 py-3 text-center text-xs sm:text-sm font-extrabold tracking-wide flex items-center justify-center gap-2">
            <Award className="w-4 h-4 stroke-[2.5]" />
            <span>Offizielles E-Book · Sofortiger digitaler PDF-Download</span>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-emerald-500/20">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  Komplettpaket
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
                  BLUTHOCHDRUCK: Verstehen und Kontrollieren
                </h3>
                <p className="text-stone-300 text-sm mt-1">
                  Praktischer Leitfaden als PDF mit klarem 4-Wochen-Aktionsplan
                </p>
              </div>

              <div className="text-left md:text-right shrink-0">
                <div className="text-xs text-stone-400 font-medium">Einmalzahlung</div>
                <div className="flex items-baseline gap-1 md:justify-end">
                  <span className="text-4xl sm:text-5xl font-extrabold font-display text-emerald-400 tabular-nums">
                    {PRICE_EUR}
                  </span>
                  <span className="text-xl font-bold text-white">€</span>
                </div>
                <div className="text-xs text-emerald-300/80 mt-0.5">
                  inkl. gesetzl. MwSt. · Kein Abonnement
                </div>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                Das ist alles für Sie enthalten:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-200 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>30 Seiten Praxiswissen</strong> – fokussiert, leicht verständlich und direkt anwendbar</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Vollständiger 4-Wochen-Plan</strong> – Woche für Woche für nachhaltige Gewohnheiten</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>DASH-Ernährungsleitfaden</strong> – Salzkontrolle & Gefäßschutz ohne Hungern</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Heimmess-Anleitung</strong> – Nie wieder Unsicherheit oder Messfehler am Blutdruckgerät</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Format: PDF</strong> – Lesbar auf Smartphone, Tablet, Laptop und Desktop-PC</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Sofortige Lieferung</strong> – Automatischer Downloadlink per E-Mail nach Kauf</span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-10">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 sm:py-5 px-8 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 active:scale-[0.99] text-stone-950 text-base sm:text-lg font-extrabold shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] transition-all group"
              >
                <span>Jetzt für {PRICE_EUR} € kaufen & sofort herunterladen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  SSL-verschlüsselte 256-Bit Zahlung
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Zahlungsabwicklung durch Hotmart
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                  14 Tage Zufriedenheitsgarantie
                </span>
              </div>
            </div>

            {/* Mandatory Medical Disclaimer Notice */}
            <div className="mt-8 pt-6 border-t border-emerald-500/20 text-center">
              <p className="text-xs text-stone-400 italic max-w-xl mx-auto">
                Hinweis: Dieses E-Book dient nur der Information und ersetzt keinen ärztlichen Rat. Bitte konsultieren Sie bei gesundheitlichen Fragen oder vor Änderungen an bestehenden Medikationen immer Ihren behandelnden Arzt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
