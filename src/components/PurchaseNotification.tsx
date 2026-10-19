import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Download } from 'lucide-react';

const NOTIFICATIONS = [
  { time: 'vor 2 Minuten', location: 'Deutschland', id: 1 },
  { time: 'vor 5 Minuten', location: 'Österreich', id: 2 },
  { time: 'vor 8 Minuten', location: 'Schweiz', id: 3 },
  { time: 'vor 14 Minuten', location: 'Deutschland', id: 4 },
  { time: 'vor 18 Minuten', location: 'Deutschland', id: 5 },
  { time: 'vor wenigen Sekunden', location: 'Deutschland', id: 6 },
];

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial show after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    if (isVisible) {
      // Hide after 6 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
      return () => clearTimeout(hideTimer);
    } else {
      // Show next after 9-12 seconds
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 9000);
      return () => clearTimeout(nextTimer);
    }
  }, [isVisible, isDismissed]);

  if (isDismissed || !isVisible) {
    return null;
  }

  const current = NOTIFICATIONS[currentIndex];

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 md:bottom-6 left-4 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#072419]/95 backdrop-blur-xl border border-emerald-400/40 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.25)] flex items-start gap-3 relative pr-8">
        {/* Success checkmark badge with subtle glow */}
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header without personal names as requested */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-400">
              Kauf bestätigt
            </span>
            <span className="text-stone-500">·</span>
            <span className="text-[11px] text-stone-300 font-medium">
              {current.time}
            </span>
          </div>

          <p className="text-xs font-semibold text-white mt-0.5 truncate">
            E-Book „Bluthochdruck: Verstehen und Kontrollieren"
          </p>

          <div className="flex items-center gap-2 mt-1.5 text-[11px] text-stone-300">
            <span className="inline-flex items-center gap-1 text-emerald-300 font-medium">
              <Download className="w-3 h-3 text-emerald-400" />
              <span>PDF sofort per E-Mail gesendet</span>
            </span>
            <span>·</span>
            <span className="text-stone-400">{current.location}</span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 p-1 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Benachrichtigung schließen"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
