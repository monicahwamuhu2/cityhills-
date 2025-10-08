// src/components/sections/Team.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Naya Okonkwo",
    position: "Executive Director",
    bio: "Naya is a Youth Empowerment Coach, Speaker, and Digital Skills Advocate committed to unlocking the potential of young people. Her work focuses on equipping the next generation with the clarity, confidence, and competence to lead. Holding a Master’s degree in Managing Innovation and IT from the University of Salford, she trains and mentors young people to gain future-ready skills.",
    image: "/assets/profile/naya okonkwo.jpg",
    linkedin: "https://linktr.ee/nayaokonkwo",
  },
  {
    name: "Nana Quansah",
    position: "Assistant Exec. Director",
    bio: "Nana is a visionary leader, author, and entrepreneur. He is the founder of Akwaaba Bytes and the lead of the School of Astounding Results, a community that empowers visionaries. Through his work, he equips entrepreneurs with the knowledge and tools they need to succeed and make a lasting impact.",
    image: "/assets/profile/nana quansah.jpg",
    linkedin: "https://www.linkedin.com/in/nana-the-mindset-mentor/",
  },
  {
    name: "Mercy Yiepeng",
    position: "Administrative Assistant",
    bio: "Mercy works remotely as a Client Service and Fulfillment Specialist across different countries. She holds a B.A. in Linguistics and Communication from the University of Port Harcourt. She is passionate about effective communication, improving remote work productivity, and she is passionate about personal growth.",
    image: "/assets/profile/mercy elisha.jpeg",
    linkedin: "https://www.linkedin.com/in/mercyelisha/",
  },
  {
    name: "Julie Kiley",
    position: "Fundraising Manager",
    bio: "Julie Kiley is a multidisciplinary professional with a background in science, International Relations, Monitoring and Evaluation and Development. She holds a Master’s degree in Diplomacy, Development, and International Security and is passionate about global governance, sustainable development, and evidence-based approaches that promote institutional strength and social resilience.",
    image: "/assets/profile/julie kiley.jpeg",
   
  },
  {
    name: "Joel Omuya",
    position: "Programs Lead",
    bio: "Joel is an education innovator and Pan-African youth leader. He founded Joel Academy, empowering 10,000+ students with free learning resources, co-convenes The African Student Summit (TASS), and is developing RicaLearn, an AI-powered platform to transform education for African learners.",
    image: "/assets/profile/joel omuya.jpeg",
    linkedin: "https://www.linkedin.com/in/omuya-joel-60846921a/",
  },
  {
    name: "Alicia Oluoch",
    position: "Community Manager",
    bio: "Alicia is a creative and architecture student with a passion for design, visual storytelling, and innovation. She blends artistic vision with practical skills to explore new ways of shaping spaces and experiences, always pushing boundaries and imagining what's next.",
    image: "/assets/profile/alicia oluoch.JPG",
    linkedin: "https://www.linkedin.com/in/alicia-oluoch/",
  },
  {
    name: "Olivia Seleiyan",
    position: "Assistant Community Manager",
    bio: "Olivia Seleiyan is a community development practitioner dedicated to empowering underserved populations in Kenya. With experience in mental health support, financial inclusion, and youth empowerment, she combines strategic thinking and compassion to drive sustainable social change.",
    image: "/assets/profile/olivia.jpeg",
    linkedin: "https://www.linkedin.com/in/olivia-seleiyan/",
  },

  {
    name: "Blessing Faluyi",
    position: "Social Media Manager",
    bio: "Blessing is the Social Media Manager of CityHills Initiatives, she leads the creation and execution of engaging digital content that amplifies the community’s mission to empower African youth. She is passionate about using storytelling and strategy to build meaningful online connections, drive impact, and showcase the transformative work CityHills is doing across Africa.",
    image: "/assets/profile/blessing faluyi.JPG",
    linkedin: "https://www.linkedin.com/in/blessing-faluyi-9a57071b9/",
  },
  {
    name: "David Nmeka",
    position: "Brand Manager",
    bio: "David is a creative designer passionate about using design for both social impact and brand communication. Through his work with Cityhills Initiatives, a tech NGO, he has created impactful visuals for educational events, workshops, and digital campaigns under the inspiring “Fearless Giants” movement.",
    image: "/assets/profile/david.png",
    linkedin: "https://www.linkedin.com/in/david-nmeka-335b672a2/",
  },
];

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
            The Team
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
              </div>

              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: hoveredIndex === index 
                    ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)'
                }}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                {/* Default Content (always visible) */}
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? -20 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-200 font-medium mb-2">
                    {member.position}
                  </p>
                </motion.div>

                {/* Hover Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                    display: hoveredIndex === index ? 'block' : 'none',
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-3"
                >
                  {/* Bio */}
                  <p className="text-xs md:text-sm text-gray-100 leading-relaxed line-clamp-3 md:line-clamp-4">
                    {member.bio}
                  </p>

                  {/* LinkedIn Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg text-white text-xs md:text-sm font-medium transition-colors duration-200"
                  >
                    <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Connect</span>
                  </a>
                </motion.div>
              </div>

              {/* Subtle border on hover */}
              <div 
                className="absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none"
                style={{
                  border: '2px solid rgba(255,255,255,0.2)',
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Close overlay on mobile when tapping outside */}
        {hoveredIndex !== null && (
          <div
            className="fixed inset-0 z-0 md:hidden"
            onClick={() => setHoveredIndex(null)}
          />
        )}
      </div>
    </section>
  );
}