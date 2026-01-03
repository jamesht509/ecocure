import { supabase } from "@/lib/supabase";
import { PricingCard } from "./PricingCard";

export async function Pricing() {
  const { data: plans } = await supabase
    .from("plans")
    .select("*")
    .order("created_at", { ascending: true });

  if (!plans) return null;

  return (
    <section id="plans" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tightest text-[#064e3b]">
            Investment in <br />
            <span className="text-[#064e3b]/50">Pure Serenity.</span>
          </h2>
          <p className="text-lg text-[#064e3b]/70 leading-relaxed">
            Transparent pricing for non-toxic protection. Choose the plan that 
            best fits your property's requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.id}
              index={i}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={Array.isArray(plan.features) ? (plan.features as string[]) : []}
              isRecommended={plan.is_recommended}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-[#064e3b]/60 text-sm">
            All plans include a 100% success guarantee and ecological compliance certification.
          </p>
        </div>
      </div>
    </section>
  );
}
