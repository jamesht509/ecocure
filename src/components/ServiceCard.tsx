"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string | null;
  iconName: string | null;
  className?: string;
}

export function ServiceCard({ title, description, iconName, className }: ServiceCardProps) {
  const Icon = (iconName && (Icons as any)[iconName]) ? (Icons as any)[iconName] : Icons.Settings;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative p-8 rounded-3xl border border-stone-200 bg-white flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all",
        className
      )}
    >
      <div>
        <div className="w-12 h-12 rounded-2xl bg-[#fffbeb] flex items-center justify-center mb-6 group-hover:bg-[#d97706]/10 transition-colors">
          <Icon className="w-6 h-6 text-[#d97706]" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-[#064e3b]">{title}</h3>
        <p className="text-[#064e3b]/70 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

