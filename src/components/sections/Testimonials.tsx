// src/components/sections/Testimonials.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CityHills Initiatives has truly changed lives with their dedication and support. Their efforts have given hope to so many who want to deep their feet into tech. I'm proud to be part of this mission.",
    author: "Alicia Oluoch",
    role: "Community Manager",
  },
  
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="space-y-16 md:space-y-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="max-w-5xl mx-auto text-center"
            >
              {/* Quote */}
              <blockquote className="mb-8">
                <p 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed"
                  style={{ fontFamily: 'serif' }}
                >
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-gray-900"></div>
                <p className="text-base md:text-lg text-gray-900 font-medium">
                  {testimonial.author}, <span className="font-normal">{testimonial.role}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}