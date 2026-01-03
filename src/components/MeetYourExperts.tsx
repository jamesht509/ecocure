"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Clock, Award } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    text: "Background Checked",
  },
  {
    icon: GraduationCap,
    text: "Licensed & Certified",
  },
  {
    icon: Clock,
    text: "Punctual & Professional",
  },
  {
    icon: Award,
    text: "Continuous Training",
  },
];

export function MeetYourExperts() {
  return (
    <section id="experts" className="py-32 bg-emerald-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image with Badge Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=600"
                alt="Professional technician in uniform"
                className="w-full h-full object-cover"
              />
              {/* Satisfaction Guarantee Badge */}
              <div className="absolute top-6 right-6 bg-[#d97706] text-white px-6 py-3 rounded-lg shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wider mb-1">
                  Guarantee
                </div>
                <div className="text-lg font-bold">
                  100% Satisfaction
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white leading-tight">
              Trained and Knowledgeable Technicians
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-white/90 leading-relaxed">
                Our technicians undergo rigorous training that combines classroom education with extensive hands-on field 
                experience. Every team member completes a comprehensive certification program covering pest biology, 
                identification techniques, treatment methodologies, and safety protocols. This foundation ensures they can 
                accurately diagnose problems and implement the most effective solutions for your specific situation.
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                Beyond initial certification, our technicians participate in ongoing education programs that keep them current 
                with the latest industry developments, treatment innovations, and regulatory requirements. We invest in 
                continuous training because we understand that pest control is both an art and a science—requiring not just 
                technical knowledge, but also the experience and judgment that comes from working with thousands of homes 
                across Massachusetts. This commitment to excellence means you can trust that our team brings both expertise 
                and professionalism to every service call.
              </p>
            </div>

            {/* Key Promises Grid */}
            <div className="grid grid-cols-2 gap-6">
              {promises.map((promise, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#d97706]/20 flex items-center justify-center">
                    <promise.icon className="w-6 h-6 text-[#d97706]" />
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {promise.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

