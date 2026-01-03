"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Microscope, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Scientific Approach",
    description: "We use laboratory-tested protocols and entomological data to target pests at the source with surgical precision.",
  },
  {
    icon: Leaf,
    title: "Eco-Certified",
    description: "Our solutions are 100% biodegradable and non-toxic, ensuring the safety of your family, pets, and the local ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Estate Protection",
    description: "Specialized in large-scale property management with a focus on biological exclusion and long-term prevention.",
  },
  {
    icon: Headphones,
    title: "Concierge Support",
    description: "Every client is assigned a dedicated specialist. We offer 24/7 priority support and same-day emergency response.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-[#0f291e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tightest text-[#faf9f6]">
              Why Discerning Homeowners <br />
              <span className="text-[#d4b57e]">Choose Ecocure.</span>
            </h2>
            <p className="text-lg text-[#faf9f6]/60 mb-12 leading-relaxed max-w-xl">
              We've redefined pest control as a premium home service. Our commitment 
              to science, safety, and service excellence is why we're trusted by the 
              region's most prestigious estates.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#faf9f6]/5 border border-[#faf9f6]/10 flex items-center justify-center shadow-sm">
                    <reason.icon className="w-6 h-6 text-[#d4b57e]" />
                  </div>
                  <h3 className="font-bold text-xl text-[#faf9f6]">{reason.title}</h3>
                  <p className="text-[#faf9f6]/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-4xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f291e]/20 to-[#0f291e]/60 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
              alt="Premium Home Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 right-10 z-20 backdrop-blur-md bg-[#0f291e]/40 border border-[#faf9f6]/10 p-8 rounded-3xl">
              <p className="text-[#faf9f6] text-lg font-medium italic mb-4">
                "The most discrete and professional service I've ever experienced. 
                They don't just solve problems; they provide peace of mind."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#faf9f6]/10 overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=estate-owner" alt="Client" />
                </div>
                <div>
                  <p className="text-[#faf9f6] font-bold">Elizabeth Kensington</p>
                  <p className="text-[#d4b57e] text-sm font-medium">Estate Owner, Greenwich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

