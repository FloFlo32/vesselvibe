import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VesselsSection from "@/components/VesselsSection";
import EventsSection from "@/components/EventsSection";
import DestinationsSection from "@/components/DestinationsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VesselsSection />
      <EventsSection />
      <DestinationsSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
