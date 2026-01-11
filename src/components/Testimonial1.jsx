import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Testimonial1 = () => {
  const testimonials = [
    {
      name: "Aarav Menon",
      role: "Wedding Client",
      text: "VV Events made our big day unforgettable. The detailing and hospitality was beyond expectations.",
      image: "/t1.jpg",
    },
    {
      name: "Divya R.",
      role: "Corporate Client",
      text: "The entire corporate awards night was executed flawlessly. Premium, classy & hassle-free.",
      image: "/t2.jpg",
    },
    {
      name: "Karthik S.",
      role: "Birthday Event",
      text: "Creative decor, smooth coordination and a team that genuinely cares. Highly recommended!",
      image: "/t3.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timerRef = useRef(null);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto play
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [autoPlay]);

  const stopAuto = () => setAutoPlay(false);

  const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (index + 1) % testimonials.length;

  return (
    <section className="px-6 pt-10 md:pt-10 pb-8 md:pb-8 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-5">
        <p className="uppercase tracking-[0.25em] text-md md:text-xl text-gold pb-3">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-heading text-dark">
          What Guests Say
        </h2>
      </div>

      {/* NAV BUTTONS (Desktop Only) */}
      {/* <button
        onClick={() => { stopAuto(); prev(); }}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full bg-gold text-white items-center justify-center z-30 hover:scale-105 transition"
      >
        ❮
      </button> */}

      {/* <button
        onClick={() => { stopAuto(); next(); }}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full bg-gold text-white items-center justify-center z-30 hover:scale-105 transition"
      >
        ❯
      </button> */}

      <div
        className="relative w-full h-[45vh] md:h-[38vh] flex items-center justify-center overflow-hidden"
        onTouchStart={stopAuto}
        onMouseDown={stopAuto}
      >
        {/* LEFT PREVIEW */}
        <motion.div
          key={"left" + prevIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, x: -180 }}
          transition={{ duration: 0.4 }}
          className="absolute w-[80%] md:w-[55%] bg-white rounded-2xl 
          p-6 shadow-lg border border-gold/20  md:flex"
        >
          <p className="text-[#666] italic">“{testimonials[prevIndex].text}”</p>
        </motion.div>

        {/* RIGHT PREVIEW */}
        <motion.div
          key={"right" + nextIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, x: 180 }}
          transition={{ duration: 0.4 }}
          className="absolute w-[70%] md:w-[55%] bg-white rounded-2xl 
          p-6 shadow-lg border border-gold/20  md:flex"
        >
          <p className="text-[#666] italic">“{testimonials[nextIndex].text}”</p>
        </motion.div>

        {/* MAIN CARD */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
            initial={{
              opacity: 0,
              x: direction > 0 ? 120 : -120,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -120 : 120,
              scale: 0.95,
            }}
            transition={{ duration: 0.35 }}
            className="
              absolute w-[90%] md:w-[60%] bg-white rounded-3xl p-8
               border border-gold/30 z-20 cursor-grab
            "
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonials[index].image}
                className="h-10 w-10 md:w-14 md:h-14 rounded-full object-cover border border-gold/40"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg md:text-xl font-heading">{testimonials[index].name}</h3>
                <p className="text-gold text-sm">{testimonials[index].role}</p>
              </div>
            </div>

            <p className="mt-4 text-[#444] italic text-md md:text-lg">
              “{testimonials[index].text}”
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
