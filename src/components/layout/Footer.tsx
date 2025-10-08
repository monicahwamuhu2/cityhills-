import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const QUICK_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Team", href: "#team" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const GET_INVOLVED_LINKS = [
  { name: "Contact", href: "#contact" },
  { name: "Join WhatsApp Community", href: "https://chat.whatsapp.com/H1dSxTMN2KO3XMfWGIzbEN" },
];

const SOCIAL_LINKS = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/cityhills_initiatives/", 
    color: "hover:bg-pink-500" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/cityhills-initiatives/", 
    color: "hover:bg-blue-600" 
  },
  { 
    name: "WhatsApp", 
    icon: Phone, 
    href: "https://chat.whatsapp.com/H1dSxTMN2KO3XMfWGIzbEN", 
    color: "hover:bg-green-500" 
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1929] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/assets/chi logo.PNG"
                  alt="CityHills Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl">
                CityHills Initiatives
              </h3>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Raising a generation of fearless giants.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="name@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
                />
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {GET_INVOLVED_LINKS.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-300">Nigeria</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-400" />
                <a
                  href="mailto:cityhills@cityhillinitiatives.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors break-all"
                >
                  cityhills@cityhillinitiatives.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-400" />
                <a
                  href="tel:+123-456-7890"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  +447310041951 | +2348160900592
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} CityHills Initiatives. All Rights Reserved | Designed by{" "}
            <a
              href="https://solaristudio.com"
              className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solari Studio
            </a>
          </p>
          
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}