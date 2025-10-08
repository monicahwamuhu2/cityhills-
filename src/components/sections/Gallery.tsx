// src/components/sections/Gallery.tsx
"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "/assets/gallery/1.JPG",
    alt: "CityHills community member",
    caption: "Empowering Youth",
  },
  {
    src: "/assets/gallery/2.JPG",
    alt: "Period Promoter educational material",
    caption: "Health Education",
  },
  {
    src: "/assets/gallery/3.JPG",
    alt: "Community workshop session",
    caption: "Community Workshop",
  },
  {
    src: "/assets/gallery/4.JPG",
    alt: "Period Promoter information",
    caption: "Awareness Campaign",
  },
  {
    src: "/assets/gallery/5.JPG",
    alt: "Community outreach program",
    caption: "Outreach Program",
  },
  {
    src: "/assets/gallery/6.JPG",
    alt: "Youth engagement activity",
    caption: "Youth Engagement",
  },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth / 2; // Half because we duplicate
    let animationId: number;

    const startAnimation = () => {
      animationId = requestAnimationFrame(function scroll() {
        if (!isPaused && scrollContainer) {
          const currentX = x.get();
          const newX = currentX - 3.0; // Slightly faster speed
          
          // Reset to create seamless loop
          if (Math.abs(newX) >= totalWidth) {
            x.set(0);
          } else {
            x.set(newX);
          }
          
          scrollContainer.style.transform = `translateX(${x.get()}px)`;
        }
        animationId = requestAnimationFrame(scroll);
      });
    };

    startAnimation();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPaused, x]);

  // Triple duplicate for smoother infinite scroll
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing moments of impact, growth, and community transformation
          </p>
        </motion.div>
      </div>

      {/* Scrolling Gallery - Full Width */}
      <div className="relative">
        {/* Enhanced gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 lg:w-56 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-20 pointer-events-none" />

        {/* Scrolling container */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 will-change-transform"
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (index % galleryImages.length) * 0.08 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-shrink-0 relative group cursor-pointer"
                style={{
                  width: '280px',
                  height: '360px',
                }}
              >
                {/* Image container with rounded corners */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Caption on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <p className="text-lg font-semibold">{image.caption}</p>
                  </motion.div>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pause indicator */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 italic">Hover to pause • Scroll paused</p>
        </motion.div>
      )}
    </section>
  );
}