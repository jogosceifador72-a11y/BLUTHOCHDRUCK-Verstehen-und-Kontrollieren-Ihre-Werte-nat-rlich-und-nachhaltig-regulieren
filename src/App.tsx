/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { BloodPressureChecker } from './components/BloodPressureChecker';
import { FourWeekPlan } from './components/FourWeekPlan';
import { CurriculumSneakPeek } from './components/CurriculumSneakPeek';
import { AudienceFit } from './components/AudienceFit';
import { PricingOffer } from './components/PricingOffer';
import { FaqSection } from './components/FaqSection';
import { AuthorSection } from './components/AuthorSection';
import { Footer } from './components/Footer';
import { PurchaseNotification } from './components/PurchaseNotification';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#04110a] text-stone-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Top Bar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Book Showcase */}
        <Hero />

        {/* 2. Core Value Proposition: The 4 everyday hurdles eliminated */}
        <ProblemSolution />

        {/* 3. Interactive Blood Pressure Value Checker */}
        <BloodPressureChecker />

        {/* 4. The 4-Week Action Plan (Woche für Woche) */}
        <FourWeekPlan />

        {/* 5. 30-Page Book Outline & Chapter Highlights */}
        <CurriculumSneakPeek />

        {/* 6. Audience Fit: Für wen / Nicht für Sie */}
        <AudienceFit />

        {/* 7. Comprehensive Offer & Checkout Box (25,85 €) */}
        <PricingOffer />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. About the Author */}
        <AuthorSection />
      </main>

      {/* Footer with social media contact buttons */}
      <Footer />

      {/* Floating Bottom-Left Confirmed Purchase Notification (Sem nomes) */}
      <PurchaseNotification />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar />
    </div>
  );
}
