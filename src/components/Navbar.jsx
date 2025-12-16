import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  // 🔥 helper to reset dropdowns
  const closeAll = () => {
    setAboutOpen(false);
    setEventsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-14" alt="VV" />
          <span className="hidden md:block font-heading text-lg">
            VV Entertainments
          </span>
        </Link>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          <Link to="/">Home</Link>

          {/* ABOUT */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1">
              About <ChevronDown size={14} />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full mt-2 w-40 bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <Link to="/#vv" className="block px-4 py-2 hover:bg-gold/10">
                    VV
                  </Link>
                  <Link to="/#founder" className="block px-4 py-2 hover:bg-gold/10">
                    Founder
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* EVENTS */}
          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button className="flex items-center gap-1">
              Events <ChevronDown size={14} />
            </button>

            <AnimatePresence>
              {eventsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full mt-2 w-56 bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {[
                    // ["Book", "/contact#book"],
                    ["Request Proposal", "/contact#proposal"],
                    ["Watch Portfolio", "/events"],
                  ].map(([label, link]) => (
                    <Link
                      key={link}
                      to={link}
                      className="block px-4 py-2 hover:bg-gold/10"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/#trust">Our Trust</Link>
          <Link to="/contact#form">Contact</Link>

          <Link
            to="/contact"
            className="bg-gold text-white px-4 py-2 rounded-full"
          >
            Book Now
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            closeAll();
          }}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white px-6 py-6 space-y-6 border-t"
          >
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:bg-gold/10 px-2 rounded"
            >
              Home
            </Link>

            {/* ABOUT MOBILE */}
            <div>
              <button
                onClick={() => {
                  setAboutOpen(!aboutOpen);
                  setEventsOpen(false);
                }}
                className="flex justify-between items-center w-full py-2 hover:bg-gold/10 px-2 rounded"
              >
                <span>About</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-6 space-y-2 py-2">
                      <Link 
                        to="/#vv" 
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 hover:bg-gold/10 px-2 rounded"
                      >
                        VV
                      </Link>
                      <Link 
                        to="/#founder" 
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 hover:bg-gold/10 px-2 rounded"
                      >
                        Founder
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* EVENTS MOBILE */}
            <div>
              <button
                onClick={() => {
                  setEventsOpen(!eventsOpen);
                  setAboutOpen(false);
                }}
                className="flex justify-between items-center w-full py-2 hover:bg-gold/10 px-2 rounded"
              >
                <span>Events</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${eventsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {eventsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-6 space-y-2 py-2">
                      {/* <Link 
                        to="/contact#book" 
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 hover:bg-gold/10 px-2 rounded"
                      >
                        Book
                      </Link> */}
                      <Link 
                        to="/contact#proposal" 
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 hover:bg-gold/10 px-2 rounded"
                      >
                        Request Proposal
                      </Link>
                      <Link 
                        to="/events" 
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 hover:bg-gold/10 px-2 rounded"
                      >
                        Watch Portfolio
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/#trust" 
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:bg-gold/10 px-2 rounded"
            >
              Our Trust
            </Link>
            
            <Link 
              to="/contact#form" 
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:bg-gold/10 px-2 rounded"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-gold text-white text-center py-3 px-4 rounded-full mt-4"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}