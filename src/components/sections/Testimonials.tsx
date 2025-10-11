// src/components/sections/Testimonials.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Rufina, Urbanist } from "next/font/google";

const rufina = Rufina({ 
  weight: ['400', '700'],
  subsets: ['latin'],
});

const urbanist = Urbanist({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const testimonials = [
  {
    name: "Christianah",
    quote: "All I can say is wow! This session has really opened my eyes to the behind the scenes of job applications and I'd definitely start applying these tips... I'm always very lazy tailoring my CV for a particular role, but I'd start doing that low...it has been a very insightful session. Thank you so much Cityhills initiatives",
    rating: 5,
  },
  {
    name: "Olivia",
    quote: "Very much appreciated, got to learn alot especially today.90% of what i didn't know was taught",
    rating: 5,
  },
  {
    name: "Brian",
    quote: "In a rate of 1 to 5. I will say a 3. Got insight on application for a job. Been keen in applying keeping in mind key roles. And lastly using Quillbot. That has been a plus",
    rating: 3,
  },
  {
    name: "Blessing",
    quote: "It's been enlightening. I have learnt how to position my self for the opportunities I need, also I have optimized my LinkedIn page. Also, the prompts shared during the last session is really helpful and informative. I look forward to applying them to my page.",
    rating: 5,
  },
  {
    name: "Isaac",
    quote: "I love today's presentation and have come to be grateful for niching my CV for specific roles and some AI prompting for by passing the ATS",
    rating: 5,
  },
  {
    name: "Alicia Oluoch",
    quote: "CityHills Initiatives has truly changed lives with their dedication and support. Their efforts have given hope to so many who want to deep their feet into tech. I'm proud to be part of this mission.",
    role: "Community Manager",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className={`${rufina.className} text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3`}>
            Community <span className="text-yellow-400">Stories</span>
          </h2>
          <p className={`${urbanist.className} text-gray-600 text-base md:text-lg max-w-2xl mx-auto`}>
            Real impact, real people, real transformation
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-[450px] md:h-[400px] overflow-visible">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                  {/* Testimonial Card */}
                  <div className="relative">
                    {/* Animated gradient border */}
                    <motion.div
                      className="absolute -inset-[2px] rounded-3xl"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6, #fbbf24, #3b82f6, #fbbf24)",
                        backgroundSize: "400% 400%",
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Card content */}
                    <div className="relative bg-white rounded-3xl p-6 md:p-10 shadow-xl">
                      {/* Quote Mark */}
                      <div className="text-blue-400 text-6xl md:text-7xl leading-none mb-4 font-serif opacity-20">
                        &ldquo;
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-4 md:mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 md:w-5 md:h-5 ${
                              i < testimonials[currentIndex].rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-300 text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className={`${urbanist.className} text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8`}>
                        {testimonials[currentIndex].quote}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg">
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                        <div>
                          <p className={`${rufina.className} font-bold text-gray-900 text-lg md:text-xl`}>
                            {testimonials[currentIndex].name}
                          </p>
                          {testimonials[currentIndex].role && (
                            <p className={`${urbanist.className} text-gray-600 text-sm md:text-base`}>
                              {testimonials[currentIndex].role}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:scale-110 z-10 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:scale-110 z-10 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-blue-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className={`${urbanist.className} text-center text-gray-500 mt-4 text-sm md:text-base`}>
          {currentIndex + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}