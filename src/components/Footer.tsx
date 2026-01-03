import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const pests = [
  "Ants",
  "Bed Bugs",
  "Bees",
  "Cockroaches",
  "Fleas",
  "Mice",
  "Mosquitoes",
  "Rats",
  "Spiders",
  "Ticks",
  "Wasps",
  "Termites",
];

const locations = [
  "Boston",
  "Worcester",
  "Cambridge",
  "Springfield",
  "Lowell",
  "Brockton",
  "Quincy",
  "Lynn",
  "New Bedford",
  "Fall River",
];

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-amber-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold tracking-tightest text-amber-50 uppercase">
                ECOCURE
              </span>
            </Link>
            <p className="text-amber-50/80 max-w-sm leading-relaxed">
              Serving Massachusetts since 2024. Premium pest management services for homes and businesses across the state.
            </p>
          </div>

          {/* Pests Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-50 mb-6">
              Common Pests
            </h4>
            <ul className="space-y-3">
              {pests.map((pest) => (
                <li key={pest}>
                  <Link
                    href={`#${pest.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-amber-50/70 hover:text-amber-50 transition-colors text-sm"
                  >
                    {pest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-50 mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <Link
                    href={`#${location.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-amber-50/70 hover:text-amber-50 transition-colors text-sm"
                  >
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-amber-50 mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div>
                <a
                  href="tel:+15551234567"
                  className="text-2xl font-bold text-amber-50 hover:text-[#d97706] transition-colors block"
                >
                  (555) 123-4567
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@ecocure.com"
                  className="text-amber-50/80 hover:text-amber-50 transition-colors text-sm block"
                >
                  info@ecocure.com
                </a>
              </div>
              <div className="text-amber-50/70 text-sm leading-relaxed">
                123 Main Street<br />
                Boston, MA 02101
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-amber-50/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-amber-50/60">
            © 2024 Ecocure. All rights reserved.
          </p>
          <div className="flex items-center gap-2 bg-[#d97706]/20 px-4 py-2 rounded-lg border border-[#d97706]/30">
            <ShieldCheck className="w-4 h-4 text-[#d97706]" />
            <span className="text-sm font-semibold text-amber-50">
              Proud Members of NPMA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

