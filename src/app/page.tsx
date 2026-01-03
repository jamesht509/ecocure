import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CommonPests } from "@/components/CommonPests";
import { Process } from "@/components/Process";
import { ComprehensiveProtection } from "@/components/ComprehensiveProtection";
import { MeetYourExperts } from "@/components/MeetYourExperts";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CommonPests />
      <ComprehensiveProtection />
      <MeetYourExperts />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}

