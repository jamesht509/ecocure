"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function submitLead(formData: {
  name: string;
  email: string;
  phone: string;
  plan: string;
  message?: string;
}) {
  try {
    const { error } = await supabase.from("leads").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_interest: formData.plan,
        message: formData.message || "Plan Inquiry via Contact Form",
      },
    ]);

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

