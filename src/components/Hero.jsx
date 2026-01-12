import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeroA = () => {
  const slides = [
    {
      image: "/hero1.JPG",
      title: "Turning Moments into Memories",
      subtitle:
        "Premium event planning for corporates.",
    },
    {
      image: "/hero2.JPG",
      title: "From Concept to Celebration",
      subtitle: "End-to-end event management with stunning execution.",
    },
    {
      image: "/hero3.JPG",
      title: "Experiences That Leave a Mark",
      subtitle: "Décor, lighting & seamless coordination.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative h-[75vh] md:h-screen overflow-hidden"
    >
      {/* BACKGROUND SLIDES */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((s, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1.05 : 1,
            }}
            transition={{
              opacity: { duration: 1.3, ease: "easeInOut" },
              scale: { duration: 10, ease: "easeInOut" },
            }}
          >
            <img src={s.image} className="w-full h-full object-cover" />
          </motion.div>
        ))}

        {/* SOFT BLACK OVERLAY (PERFECT READABILITY) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 pt-25 md:pt-0 md:px-14 ">
        <div className="max-w-xl space-y-5">

          {/* SUBTITLE (GOLD) */}
          <p className="uppercase tracking-[0.25em] text-xs md:text-xl text-gold">
            VV ENTERTAINMENTS
          </p>

          {/* TITLE (WHITE + DROP SHADOW) */}
          <motion.h1
            key={slides[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-5xl lg:text-6xl font-heading text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]"
          >
            {slides[current].title}
          </motion.h1>

          {/* SUBTITLE TEXT */}
          <motion.p
            key={slides[current].subtitle}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-lg text-[#E8E8E8]"
          >
            {slides[current].subtitle}
          </motion.p>

          {/* BUTTON GROUP */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 pt-2"
          >
            {/* Filled Gold Button */}
            <Link to="/contact#proposal" className="bg-gold text-white px-5 py-2 rounded-full text-sm md:text-base md:px-7 md:py-3 font-medium shadow-sm hover:bg-gold-soft transition">
              Let's Collaborate
            </Link>

            {/* Gold Outline Button */}
            <Link to="/events" className="border border-gold text-white px-5 py-2 rounded-full text-sm md:text-base md:px-7 md:py-3 font-medium hover:bg-gold/10 transition">
              Our Works
            </Link>
          </motion.div>

          {/* DOT INDICATORS */}
          {/* <div className="flex gap-2 pt-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-6 rounded-full transition ${
                  i === current ? "bg-gold" : "bg-gold/30"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};
