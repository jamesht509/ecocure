"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const pests = [
  {
    name: "Ants",
    image: "https://images.unsplash.com/photo-1622329623838-882f091005f3?auto=format&fit=crop&q=80&w=400",
    description: "Destroys wood structures and contaminates food sources. Can cause significant property damage and health risks.",
  },
  {
    name: "Mice",
    image: "https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?auto=format&fit=crop&q=80&w=400",
    description: "Gnaws through electrical wiring and insulation. Spreads disease through droppings and can cause fires.",
  },
  {
    name: "Wasps",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
    description: "Aggressive stinging behavior threatens family safety. Nests can damage structures and pose serious health risks.",
  },
  {
    name: "Ticks",
    image: "https://images.unsplash.com/photo-1631557348126-2852233f2695?auto=format&fit=crop&q=80&w=400",
    description: "Transmits Lyme disease and other serious illnesses. Thrives in yards and poses year-round health threats.",
  },
];

export function CommonPests() {
  return (
    <section id="pests" className="py-32 bg-[#fffbeb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#064e3b]">
            Identify Your Problem
          </h2>
          <p className="text-lg text-[#064e3b]/70 leading-relaxed">
            Proper pest identification is the cornerstone of effective treatment. Each pest species requires a unique approach 
            tailored to its biology, behavior, and habitat. Our expert technicians begin every service with a comprehensive 
            inspection to accurately identify the specific pest species, assess the extent of the infestation, and determine 
            the most effective treatment strategy. This precision ensures we target the root cause, not just the symptoms, 
            providing you with lasting protection for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pests.map((pest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container - Top Half */}
              <div className="aspect-square overflow-hidden bg-stone-50">
                <img
                  src={pest.image}
                  alt={pest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content - Bottom Half */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-[#064e3b] mb-3">
                  {pest.name}
                </h3>
                <p className="text-sm text-[#064e3b]/70 leading-relaxed mb-4 line-clamp-2">
                  {pest.description}
                </p>
                <Link
                  href={`#${pest.name.toLowerCase()}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#d97706] hover:text-[#b45309] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

