import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Download, Sparkles } from 'lucide-react';

export const BookMockup: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-[340px] sm:max-w-[400px] w-full flex flex-col items-center"
    >
      {/* Immersive multi-color glowing aura behind book */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-emerald-700/30 rounded-3xl blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl -z-10 pointer-events-none" />

      {/* 3D Realistic Book Perspective Container */}
      <motion.div 
        whileHover={{ y: -8, rotateY: -3, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative group cursor-pointer"
      >
        {/* Book Body with 3D Depth & Spine */}
        <div className="relative rounded-r-2xl rounded-l-sm shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(16,185,129,0.25)] border-r-2 border-t border-b border-emerald-500/30 overflow-hidden transform perspective-1000 rotate-y-[-5deg] bg-white">
          
          {/* Spine simulation shadow */}
          <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-stone-500/50 via-stone-300/30 to-transparent z-20 pointer-events-none" />

          {/* New Book Cover matching attached image */}
          <img
            src="/src/assets/images/book_cover_exact_1792271545907.jpg"
            alt="BLUTHOCHDRUCK: Verstehen und Kontrollieren E-Book Cover von Karin Zeit"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover select-none block"
            onError={(e) => {
              // Graceful fallback to previous or styled container
              const target = e.currentTarget;
              target.src = "/src/assets/images/ebook_cover_showcase_1792171562625.jpg";
            }}
          />

          {/* Subtle Page Gloss & Edge Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/25 pointer-events-none z-10" />
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-l from-white/40 to-transparent z-20" />
        </div>

        {/* Floating Format Pill with Glowing Border */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-4 right-1 sm:-right-4 bg-stone-900/95 backdrop-blur-md text-emerald-300 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xl border border-emerald-500/40 flex items-center gap-2 group-hover:border-emerald-400 transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Download className="w-4 h-4 text-emerald-400" />
          <span className="text-stone-100">30 Seiten · PDF Sofort-Download</span>
        </motion.div>
      </motion.div>

      {/* Trust attributes under mockup with glassmorphic cards */}
      <div className="mt-8 grid grid-cols-2 gap-3 w-full text-xs">
        <div className="flex items-center gap-2 bg-emerald-950/50 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-emerald-500/25 text-emerald-200 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>100% Sicher via Hotmart</span>
        </div>
        <div className="flex items-center gap-2 bg-emerald-950/50 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-emerald-500/25 text-emerald-200 shadow-sm">
          <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Handy, Tablet & PC</span>
        </div>
      </div>
    </motion.div>
  );
};
