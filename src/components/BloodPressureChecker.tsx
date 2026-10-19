import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeartPulse, ArrowRight, Check } from 'lucide-react';
import { CHECKOUT_URL, PRICE_EUR } from '../data/productData';

export const BloodPressureChecker: React.FC = () => {
  const [systolic, setSystolic] = useState<number>(135);
  const [diastolic, setDiastolic] = useState<number>(85);

  const getEvaluation = (sys: number, dia: number) => {
    if (sys >= 160 || dia >= 100) {
      return {
        level: 'Hypertonie Stufe 2',
        sub: 'Deutlich erhöhte Werte (≥ 160 / ≥ 100 mmHg)',
        badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
        recommendation:
          'Ihre Werte liegen im deutlich erhöhten Bereich. Eine strukturierte Anpassung des Lebensstils (DASH-Ernährung, Salzkontrolle, moderater Ausdauersport) ist jetzt dringend ratsam, stets in enger Absprache mit Ihrem Arzt.',
        eBookTip: 'Kapitel 2 & 4 im Leitfaden zeigen Ihnen, wie Sie Messfehler ausschließen und versteckte Natriumfallen sofort stoppen.',
      };
    } else if (sys >= 140 || dia >= 90) {
      return {
        level: 'Hypertonie Stufe 1',
        sub: 'Leichte Hypertonie (140–159 / 90–99 mmHg)',
        badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        recommendation:
          'Hier kann eine konsequente Lebensstiloptimierung oft bemerkenswerte Effekte erzielen. Mit dem 4-Wochen-Plan können Sie Ihre Gefäße spürbar entlasten und die Weichen für gesündere Werte stellen.',
        eBookTip: 'Der 4-Wochen-Aktionsplan im E-Book ist genau für diese Ausgangslage konzipiert, um Ihre Werte nachhaltig zu stabilisieren.',
      };
    } else if (sys >= 130 || dia >= 85) {
      return {
        level: 'Hoch-normaler Blutdruck',
        sub: 'Grenzbereich (130–139 / 85–89 mmHg)',
        badgeBg: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
        recommendation:
          'Ihre Werte befinden sich im oberen Normbereich („Prähypertonie"). Dies ist der perfekte Zeitpunkt für präventive Maßnahmen, bevor sich ein dauerhafter Bluthochdruck manifestiert.',
        eBookTip: 'Im E-Book erfahren Sie, wie Sie mit kleinen mineralstoffreichen Anpassungen verhindern, dass die Werte weiter steigen.',
      };
    } else if (sys >= 120 || dia >= 80) {
      return {
        level: 'Normaler Blutdruck',
        sub: 'Gesunder Normalbereich (120–129 / 80–84 mmHg)',
        badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        recommendation:
          'Herzlichen Glückwunsch! Ihre Werte liegen in einem sehr gesunden Bereich. Das E-Book hilft Ihnen, diesen idealen Zustand auch mit zunehmendem Alter und in stressigen Phasen zu bewahren.',
        eBookTip: 'Nutzen Sie die Rezepte und Entspannungsroutinen, um Ihre Gefäße langfristig elastisch und jugendlich zu halten.',
      };
    } else {
      return {
        level: 'Optimaler Blutdruck',
        sub: 'Optimal (< 120 / < 80 mmHg)',
        badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        recommendation:
          'Ihr Blutdruck ist optimal. Gefäße und Herz werden ideal geschont. Pflegen Sie diesen Zustand weiterhin durch eine frische, ausgewogene Ernährung.',
        eBookTip: 'Der Leitfaden dient Ihnen als praktisches Nachschlagewerk für dauerhafte Herz-Kreislauf-Prävention.',
      };
    }
  };

  const currentEval = getEvaluation(systolic, diastolic);

  return (
    <section id="blutdruck-checker" className="py-16 sm:py-24 bg-gradient-to-b from-[#051710] to-[#072118] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            <HeartPulse className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Interaktiver Selbsttest</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Blutdruck-Werte-Checker
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Geben Sie Ihre gewohnten Heimmess-Werte ein und erfahren Sie sofort, wie Ihre Zahlen medizinisch eingeordnet werden und wie der Leitfaden Ihnen helfen kann.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="sys-slider" className="text-sm font-bold text-stone-200">
                    Systolischer Wert (Oberer Wert)
                  </label>
                  <span className="text-xl font-bold font-mono tabular-nums text-emerald-400">
                    {systolic} <span className="text-xs text-stone-400 font-sans">mmHg</span>
                  </span>
                </div>
                <input
                  id="sys-slider"
                  type="range"
                  min="90"
                  max="190"
                  step="1"
                  value={systolic}
                  onChange={(e) => setSystolic(Number(e.target.value))}
                  className="w-full h-3 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                  <span>90</span>
                  <span className="text-emerald-400">120 (Optimal)</span>
                  <span className="text-amber-400">140 (Hypertonie)</span>
                  <span>190</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="dia-slider" className="text-sm font-bold text-stone-200">
                    Diastolischer Wert (Unterer Wert)
                  </label>
                  <span className="text-xl font-bold font-mono tabular-nums text-emerald-400">
                    {diastolic} <span className="text-xs text-stone-400 font-sans">mmHg</span>
                  </span>
                </div>
                <input
                  id="dia-slider"
                  type="range"
                  min="60"
                  max="120"
                  step="1"
                  value={diastolic}
                  onChange={(e) => setDiastolic(Number(e.target.value))}
                  className="w-full h-3 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1 font-mono">
                  <span>60</span>
                  <span className="text-emerald-400">80 (Optimal)</span>
                  <span className="text-amber-400">90 (Hypertonie)</span>
                  <span>120</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="pt-2">
                <span className="text-xs text-stone-400 block mb-2 font-medium">Häufige Beispiele testen:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => { setSystolic(118); setDiastolic(76); }}
                    className="px-3 py-1.5 text-xs rounded-lg border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-mono transition-colors"
                  >
                    118 / 76
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSystolic(134); setDiastolic(86); }}
                    className="px-3 py-1.5 text-xs rounded-lg border border-yellow-500/30 bg-yellow-950/40 hover:bg-yellow-900/50 text-yellow-300 font-mono transition-colors"
                  >
                    134 / 86
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSystolic(148); setDiastolic(94); }}
                    className="px-3 py-1.5 text-xs rounded-lg border border-amber-500/30 bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 font-mono transition-colors"
                  >
                    148 / 94
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSystolic(165); setDiastolic(102); }}
                    className="px-3 py-1.5 text-xs rounded-lg border border-rose-500/30 bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 font-mono transition-colors"
                  >
                    165 / 102
                  </button>
                </div>
              </div>
            </div>

            {/* Evaluation Result Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-emerald-500/30 flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                    Medizinische Einordnung
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentEval.badgeBg}`}>
                    {currentEval.level}
                  </span>
                </div>

                <div className="text-3xl font-bold font-mono tabular-nums text-white mb-1">
                  {systolic} / {diastolic} <span className="text-sm font-sans font-normal text-stone-400">mmHg</span>
                </div>
                <div className="text-xs text-emerald-400/90 mb-4 font-medium">
                  {currentEval.sub}
                </div>

                <p className="text-stone-300 text-sm leading-relaxed mb-4">
                  {currentEval.recommendation}
                </p>

                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm leading-normal flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Passender Buch-Tipp:</strong> {currentEval.eBookTip}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-stone-400">
                  Leitlinien der Deutschen Hochdruckliga & WHO
                </span>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                >
                  <span>Jetzt 4-Wochen-Plan für {PRICE_EUR} € holen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
