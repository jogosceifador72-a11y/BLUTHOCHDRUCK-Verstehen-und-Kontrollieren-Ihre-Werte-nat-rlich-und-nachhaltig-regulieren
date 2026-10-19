import React from 'react';
import { motion } from 'motion/react';
import { Activity, Salad, ShieldAlert, Heart, Check, Sparkles } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="vorteile" className="py-16 sm:py-24 bg-[#051710] border-y border-emerald-500/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2">
            Praktische Lösungen statt Frust
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Was löst dieses E-Book für Ihren Alltag?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Bluthochdruck erzeugt oft Unsicherheit und Überforderung. Dieser Leitfaden beseitigt die 4 größten Hürden, damit Sie sofort die Kontrolle zurückgewinnen.
          </p>
        </motion.div>

        {/* 4 Cards Grid with scroll animation */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-white/[0.07] transition-all group flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600/30 to-teal-500/30 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                Hürde 1 überwunden
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Unsicherheit bei den Werten
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Löst die ständige Verwirrung um Ihre Blutdruckzahlen. Sie erfahren, warum einmalige Spitzen normal sind, wie Sie die typischen 7 Heimmessfehler vermeiden und wie Sie verlässliche Ruhewerte ermitteln.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center gap-2 text-xs font-medium text-emerald-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Sicherheit & Gelassenheit bei jeder Messung</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-white/[0.07] transition-all group flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600/30 to-teal-500/30 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Salad className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                Hürde 2 überwunden
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Ernährungschaos & Verzicht
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Beendet die Ratlosigkeit beim Einkaufen und Kochen durch die bewährte DASH-Ernährung. Sie lernen, wie Sie verstecktes Salz spielend leicht reduzieren und welche Mineralstoffe (Kalium, Magnesium, Calcium) Ihre Gefäße aktiv schützen.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center gap-2 text-xs font-medium text-emerald-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Lecker essen ohne quälenden Verzicht</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-white/[0.07] transition-all group flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600/30 to-teal-500/30 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                Hürde 3 überwunden
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Verschwendete Zeit und Mühe
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Bewahrt Sie vor frustrierenden Radikaldiäten, teuren Nahrungsergänzungsmitteln und wirkungslosen Wundermitteln. Stattdessen setzen Sie gezielt auf alltagstaugliche Bewegung, erholsamen Schlaf und wirksame Entspannung.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center gap-2 text-xs font-medium text-emerald-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Fokus auf Maßnahmen, die wissenschaftlich wirken</span>
            </div>
          </motion.div>

          {/* Card 4 - Endergebnis with Radiant Emerald Gradient */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900/90 via-[#0a3a2a] to-emerald-950 text-white border-2 border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.2)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/30 border border-emerald-300/40 text-emerald-200 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                Ihr klares Ziel
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-3">
                Das konkrete Endergebnis
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Sie wissen nach der Lektüre ganz genau, wie Sie Ihren Lebensstil Schritt für Schritt für gesündere Gefäße gestalten – eigenverantwortlich, stressfrei und passend zu Ihrem persönlichen Alltag.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-700/60 flex items-center gap-2 text-xs font-medium text-emerald-200">
              <Check className="w-4 h-4 text-emerald-300" />
              <span>Klarer Durchblick & nachhaltige Gefäßvitalität</span>
            </div>
          </motion.div>
        </div>

        {/* Supporting photographic editorial banner with dark styling */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl overflow-hidden border border-emerald-500/25 grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#072419] to-[#0a3324] shadow-xl"
        >
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Wissenschaftlich fundiert
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold text-white font-display mt-2 mb-3">
              Die Kraft der DASH-Ernährung
            </h4>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Die DASH-Diät (Dietary Approaches to Stop Hypertension) wurde in zahlreichen klinischen Studien erforscht. Durch die gezielte Kombination aus Kalium, Magnesium und natriumarmen Lebensmitteln können die Gefäße sich entspannen.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-stone-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Mehr Frische & Vitalität</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span>Natürliche Gefäßentlastung</span>
              </div>
            </div>
          </div>
          <div className="relative min-h-[260px] md:min-h-full">
            <img
              src="/src/assets/images/dash_nutrition_spread_1792171564067.jpg"
              alt="Frische DASH-Ernährung für gesunden Blutdruck"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#072419] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
