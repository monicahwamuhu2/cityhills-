"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Rufina } from "next/font/google";

const rufina = Rufina({ 
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Hero() {
  const [particles, setParticles] = useState<Array<{top: number, left: number, width: number, height: number, color: string, delay: number}>>([]);

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      top: Math.random() * 30,
      left: Math.random() * 50,
      width: 2 + Math.random() * 4,
      height: 2 + Math.random() * 4,
      color: i % 2 === 0 ? "#3b82f6" : "#fbbf24",
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-image.png"
          alt="Young leaders looking up"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Sun Rays from top-left */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute origin-top-left"
            style={{
              top: 0,
              left: 0,
              width: "3px",
              height: "70%",
              background: i % 2 === 0
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)"
                : "linear-gradient(135deg, rgba(250, 204, 21, 0.4) 0%, rgba(250, 204, 21, 0.1) 50%, transparent 100%)",
              transform: `rotate(${35 + i * 6}deg)`,
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              delay: i * 0.15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Additional subtle light particles - only rendered on client */}
      {particles.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                background: particle.color,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: particle.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      {/* Content - Bottom Right */}
      <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 pb-20 flex justify-end pr-4 sm:pr-12 lg:pr-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-right"
        >
          {/* Main Heading */}
          <motion.h1
            className={`${rufina.className} text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block">Empowering <span className="text-yellow-400 font-bold">Youth</span></span>
            <span className="block">Transforming <span className="text-yellow-400 font-bold">Communities</span></span>
          </motion.h1>

          {/* Decorative underline */}
          <motion.div
            className="h-0.5 bg-yellow-400 mb-8 ml-auto w-3/4 lg:w-2/3"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ transformOrigin: "right center" }}
          />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-end"
          >
            <a
              href="https://chat.whatsapp.com/H1dSxTMN2KO3XMfWGIzbEN"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              {/* Animated border line */}
              <svg 
                className="absolute -inset-[2px] pointer-events-none" 
                style={{ 
                  width: 'calc(100% + 4px)',
                  height: 'calc(100% + 4px)',
                  overflow: 'visible' 
                }}
              >
                <motion.rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="50"
                  ry="50"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  style={{ 
                    filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))'
                  }}
                  animate={{
                    strokeDashoffset: [1000, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* Subtle background glow */}
              <motion.div
                className="absolute -inset-1 rounded-full opacity-20 blur-xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(251, 191, 36, 0.3), transparent)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Button
                size="lg"
                className="relative bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 backdrop-blur-sm hover:from-yellow-400/20 hover:via-yellow-400/10 hover:to-yellow-400/20 text-white font-bold text-xl px-20 py-7 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 z-10 border border-yellow-400/30"
              >
                Join us Today
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}