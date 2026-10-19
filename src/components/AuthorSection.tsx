import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#04120b] border-t border-emerald-500/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center gap-8"
        >
          {/* Author Monogram with Radiant Gradient */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-stone-950 flex flex-col items-center justify-center font-display shadow-[0_0_30px_rgba(16,185,129,0.35)] shrink-0 border-2 border-emerald-400/50">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-950">KZ</span>
            <span className="text-[10px] tracking-widest uppercase mt-1 font-bold text-stone-900">Karin Zeit</span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              Über die Autorin
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              Karin Zeit
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
              Mit Leidenschaft für verständliche, alltagstaugliche Gesundheitsaufklärung hilft Karin Zeit Menschen dabei, ihre Vitalität auf natürlichem Weg zurückzugewinnen. Dieser Leitfaden entstand aus dem Wunsch, die oft verwirrende Welt der Blutdruckwerte auf das Wesentliche herunterzubrechen: klare Orientierung, wissenschaftlich fundierte Ernährung und Methoden, die man tatsächlich jeden Tag umsetzen kann.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-emerald-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Ohne Fachchinesisch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Alltagstauglich
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Schritt-für-Schritt erklärt
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
