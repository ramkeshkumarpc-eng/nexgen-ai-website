import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle, Sparkles, Shield, Zap } from 'lucide-react';

function OfferSection() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/10 via-neon-blue/10 to-neon-purple/10 rounded-2xl blur-2xl opacity-60" />

      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-neon-blue/20 bg-gradient-to-br from-dark-card via-dark-card/95 to-dark-card">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl" />

        <div className="relative p-5 sm:p-7 md:p-8">
          {/* Top badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-neon-cyan/15 to-neon-blue/15 border border-neon-cyan/20 text-xs font-semibold text-neon-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Time Offer
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
              <Clock className="w-3 h-3" />
              Ending Soon
            </span>
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
            {/* Left side — Value proposition */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Kickstart Your{' '}
                <span className="gradient-text">AI Automation</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3">
                Get everything you need to scale your business with AI — at zero risk.
              </p>

              {/* Offer perks */}
              <div className="flex flex-wrap gap-y-2 gap-x-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-neon-cyan" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    <span className="text-white font-semibold">Free</span> Automation Setup
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/10 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-neon-blue" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    <span className="text-white font-semibold">1 Month</span> Free Trial
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-neon-purple/10 flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-neon-purple" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    <span className="text-white font-semibold">No</span> Commitment
                  </span>
                </div>
              </div>
            </div>

            {/* Right side — CTA */}
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,168,255,0.3)] hover:scale-105"
              >
                <Zap className="w-4 h-4" />
                Claim Your Offer
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 text-center lg:text-left">
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