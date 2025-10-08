"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAVIGATION_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Team", href: "#team" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-110 duration-300">
              <Image
                src="/assets/chi logo.PNG"
                alt="CityHills Initiatives Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className={cn(
              "font-bold text-xl lg:text-2xl transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
              CityHills Initiatives
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  isScrolled 
                    ? "text-gray-700 hover:text-blue-600" 
                    : "text-white hover:text-yellow-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://chat.whatsapp.com/H1dSxTMN2KO3XMfWGIzbEN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className={cn(
                  "transition-all duration-300",
                  isScrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                )}
              >
                Get Involved
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors duration-300",
              isScrolled 
                ? "text-gray-700 hover:text-blue-600" 
                : "text-white hover:text-yellow-400"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://chat.whatsapp.com/H1dSxTMN2KO3XMfWGIzbEN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Get Involved
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}