import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CHAPTERS_OUTLINE, CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { Check, ChevronRight } from 'lucide-react';

export const CurriculumSneakPeek: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number>(0);

  return (
    <section className="py-16 sm:py-24 bg-[#051610] border-t border-emerald-500/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            Inhaltsverzeichnis & Struktur
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Blick ins E-Book: Was erwartet Sie auf den 30 Seiten?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Jede einzelne Seite ist auf praktische Anwendbarkeit im Alltag ausgelegt. Keine Fülltexte, keine überflüssige Theorie – nur klare Handlungsanleitungen.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Chapter List (left) */}
          <div className="lg:col-span-7 space-y-3">
            {CHAPTERS_OUTLINE.map((chapter, idx) => {
              const isSelected = selectedChapter === idx;
              return (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedChapter(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-emerald-950/70 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                      : 'bg-white/[0.03] border-emerald-500/15 hover:bg-white/[0.06] hover:border-emerald-500/30'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                      isSelected ? 'bg-emerald-500 text-stone-950' : 'bg-white/10 text-stone-300'
                    }`}>
                      {chapter.number}
                    </span>
                    <div>
                      <h3 className={`text-sm sm:text-base font-bold ${
                        isSelected ? 'text-emerald-300' : 'text-stone-100'
                      }`}>
                        {chapter.title}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                        {chapter.summary}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-emerald-400/80 font-medium">
                      {chapter.pages}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-emerald-400 translate-x-0.5' : 'text-stone-500'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Chapter Details / Preview Panel (right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl sticky top-24"
          >
            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Kapitel {CHAPTERS_OUTLINE[selectedChapter].number} im Detail
              </span>
              <span className="text-xs font-mono text-emerald-300 font-semibold bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-lg">
                {CHAPTERS_OUTLINE[selectedChapter].pages}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold font-display text-white mt-4 mb-3">
              {CHAPTERS_OUTLINE[selectedChapter].title}
            </h4>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              {CHAPTERS_OUTLINE[selectedChapter].summary}
            </p>

            <div className="bg-emerald-950/40 rounded-2xl p-5 border border-emerald-500/25 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                Was Sie hier mitnehmen:
              </div>
              <ul className="text-xs sm:text-sm text-stone-200 space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Schritt-für-Schritt Erklärung in verständlicher Sprache</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Konkrete Tipps zur sofortigen Umsetzung im Alltag</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Vermeidung typischer Stolpersteine und Fehlschläge</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-emerald-500/20 pt-5">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-stone-950 text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
              >
                <span>Vollständiges E-Book für {PRICE_EUR} € freischalten</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <p className="text-center text-[11px] text-stone-400 mt-2.5">
                Sofortiger PDF-Download direkt nach Bezahlung
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
