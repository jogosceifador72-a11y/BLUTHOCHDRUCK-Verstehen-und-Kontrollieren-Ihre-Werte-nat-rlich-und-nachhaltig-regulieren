import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FOUR_WEEKS_PLAN, CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const FourWeekPlan: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const current = FOUR_WEEKS_PLAN.find((w) => w.week === activeWeek) || FOUR_WEEKS_PLAN[0];

  return (
    <section id="aktionsplan" className="py-16 sm:py-24 bg-[#04120b] relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            Ihr roter Faden für jeden Tag
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Der strukturierte 4-Wochen-Aktionsplan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Keine Überforderung, kein Diät-Stress. Jede Woche baut systematisch auf der vorherigen auf, damit Sie Schritt für Schritt dauerhafte Gewohnheiten etablieren.
          </p>
        </motion.div>

        {/* Interactive Week Selector Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 bg-white/[0.05] backdrop-blur-md rounded-2xl border border-emerald-500/30 max-w-full overflow-x-auto">
            {FOUR_WEEKS_PLAN.map((item) => (
              <button
                key={item.week}
                type="button"
                onClick={() => setActiveWeek(item.week)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  activeWeek === item.week
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-stone-300 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                  activeWeek === item.week ? 'bg-stone-950/20 text-stone-950 font-bold' : 'bg-white/10 text-stone-300'
                }`}>
                  {item.week}
                </span>
                <span>Woche {item.week}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Week Detailed Card with Motion */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={current.week}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 max-w-4xl mx-auto bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-500/20">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Woche {current.week} · {current.focus}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                  {current.title}
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shrink-0 self-start md:self-center">
                Dauer: 7 Tage
              </div>
            </div>

            <p className="mt-6 text-stone-200 text-base sm:text-lg leading-relaxed">
              {current.description}
            </p>

            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                Konkrete Schwerpunkte dieser Woche:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {current.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.04] border border-emerald-500/20 flex items-start gap-3 text-stone-200 text-sm leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-400 text-center sm:text-left">
                Im E-Book finden Sie zu jeder Woche konkrete Checklisten und Praxisanleitungen.
              </span>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
              >
                <span>Diesen Plan für {PRICE_EUR} € sichern</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Photographic lifestyle rest section */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl overflow-hidden border border-emerald-500/30 relative min-h-[300px] sm:min-h-[360px] flex items-center shadow-2xl"
        >
          <img
            src="/src/assets/images/lifestyle_vitality_1792171563375.jpg"
            alt="Gesunde Gefäße und Lebensfreude im Alltag"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04120b] via-[#04120b]/80 to-transparent" />
          <div className="relative max-w-lg p-6 sm:p-12 text-white">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Ihr Wohlbefinden steht an erster Stelle
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display mt-2 mb-3 leading-tight">
              Natürliche Vitalität spüren – Tag für Tag
            </h3>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Gefäße besitzen eine erstaunliche Regenerationsfähigkeit. Wenn Sie ihnen die richtigen Nährstoffe, sanfte Bewegung und Ruhe geben, spüren Sie oft schon nach kurzer Zeit mehr Gelassenheit und Energie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
