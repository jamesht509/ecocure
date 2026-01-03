"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { TablesInsert } from "@/types/supabase";

type LeadInsert = TablesInsert<'leads'>;

export async function submitLead(formData: {
  name: string;
  email: string;
  phone: string;
  plan: string;
  message?: string;
}) {
  try {
    const leadData: LeadInsert = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service_interest: formData.plan,
      message: formData.message || "Plan Inquiry via Contact Form",
    };

    const { error } = await supabase.from("leads").insert(leadData as any);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error("Submission error:", error);
    return { success: false, error: error.message || "An unexpected error occurred" };
  }
}

