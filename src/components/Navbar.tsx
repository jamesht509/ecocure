"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Plans", href: "#plans" },
  { name: "Why Us", href: "#why-us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-[#fffbeb]/80 backdrop-blur-md border-b border-[#064e3b]/5 py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tightest text-[#064e3b] uppercase">
            Ecocure
          </span>
        </Link>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#064e3b]/70 hover:text-[#064e3b] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Right */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-[#064e3b] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#065f46] transition-all active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#064e3b]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[#064e3b]/10 p-8 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-semibold text-[#064e3b]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-[#064e3b] text-white px-6 py-4 rounded-full text-center font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
