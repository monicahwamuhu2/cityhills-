"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionContainer from "@/components/shared/SectionContainer";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function About() {
  return (
    <SectionContainer id="about" className="bg-white">
      {/* Vision Statement - Top */}
      <AnimatedSection>
        <div className="text-center max-w-5xl mx-auto mb-16">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 leading-relaxed">
            We envision a world where every young person discovers their purpose, 
            develops their strengths, and rises to make a global impact.
          </p>
        </div>
      </AnimatedSection>

      {/* Two Column Layout - Image + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        {/* Image Section */}
        <AnimatedSection>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/chi home page.png"
              alt="CityHills team members"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>

        {/* Content Section */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-6">
            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              About CityHills Initiatives
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              CityHills Initiatives is a youth-led nonprofit committed to equipping 
              the youth with the skills, mentorship, and opportunities they need to 
              rise with courage, build businesses, and lead change.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We believe that every young person carries untapped potential to 
              transform not only their own lives but also their communities. Through 
              mentorship programs, career development support, entrepreneurship 
              training, and financial literacy workshops, we are building pathways 
              that give young people the confidence to dream bigger and the tools to 
              turn those dreams into reality.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Mission Statement - Bottom */}
      <AnimatedSection delay={0.3}>
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 leading-relaxed">
            Our mission is to empower youth through education, leadership development, 
            skills training, mentorship, and entrepreneurship, creating a ripple effect 
            of transformation and growth.
          </p>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}