// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import PastPrograms from "@/components/sections/PastPrograms";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <PastPrograms />
      <Stats />
      <Testimonials />
      <Team />
      <Gallery />
      <CTA />
      
    </>
  );
}