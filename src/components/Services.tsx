import { supabase } from "@/lib/supabase";
import { ServiceCard } from "./ServiceCard";
import { cn } from "@/lib/utils";

export async function Services() {
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("created_at", { ascending: true });

  if (!services) return null;

  return (
    <section id="services" className="py-32 bg-[#fffbeb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tightest text-[#064e3b]">
              Uncompromising Standards. <br />
              <span className="text-[#064e3b]/50">Superior Results.</span>
            </h2>
            <p className="text-lg text-[#064e3b]/70 leading-relaxed">
              We don't just solve problems; we prevent them. Our methodology combines 
              scientific precision with ecological responsibility.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-[#064e3b]/10 mx-12 mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.icon_name}
              className={cn(
                i === 0 ? "lg:col-span-2" : "lg:col-span-1"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
