import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle, Sparkles, Zap } from 'lucide-react';

function OfferSection() {
  return (
    <div className="relative group">
      {/* Soft outer glow — hidden on mobile to save height, fades in on hover */}
      <div className="absolute -inset-1 sm:-inset-2 lg:-inset-3 bg-gradient-to-r from-neon-cyan/20 via-neon-blue/20 to-neon-purple/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 sm:opacity-60 transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl" />

      <div className="relative rounded-lg sm:rounded-xl border border-neon-blue/15 bg-gradient-to-br from-dark-card/95 via-dark-card to-dark-card/95 transition-all duration-300 group-hover:border-neon-blue/30 shadow-[0_0_20px_rgba(0,168,255,0.06)]">
        {/* Gradient border overlay (subtle) */}
        <div className="absolute inset-0 rounded-lg sm:rounded-xl p-[1px] pointer-events-none">
          <div className="h-full w-full rounded-lg sm:rounded-xl bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20" />
        </div>
        <div className="absolute inset-[1px] rounded-lg sm:rounded-xl bg-dark-card pointer-events-none" />

        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] rounded-lg sm:rounded-xl pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-neon-blue/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-neon-purple/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative p-3 sm:p-5 lg:p-6">
          {/* ===== BADGES ROW ===== */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-wrap xs:flex-nowrap">
            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-neon-cyan/15 to-neon-blue/15 border border-neon-cyan/20 text-[10px] sm:text-xs font-semibold text-neon-cyan whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="hidden xs:inline">Limited Time Offer</span>
              <span className="xs:hidden">Limited Offer</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] sm:text-xs font-semibold text-amber-400 whitespace-nowrap">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="animate-pulse-slow">Ending Soon</span>
            </span>
          </div>

          {/* ===== MAIN CONTENT ===== */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4 lg:gap-6">
            {/* LEFT: Heading + Perks */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-tight sm:leading-snug">
                Kickstart Your{' '}
                <span className="gradient-text">AI Automation</span>
              </h3>
              <p className="text-[11px] sm:text-sm text-gray-500 mt-0.5 sm:mt-1 hidden sm:block">
                Scale your business with AI — at zero risk.
              </p>

              {/* PERKS: 2-col grid on mobile, inline-flex on desktop */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-2 sm:gap-x-5 gap-y-1 sm:gap-y-2 mt-1.5 sm:mt-2.5">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-neon-cyan/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neon-cyan" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                    <span className="text-gray-200 font-medium">Free</span>{' '}
                    <span className="hidden sm:inline">Automation </span>Setup
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neon-blue" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                    <span className="text-gray-200 font-medium">1 Month</span>{' '}
                    <span className="hidden sm:inline">Free </span>Trial
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-neon-purple/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neon-purple" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                    <span className="text-gray-200 font-medium">No</span> Commitment
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: CTA */}
            <div className="flex flex-col items-center lg:items-end shrink-0 pt-0.5 sm:pt-0">
              <Link
                to="/contact"
                className="group/btn inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-[11px] sm:text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,168,255,0.35)] hover:scale-105 active:scale-95 w-auto"
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Claim Your Offer</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Link>
              <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-600 mt-1 text-center lg:text-right leading-tight">
                Free setup • No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;