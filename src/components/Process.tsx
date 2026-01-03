"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Analysis",
    description: "Our experts conduct a comprehensive analysis of your property's unique ecosystem.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We develop a bespoke, non-toxic protocol tailored to your architectural requirements.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Precision application by certified specialists, ensuring zero disruption to your environment.",
  },
  {
    number: "04",
    title: "Vigilance",
    description: "Ongoing monitoring and adaptive protection to maintain your home's integrity.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-emerald-950 text-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tightest text-white">
            The Ecocure <br />
            <span className="text-[#d97706]">Methodology.</span>
          </h2>
          <p className="text-xl text-amber-50/80 leading-relaxed">
            Our approach is rooted in biological science and architectural respect. 
            We protect your investment with surgical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-5xl font-bold text-amber-50/10 mb-6 group-hover:text-[#d97706] transition-colors">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-amber-50/70 leading-relaxed group-hover:text-amber-50/90 transition-colors">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-6 w-12 h-px bg-amber-50/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

