import HeroSection from "@/components/pages/landing/HeroSection";
import ParaSection from "@/components/pages/landing/ParaSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-16">
       
      <HeroSection />
      <ParaSection />
    </main>
  );
}