// src/components/sections/Programs.tsx
"use client";

import { motion } from "framer-motion";
import { Monitor, Users, HandHeart } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Tech",
    icon: Monitor,
    description:
      "CityHills Initiatives Tech Community empowers young people to grow, learn, and thrive in technology through access to jobs, internships, and curated learning resources. Connect, share, and build with a network of tech-minded leaders shaping the future.",
  },
  {
    number: "02",
    title: "Leadership",
    icon: Users,
    description:
      "At CityHills Leadership & Empowerment Community, we create space for young people to grow, learn, and build themselves in every area of life. This is a movement that nurtures purpose, confidence, and leadership for a bold generation rising to make an impact.",
  },
  {
    number: "03",
    title: "Outreach",
    icon: HandHeart,
    description:
      "CityHills believes in the recycling of knowledge, passing it forward to create lasting impact. Through our outreach programs, we share what we've learned with those who may not have had access to the same opportunities, ensuring growth and empowerment reach every corner of our communities.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "serif" }}
          >
            Our Communities & Programs
          </h2>
        </motion.div>

        {/* Yellow background container */}
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-400 to-yellow-500 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          {/* Programs Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                className="group"
              >
                {/* White card */}
                <div className="h-full bg-white rounded-[1.5rem] p-8 relative shadow-lg group-hover:shadow-2xl transition-all duration-300 transform">
                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-gray-900">
                      {program.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "serif" }}
                  >
                    {program.title}
                  </h3>

                  {/* Icon */}
                  <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                    <program.icon className="w-24 h-24 text-gray-900 stroke-[1.5]" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-base">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
