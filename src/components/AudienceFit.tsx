import React from 'react';
import { motion } from 'motion/react';
import { Check, X, UserCheck, UserX } from 'lucide-react';
import { CHECKOUT_URL, PRICE_EUR } from '../data/productData';

export const AudienceFit: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-16 sm:py-24 bg-[#04120b] border-t border-emerald-500/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            Ehrliche Orientierung
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Für wen ist dieses E-Book gemacht?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Transparenz ist das Wichtigste bei Ihrer Gesundheit. Finden Sie heraus, ob dieser Leitfaden genau zu Ihren Zielen und Erwartungen passt.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Für Sie */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-[#072a1e] to-emerald-950/90 border-2 border-emerald-500/40 flex flex-col justify-between shadow-[0_0_35px_rgba(16,185,129,0.15)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Perfekt für Sie geeignet, wenn:
                  </h3>
                  <span className="text-xs text-emerald-400 font-medium">
                    Hier finden Sie Ihre maßgeschneiderte Lösung
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-stone-200 text-sm sm:text-base leading-snug">
                    Sie Ihre Blutdruckwerte <strong>ohne Komplikationen im Alltag</strong> natürlich verbessern möchten.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-stone-200 text-sm sm:text-base leading-snug">
                    Sie <strong>Einsteiger sind</strong> und eine verlässliche, klare und verständliche Orientierung brauchen.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-stone-200 text-sm sm:text-base leading-snug">
                    Sie eine <strong>praktische Methode</strong> suchen, die Sie sofort heute noch anwenden können.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-stone-200 text-sm sm:text-base leading-snug">
                    Sie Ihre Gesundheit eigenverantwortlich in die Hand nehmen möchten – in Ihrem ganz eigenen Tempo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/25">
              <span className="text-xs text-emerald-300 font-semibold block">
                Ergebnis: Ein sicherer, alltagstauglicher Leitfaden ohne Frust.
              </span>
            </div>
          </motion.div>

          {/* Column 2: Nicht für Sie */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-stone-400 flex items-center justify-center border border-white/10">
                  <UserX className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-200 font-display">
                    Nicht für Sie geeignet, wenn:
                  </h3>
                  <span className="text-xs text-stone-400 font-medium">
                    Ehrliche Erwartungshaltung
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-stone-300 text-sm sm:text-base leading-snug">
                    Sie <strong>„Wunderergebnisse" über Nacht</strong> erwarten, ohne selbst aktiv etwas an Ihren Gewohnheiten zu verändern.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-stone-300 text-sm sm:text-base leading-snug">
                    Sie <strong>lange, akademische Theorie</strong> und Fachchinesisch einem direkten, handlungsorientierten Leitfaden vorziehen.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-stone-300 text-sm sm:text-base leading-snug">
                    Sie nach einem Ersatz für ärztliche Notfallversorgung oder Diagnostik suchen.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs text-stone-400 block">
                Wir versprechen keine Zaubertricks, sondern erprobte Lebensstil-Praxis.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
