import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const NewspaperCutting = () => {
  const cuts = [
    { src: "news1.jpg", title: "Global Women Icon Award" },
    { src: "news2.jpg", title: "Global Women Icon Award" },
    { src: "news6.jpg", title: "Namma Ooru Vibes, Madurai" },
    { src: "news7.jpg", title: "Namma Ooru Vibes, Madurai" },
    { src: "news8.jpg", title: "Namma Ooru Vibes, Madurai" },
    { src: "news4.jpg", title: "Namma Ooru Vibes, Chennai" },
    { src: "news9.jpg", title: "Namma Ooru Vibes, Chennai" },
    { src: "news10.jpg", title: "Namma Ooru Vibes, Chennai" },
    { src: "news3.jpg", title: "Utsav '25, USA" },
    { src: "news5.png", title: "Utsav '25, USA" },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [lightbox, setLightbox] = useState(null); // <-- LIGHTBOX STATE

  const timerRef = useRef(null);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % cuts.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + cuts.length) % cuts.length);
  };

  // Auto Scroll
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, 3000);
    return () => clearInterval(timerRef.current);
  }, [autoPlay]);

  const stopAutoScroll = () => {
    setAutoPlay(false);
    clearInterval(timerRef.current);
  };

  const prevIndex = (index - 1 + cuts.length) % cuts.length;
  const nextIndex = (index + 1) % cuts.length;

  // LIGHTBOX ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="px-6 pt-10 py-0 md:py-10 max-w-6xl mx-auto relative">

      {/* Heading */}
      <div className="text-center mb-0 md:mb-10">
        <p className="uppercase tracking-[0.25em] text-sm md:text-xl text-gold pb-3">
          Our Achievements
        </p>
        <h2 className="text-3xl md:text-4xl font-heading text-dark">
          Crafted With Perfection
        </h2>
      </div>

      {/* NAV BUTTONS - Desktop Only */}
      <button
        onClick={() => { stopAutoScroll(); prev(); }}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-40
          w-12 h-12 rounded-full bg-gold text-white shadow-lg items-center 
          justify-center hover:scale-105 transition"
      >
        ❮
      </button>

      <button
        onClick={() => { stopAutoScroll(); next(); }}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-40
          w-12 h-12 rounded-full bg-gold text-white shadow-lg items-center 
          justify-center hover:scale-105 transition"
      >
        ❯
      </button>

      {/* STACK SLIDER */}
      <div
        className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden"
        onTouchStart={stopAutoScroll}
        onMouseDown={stopAutoScroll}
      >

        {/* LEFT PREVIEW */}
        <motion.div
          key={"left" + prevIndex}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 0.9, x: window.innerWidth < 640 ? -90 : -180 }}
          transition={{ duration: 0.5 }}
          className="absolute w-[55%] h-[85%] md:w-[65%] md:h-[100%]
            rounded-2xl overflow-hidden border border-gold/20 opacity-70 cursor-pointer z-10"
          onClick={prev}
        >
          <img src={cuts[prevIndex].src} className="w-full h-full object-cover" />
        </motion.div>

        {/* RIGHT PREVIEW */}
        <motion.div
          key={"right" + nextIndex}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 0.9, x: window.innerWidth < 640 ? 90 : 180 }}
          transition={{ duration: 0.5 }}
          className="absolute w-[55%] h-[85%] md:w-[65%] md:h-[100%]
            rounded-2xl overflow-hidden border border-gold/20 opacity-70 cursor-pointer z-10"
          onClick={next}
        >
          <img src={cuts[nextIndex].src} className="w-full h-full object-cover" />
        </motion.div>

        {/* MAIN CARD */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            dragMomentum={false}
            onDragEnd={(e, info) => {
              if (info.offset.x < -80) next();
              if (info.offset.x > 80) prev();
            }}
            initial={{ opacity: 0, x: direction > 0 ? 150 : -150, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.35 } }}
            exit={{ opacity: 0, x: direction > 0 ? -150 : 150, scale: 0.95 }}
            className="absolute w-[90%] h-[45vh] md:w-[80%] md:h-full 
              rounded-3xl overflow-hidden shadow-xl border border-gold/30 
              cursor-pointer z-20"
            onClick={() => setLightbox(index)} // OPEN LIGHTBOX
          >
            <img src={cuts[index].src} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-heading">{cuts[index].title}</h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =======================
          📸 LIGHTBOX OVERLAY
      ======================== */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)} // click outside to close
          >
            {/* IMAGE */}
            <motion.img
              key={lightbox}
              src={cuts[lightbox].src}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[80vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} // prevent close when clicking image
            />

            {/* TITLE */}
            <div className="absolute bottom-10 text-white text-2xl font-heading">
              {cuts[lightbox].title}
            </div>

            {/* LEFT BUTTON */}
            <button
              className="absolute left-10 top-1/2 -translate-y-1/2 text-black text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox - 1 + cuts.length) % cuts.length);
              }}
            >
              ❮
            </button>

            {/* RIGHT BUTTON */}
            <button
              className="absolute right-10 top-1/2 -translate-y-1/2 text-black text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % cuts.length);
              }}
            >
              ❯
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
