import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#051610] border-t border-emerald-500/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Transparente Antworten</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Hier finden Sie alle Antworten rund um den Kauf, die Bereitstellung und die Umsetzung des Leitfadens.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-emerald-500/20 overflow-hidden transition-all bg-white/[0.04] backdrop-blur-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-emerald-300 transition-colors"
                >
                  <span className="text-base sm:text-lg leading-snug">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-emerald-500/30 text-emerald-300' : 'text-stone-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 sm:px-8 pb-6 pt-1 text-stone-300 text-sm sm:text-base leading-relaxed border-t border-emerald-500/15"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="font-bold text-white text-base">
              Haben Sie noch weitere Fragen?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300">
              Folgen Sie Karin Zeit auf den sozialen Netzwerken oder sichern Sie sich direkt Ihr Exemplar.
            </p>
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-stone-950 font-bold text-xs sm:text-sm shrink-0 transition-all shadow-[0_0_15px_rgba(16,185,129,0.35)]"
          >
            <span>Jetzt E-Book für {PRICE_EUR} € lesen</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
