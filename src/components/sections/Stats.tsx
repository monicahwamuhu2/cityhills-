// src/components/sections/Stats.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 1000, label: "Social Media Impact", suffix: "+" },
  { value: 300, label: "Community", suffix: "+" },
  { value: 6, label: "Online Programs", suffix: "" },
  { value: 4, label: "Countries", suffix: "" },
];

function AnimatedNumber({ value, suffix = "", prefix = "" }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Stats Container with curved background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Dark navy background with rounded shape */}
          <div 
            className="relative px-8 py-12 md:px-16 md:py-16 overflow-hidden"
            style={{
              backgroundColor: '#011126',
              borderRadius: '3rem 3rem 3rem 3rem',
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3), 0 10px 30px rgba(6, 182, 212, 0.2), 0 0 80px rgba(6, 182, 212, 0.15)',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-3">
                    <AnimatedNumber {...stat} />
                  </div>
                  <p className="text-sm md:text-base text-white font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Cyan curved bottom edge that flows out */}
            <div 
              className="absolute -bottom-4 left-0 right-0 h-8"
              style={{
                background: 'linear-gradient(to right, transparent 0%, #06b6d4 20%, #06b6d4 80%, transparent 100%)',
                borderRadius: '0 0 3rem 3rem',
              }}
            ></div>
          </div>
        </motion.div>

        {/* Rotating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Rotating text circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
                <text className="text-[14px] fill-gray-900 font-medium uppercase tracking-wider">
                  <textPath href="#circlePath" startOffset="0%">
                    a generation of fearless youth • Join us • Let's raise 
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                {/* Replace with your actual logo */}
                <div className="w-12 h-12 md:w-16 md:h-16 relative">
                  <Image
                    src="/assets/chi logo.PNG"
                    alt="CityHills Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}