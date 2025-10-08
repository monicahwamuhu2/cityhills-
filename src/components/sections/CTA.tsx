// src/components/sections/CTA.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mgvnlaqj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for reaching out! We\'ll get back to you soon.',
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <>
      {/* Main CTA Section */}
      <section id="contact" className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] lg:min-h-[600px]"
          >
            <Image
              src="/assets/chi come together.jpeg"
              alt="Community hands together"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient for better blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-yellow-400/20" />
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-yellow-400 px-8 py-12 md:px-16 md:py-20 flex flex-col justify-center"
          >
            <div className="max-w-xl">
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: 'serif' }}
              >
                Don't just watch change happen. Be part of it.
              </h2>
              
              <p className="text-base md:text-lg text-gray-800 mb-8">
                Have questions or want to get involved? We're here to help. Reach out today and be part of the change.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name*
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white border-0 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email*
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white border-0 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder="Enter your message"
                    required
                    rows={4}
                    className="w-full bg-white border-0 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-gray-900 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-lg font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#011126' }}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Text Banner */}
      <div className="bg-white py-6 overflow-hidden border-t border-gray-200">
        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                  Our vision for a better Future
                </span>
                <span className="text-yellow-400 text-3xl">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}