import React from 'react';
import { motion } from 'motion/react';
import { CHECKOUT_URL, PRICE_EUR } from '../data/productData';
import { BookMockup } from './BookMockup';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Clock, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#04120c] via-[#08241b] to-[#051710]">
      {/* Dynamic ambient glowing light orbs in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-40 right-1/4 w-[450px] h-[450px] bg-teal-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Notice Kicker */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400 mb-4 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-wide uppercase font-semibold">Praktischer 30-Seiten-PDF-Leitfaden</span>
          <span aria-hidden="true" className="text-emerald-700">·</span>
          <span className="text-stone-300">Von Karin Zeit</span>
        </motion.div>

        {/* 2-Column Split: Copy on left, Book Showcase on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
              BLUTHOCHDRUCK: <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Verstehen und Kontrollieren
              </span>
            </h1>

            <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-medium text-emerald-100/90 leading-snug">
              Ihre Werte natürlich und nachhaltig regulieren – mit klarem 4-Wochen-Aktionsplan.
            </p>

            <p className="mt-4 text-stone-300 text-base leading-relaxed max-w-2xl">
              Ein kompakter, alltagstauglicher Leitfaden auf 30 Seiten. Ohne theoretischen Ballast oder unverständliches Fachchinesisch zeigt er Ihnen genau, wie Blutdruck entsteht, was ihn beeinflusst und wie Sie Ihre Gefäßgesundheit in Ihrem eigenen Tempo selbst in die Hand nehmen.
            </p>

            {/* Benefit Checkmarks with glowing pill accents */}
            <div className="mt-6 sm:mt-8 space-y-3">
              <div className="flex items-start gap-3 bg-white/[0.03] p-2.5 rounded-xl border border-emerald-500/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 text-sm sm:text-base">
                  <strong className="text-emerald-300">Schluss mit der Zahlen-Verwirrung:</strong> Wie Sie zu Hause verlässlich und fehlerfrei messen.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white/[0.03] p-2.5 rounded-xl border border-emerald-500/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 text-sm sm:text-base">
                  <strong className="text-emerald-300">Erprobte DASH-Ernährung:</strong> Salzreduktion ohne Geschmacksverlust & die 3 Schlüssel-Mineralstoffe.
                </span>
              </div>
              <div className="flex items-start gap-3 bg-white/[0.03] p-2.5 rounded-xl border border-emerald-500/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 text-sm sm:text-base">
                  <strong className="text-emerald-300">Schritt-für-Schritt-Plan:</strong> Konkrete 4-Wochen-Struktur für Bewegung, Schlaf und Entspannung.
                </span>
              </div>
            </div>

            {/* Price & Primary Action Conversion Box */}
            <div className="mt-8 pt-6 border-t border-emerald-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                    Einmalige Investition
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums">
                      {PRICE_EUR} €
                    </span>
                    <span className="text-xs text-stone-400">
                      inkl. MwSt. · Kein Abo
                    </span>
                  </div>
                </div>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 active:scale-[0.98] text-stone-950 font-extrabold text-base shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all group"
                >
                  <span>Jetzt E-Book sichern</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </a>
              </div>

              {/* Security & Delivery Micro-Badges */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-400">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Sofort per E-Mail nach Kauf</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>In 2 Minuten auf Ihrem Gerät</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Sichere Bezahlung via Hotmart</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Visual Book Mockup with exact cover */}
          <div className="lg:col-span-5 flex justify-center">
            <BookMockup />
          </div>
        </div>

        {/* 4-KPI Strip below Hero with dark glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-emerald-500/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-colors shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
              30 Seiten
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Kompakt & ohne Fachchinesisch
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-colors shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display tabular-nums">
              4 Wochen
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Strukturierter Aktionsplan
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-colors shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-display">
              DASH
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Klinisch bewährte Ernährung
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-colors shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              100% PDF
            </div>
            <div className="text-xs sm:text-sm text-stone-400 mt-1">
              Für Handy, Tablet & Computer
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
