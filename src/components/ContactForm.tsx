"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/actions";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  plan: z.string().min(1, "Please select a plan"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const result = await submitLead(data);

    if (result.success) {
      toast.success("Request received. We'll contact you shortly.");
      reset();
    } else {
      toast.error(result.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#fffbeb]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tightest text-[#064e3b]">
            Begin Your <br />
            <span className="text-[#064e3b]/50">Quiet Revolution.</span>
          </h2>
          <p className="text-lg text-[#064e3b]/70 leading-relaxed">
            Speak with our specialist team today. We provide personalized 
            consultations for discerning homeowners.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {/* Name Field */}
              <div className="relative group">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Full Name"
                  className={cn(
                    "w-full bg-transparent border-b border-[#064e3b]/10 py-4 focus:outline-none focus:border-[#d97706] transition-all placeholder:text-[#064e3b]/30 placeholder:transition-opacity focus:placeholder:opacity-0",
                    errors.name && "border-red-400 focus:border-red-400"
                  )}
                />
                {errors.name && (
                  <span className="absolute -bottom-6 left-0 text-xs text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="relative group">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className={cn(
                    "w-full bg-transparent border-b border-[#064e3b]/10 py-4 focus:outline-none focus:border-[#d97706] transition-all placeholder:text-[#064e3b]/30 placeholder:transition-opacity focus:placeholder:opacity-0",
                    errors.email && "border-red-400 focus:border-red-400"
                  )}
                />
                {errors.email && (
                  <span className="absolute -bottom-6 left-0 text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number"
                  className={cn(
                    "w-full bg-transparent border-b border-[#064e3b]/10 py-4 focus:outline-none focus:border-[#d97706] transition-all placeholder:text-[#064e3b]/30 placeholder:transition-opacity focus:placeholder:opacity-0",
                    errors.phone && "border-red-400 focus:border-red-400"
                  )}
                />
                {errors.phone && (
                  <span className="absolute -bottom-6 left-0 text-xs text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Plan Interest Field */}
              <div className="relative group">
                <select
                  {...register("plan")}
                  className={cn(
                    "w-full bg-transparent border-b border-[#064e3b]/10 py-4 focus:outline-none focus:border-[#d97706] transition-all appearance-none cursor-pointer",
                    !register("plan").value && "text-[#064e3b]/30",
                    errors.plan && "border-red-400 focus:border-red-400"
                  )}
                >
                  <option value="" disabled>Select Plan Interest</option>
                  <option value="Essential">Essential Plan</option>
                  <option value="Premium">Premium Plan</option>
                  <option value="Estate">Estate Plan</option>
                </select>
                <ChevronDown className="absolute right-0 bottom-4 w-4 h-4 text-[#064e3b]/30 pointer-events-none group-focus-within:text-[#d97706] transition-colors" />
                {errors.plan && (
                  <span className="absolute -bottom-6 left-0 text-xs text-red-500">
                    {errors.plan.message}
                  </span>
                )}
              </div>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#064e3b] text-white rounded-full py-6 text-lg font-bold hover:bg-[#065f46] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#064e3b]/10"
              >
                {isSubmitting ? "Sending..." : "Request Call Back"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
