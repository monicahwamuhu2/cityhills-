// src/components/sections/PastPrograms.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

// Carousel images for Tech Skill Up Bootcamp Year Book
const carouselImages = [
  "/assets/yearbook/cover.jpg",
  "/assets/yearbook/1.jpg",
  "/assets/yearbook/2.jpg",
  "/assets/yearbook/3.jpg",
  "/assets/yearbook/4.jpg",
  "/assets/yearbook/5.jpg",
  "/assets/yearbook/6.jpg",
  "/assets/yearbook/7.jpg",
  "/assets/yearbook/8.jpg",
  "/assets/yearbook/9.jpg",
  "/assets/yearbook/10.jpg",
  "/assets/yearbook/11.jpg",
  "/assets/yearbook/12.jpg",
  "/assets/yearbook/13.jpg",
];

const pastPrograms = [
  {
    title: "Tech Skill-Up Bootcamp in partnership with Possible Youth Africa",
    description: "We recently ran the Tech Skill-Up Boot Camp, a 4-week, completely free program designed to transform digital skills and career potential. Over the course, participants went through seven life-changing courses: UI/UX Design – creating stunning user experiences Digital Marketing – mastering the art of online influence Data Analysis – turning numbers into powerful insights Frontend Development – building beautiful websites Backend Development – powering the digital world Artificial Intelligence (AI) – exploring cutting-edge AI applications Agile Methodology (AM) – learning efficient project management strategies In partnership with Possible Youth, it wasn’t just training — it was a gateway for participants to become fearless digital giants.",
  },
  {
    title: "Virtual Digital Literacy Workshop",
    description: "We hosted a transformative 3-day virtual workshop led by media expert Degold David, designed to help participants build confidence and level up their digital skills — all for free. Over the sessions, participants explored: Digital Confidence & Productivity Google Workspace & Scheduling Tools Canva & Notion for Organization AI & Virtual Platforms (ChatGPT + Zoom) Plus, bonus tips to help you work smarter, not harder. Whether tech-shy or simply seeking a digital glow-up, this workshop empowered attendees to show up confidently in the digital world.",
  },
  {
    title: "Pad Drive in Kenya and Nigeria- Community Outreach",
    description: "We were proud to launch our Empower the Young outreach project across secondary schools in Nigeria, Kenya, and Ghana. The project focused on providing young girls with essential menstrual hygiene products and education, because dignity, confidence, and opportunity should never be out of reach. It wasn’t just an outreach; it was empowerment. And it was only the beginning.",
  },
  {
    title: "No Degree, No Problem (Breaking into Tech)- Online Webinar",
    description: "In this powerful session, we were joined by an incredible lineup of speakers — Divine Ukonu, Learner Community Experience Coordinator at ALX Nigeria; Emmanuel Samuel, Technical Recruiter & Talent Acquisition Specialist; Sophie Okonkwo, Global Talent Acquisition Leader, Speaker, and one of Africa’s Top 100 Career Women; and Ejumade Olaniyi, an accomplished talent professional. Together, they unpacked the new rules of breaking into tech , sharing real stories, insider strategies, and practical steps to help aspiring professionals rise, regardless of their background or degree.",
  },
  {
    title: "LinkedIn Mastery Workshop - 3 day Online Workshop",
    description: "A three-day intensive workshop teaching participants how to optimize their LinkedIn profiles, build a professional network, create engaging content, and leverage the platform for career opportunities.",
  },
  {
    title: "Purpose & Goal Resetting - Soft Skills Webinar",
    description: "An empowering session led by Caleb Shalley, where we dove deep into rediscovering purpose, realigning personal and professional goals, and mastering the soft skills needed to bring them to life. Together, we explored how to align our actions with our passions and craft a clear, intentional roadmap for lasting success.",
  },
  {
    title: "Women Taking Charge - Women's Day Webinar",
    description: "To celebrate International Women’s Day, we hosted a transformative webinar focused on empowering African women to take charge, break barriers, and redefine the rules. Our speakers shared insights on: The experience of African women The journey of breaking barriers Challenges faced and how to rise above them The session featured Margaret Ogbolu, Policy Advisor & UNODC Delegate; Monicah Wamuhu, Founder of @geek_ssters; Nana Quansah, Mindset Coach; Nayah Okonkwo, Project Manager & Founder/Executive Director of CityHills Initiatives; and Alicia Oluoch, Architecture student and Community Lead of CityHills Initiatives.",
  },
];

export default function PastPrograms() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
  });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Auto-play slideshow
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
            Preview of our past programs
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-8"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
                <div className="flex">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0"
                    >
                      <div className="relative h-[500px] lg:h-[600px] bg-gray-900 rounded-3xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`Tech Skill Up Bootcamp Year Book - Page ${index + 1}`}
                          fill
                          className="object-contain"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                onClick={scrollPrev}
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 w-12 h-12 rounded-full"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </Button>
              <Button
                onClick={scrollNext}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10 w-12 h-12 rounded-full"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </Button>
            </div>
          </motion.div>

          {/* Right: Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {pastPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800 transition-colors duration-200"
                >
                  <span className="text-white text-base md:text-lg font-medium pr-4">
                    {program.title}
                  </span>
                  <div className="flex-shrink-0">
                    {expandedIndex === index ? (
                      <Minus className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                        {program.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}