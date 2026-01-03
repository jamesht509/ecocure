"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Same-Day Service Available",
  "125+ Years Combined Experience",
  "Sustainable & Eco-Friendly Methods",
  "100% Satisfaction Guarantee",
  "Licensed & Insured Technicians",
  "Free Inspections & Estimates",
];

export function ComprehensiveProtection() {
  return (
    <section id="protection" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-[#064e3b] leading-tight">
              Professional Services Custom to Your Home
            </h2>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d97706]/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#d97706]" />
                  </div>
                  <span className="text-lg text-[#064e3b]/80 leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Scrollable Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                Our comprehensive protection methodology begins with a thorough understanding of your property's unique 
                characteristics. Every home presents distinct challenges based on its age, construction materials, 
                surrounding landscape, and local climate conditions. Our certified technicians conduct detailed inspections 
                that examine not just the visible signs of pest activity, but also potential entry points, moisture sources, 
                and environmental factors that could attract or sustain pest populations.
              </p>

              {/* Image Between Paragraphs */}
              <div className="w-full md:w-96 md:float-right md:ml-8 md:mb-6 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400"
                  alt="Technician inspecting home foundation"
                  className="w-full h-auto object-cover"
                />
              </div>

              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                Based on our findings, we develop a customized treatment plan that addresses both immediate concerns and 
                long-term prevention. Our approach integrates multiple strategies: exclusion techniques to seal entry points, 
                habitat modification to eliminate attractants, and targeted treatments using the most effective and 
                environmentally responsible products available. We prioritize methods that are safe for your family, pets, 
                and the local ecosystem while delivering superior results.
              </p>

              <p className="text-[#064e3b]/80 leading-relaxed text-lg">
                Ongoing monitoring and maintenance are essential components of our comprehensive protection program. 
                Regular follow-up visits allow us to assess treatment effectiveness, make necessary adjustments, and 
                address any new concerns before they become significant problems. Our commitment extends beyond the initial 
                treatment—we partner with you to maintain a pest-free environment year-round, providing peace of mind and 
                protecting your investment in your home.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

