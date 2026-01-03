"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#fffbeb]">
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #064e3b 0%, #d97706 100%)' }}
        />
        <div 
          className="absolute top-[20%] -right-[15%] w-[60%] h-[60%] rounded-full opacity-10 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #d97706 0%, #064e3b 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064e3b]/5 border border-[#064e3b]/10 text-[#064e3b]/70 text-[13px] font-medium mb-10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Redefining Premium Pest Management</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-[90px] font-bold tracking-tightest text-[#064e3b] mb-8 leading-[0.95] md:leading-[0.9]">
            Scientific protection. <br />
            <span className="text-[#064e3b]/50">Absolute peace of mind.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-[#064e3b]/70 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Premium pest management for homes <br className="hidden md:block" />
            that demand the best.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button 
              size="lg" 
              className="rounded-full px-10 h-14 bg-[#064e3b] hover:bg-[#065f46] text-white shadow-xl shadow-[#064e3b]/20 group font-bold"
              asChild
            >
              <Link href="#contact" className="flex items-center gap-2">
                Schedule Inspection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-10 h-14 border-[#064e3b]/20 text-[#064e3b]/80 hover:text-[#064e3b] bg-white/50 backdrop-blur-sm shadow-sm"
              asChild
            >
              <Link href="#process">
                Our Process
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#064e3b]/50 font-bold">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#064e3b]/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
