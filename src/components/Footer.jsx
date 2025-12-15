import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#f9f7f4] pt-12 pb-6 border-t border-gold/20">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND + ABOUT */}
        <div>
          <motion.img
            src="/logo.png"
            alt="VV Entertainments"
            className="w-28 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />

          <p className="text-[#444] text-sm leading-relaxed">
            VV Entertainments brings elegance, precision and creativity 
            to every celebration. We craft memorable experiences 
            that last a lifetime.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white hover:bg-gold/80 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white hover:bg-gold/80 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white hover:bg-gold/80 transition">
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-heading text-dark mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#444] text-sm">
            <li><a href="#hero" className="hover:text-gold transition">Home</a></li>
            <li><a href="#services" className="hover:text-gold transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-gold transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES LIST */}
        <div>
          <h3 className="text-xl font-heading text-dark mb-4">Our Services</h3>
          <ul className="space-y-2 text-[#444] text-sm">
            <li>Wedding Planning</li>
            <li>Corporate Events</li>
            <li>Birthday Events</li>
            <li>Stage & Lighting</li>
            <li>Photography</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-heading text-dark mb-4">Contact Us</h3>

          <div className="space-y-3 text-[#444] text-sm">
            <p className="flex items-center gap-3">
              <Phone size={18} className="text-gold" />
              +91 98765 43210
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} className="text-gold" />
              info@vventertainments.com
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-gold" />
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-gold/20 mt-10 pt-5 text-center">
        <p className="text-[#666] text-sm">
          © {new Date().getFullYear()} VV Entertainments — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
