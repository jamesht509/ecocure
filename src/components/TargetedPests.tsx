"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const pests = [
  {
    name: "Ants",
    scientific: "Formicidae",
    image: "https://images.unsplash.com/photo-1622329623838-882f091005f3?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Rodents",
    scientific: "Rodentia",
    image: "https://images.unsplash.com/photo-1452721226468-f95fb66ebf83?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Termites",
    scientific: "Isoptera",
    image: "https://images.unsplash.com/photo-1590634159381-8d269929288f?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Mosquitos",
    scientific: "Culicidae",
    image: "https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Ticks",
    scientific: "Ixodida",
    image: "https://images.unsplash.com/photo-1631557348126-2852233f2695?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Wasps",
    scientific: "Vespidae",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
  },
];

export function TargetedPests() {
  return (
    <section id="pests" className="py-32 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tightest text-[#0f291e]">
            Targeted Pests. <br />
            <span className="text-[#0f291e]/40">Precision Control.</span>
          </h2>
          <p className="text-lg text-[#0f291e]/60 leading-relaxed max-w-2xl">
            Our specialized protocols are designed to target specific species with 
            minimal environmental impact and maximum effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {pests.map((pest, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                y: -10,
                borderColor: "#d4b57e",
              }}
              className="group relative aspect-square bg-white rounded-2xl border border-[#0f291e]/5 shadow-sm overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="flex-1 p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={pest.image}
                  alt={pest.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Bottom Label */}
              <div className="p-5 border-t border-[#0f291e]/5 flex items-center justify-between bg-white group-hover:bg-[#faf9f6] transition-colors">
                <span className="font-bold text-[#0f291e] tracking-tight">{pest.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#d4b57e] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

