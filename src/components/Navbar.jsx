import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";  // ✅ ADD THIS

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/30 md:px-10">
      <nav className="max-w-8xl mx-auto flex items-center justify-between">
        
        {/* LOGO → If clicking logo should go HOME */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="VV Events Logo" 
            className="h-20 w-auto object-contain"
          />
          <p className="font-semibold text-lg hidden md:block">VV Entertainments</p>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">

          {/* Internal anchors remain <a> */}
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-dark font-body hover:text-gold transition"
            >
              {item.label}
            </a>
          ))}

          {/* Add ROUTER LINK for Events Page */}
          <Link
            to="/events"
            className="text-dark font-body hover:text-gold transition"
          >
            Events
          </Link>

          <a
            href="#contact"
            className="bg-gold text-white px-5 py-2 rounded-full font-medium 
              shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:bg-gold-soft transition"
          >
            Book Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gold p-2"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-gold transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gold transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gold transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/30 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 py-4 flex flex-col gap-4">

              {/* Internal anchors */}
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-dark font-body hover:text-gold transition"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Events Page link */}
              <Link
                to="/events"
                onClick={() => setOpen(false)}
                className="text-dark font-body hover:text-gold transition"
              >
                Events
              </Link>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-gold text-white px-5 py-2 rounded-full font-medium text-center
                  shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
