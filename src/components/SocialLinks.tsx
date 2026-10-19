import React from 'react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../data/productData';
import { ExternalLink } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
          Folgen & Kontaktieren Sie Karin Zeit
        </h3>
        <p className="text-stone-300 text-sm mt-1">
          Verbinden Sie sich direkt auf Ihren bevorzugten Plattformen für tägliche Gesundheitstipps, Motivation und Neuigkeiten:
        </p>
      </div>

      {/* Button Grid with motion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {SOCIAL_LINKS.map((link, idx) => {
          return (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                {/* Platform Badge Icon */}
                <div className={`w-10 h-10 rounded-xl ${link.color} text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0`}>
                  {link.platform === 'instagram' && 'IG'}
                  {link.platform === 'facebook' && 'FB'}
                  {link.platform === 'tiktok' && 'TT'}
                  {link.platform === 'youtube' && 'YT'}
                  {link.platform === 'threads' && 'TH'}
                  {link.platform === 'kwai' && 'KW'}
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                    {link.name}
                  </div>
                  <div className="text-xs text-stone-400 font-mono">
                    {link.handle}
                  </div>
                </div>
              </div>

              <div className="w-8 h-8 rounded-xl bg-white/10 group-hover:bg-emerald-500 group-hover:text-stone-950 text-stone-400 flex items-center justify-center transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
