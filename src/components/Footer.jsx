import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#f9f7f4] border-t border-gold/20">

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

          {/* BRAND */}
          <div className="space-y-6">
            <motion.img
              src="/logo.png"
              alt="VV Entertainments"
              className="w-28"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />

            <p className="text-[#444] text-sm leading-relaxed max-w-sm">
              VV Entertainments brings elegance, precision and creativity
              to every celebration. We craft memorable experiences
              that last a lifetime.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/vv_entertainments_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gold rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-white hover:text-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gold rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-white hover:text-gold transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gold rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-white hover:text-gold transition-colors duration-300"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-6 md:pl-10">
            <h3 className="text-lg font-heading text-dark">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#444] text-sm">
              <li><a href="/" className="hover:text-gold">Home</a></li>
              <li><a href="/events" className="hover:text-gold">Events</a></li>
              <li><a href="/#trust" className="hover:text-gold">Our Trust</a></li>
              <li><a href="/contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading text-dark">
              Contact Us
            </h3>

            <div className="space-y-4 text-[#444] text-sm">
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                +91 9384272666
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                vventertainmentsmedia@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                331 alwarthirunager, <br />
                Kamaraj Salai, <br />
                Chennai - 87 <br />
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gold/20">
        <div className="max-w-6xl mx-auto px-6 py-5 text-center">
          <p className="text-[#666] text-sm">
            © {new Date().getFullYear()} VV Entertainments — All Rights Reserved
          </p>
        </div>
      </div>

    </footer>
  );
};
