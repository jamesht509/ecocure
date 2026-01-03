"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string | null;
  features: string[];
  isRecommended: boolean;
  index: number;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isRecommended,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative flex flex-col p-10 rounded-4xl border transition-all duration-500 bg-white",
        isRecommended
          ? "border-[#064e3b] ring-1 ring-[#064e3b] shadow-xl shadow-[#064e3b]/5"
          : "border-stone-200 shadow-sm hover:border-[#d97706]/30"
      )}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#064e3b] text-white px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
          Recommended
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-medium text-[#064e3b]/60 mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-light tracking-tighter text-[#064e3b]">
            {price}
          </span>
          <span className="text-[#064e3b]/50 font-medium">/mo</span>
        </div>
        <p className="mt-4 text-[#064e3b]/70 text-sm leading-relaxed min-h-[40px]">
          {description}
        </p>
      </div>

      <div className="flex-1 space-y-4 mb-10">
        <div className="h-px bg-stone-200 w-full mb-6" />
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#fffbeb] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-[#d97706]" />
            </div>
            <span className="text-[#064e3b]/80 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        variant={isRecommended ? "default" : "outline"}
        className={cn(
          "w-full rounded-2xl py-6 text-sm font-bold tracking-tight transition-all duration-300",
          isRecommended 
            ? "bg-[#064e3b] hover:bg-[#065f46] text-white" 
            : "border-stone-200 hover:bg-[#fffbeb] text-[#064e3b]"
        )}
        asChild
      >
        <a href="#contact">Select Plan</a>
      </Button>
    </motion.div>
  );
}

