import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Stats = () => {
  const stats = [
    { number: 15, label: "Events Completed" },
    { number: 2, label: "Years of Experience" },
    { number: 3, label: "Countries Covered" },
    { number: 2000, label: "Happy Guests" },
  ];

  return (
    <section className="px-6 py-0 pb-12 md:py-15 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="uppercase tracking-[0.25em] text-sm md:text-xl text-gold pb-3">
          Our Journey
        </p>

        <h2 className="text-3xl md:text-4xl font-heading text-dark">
          Excellence Through the Years
        </h2>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((item, i) => (
          <StatCard key={i} number={item.number} label={item.label} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
};

/* ============================
    COUNT-UP STAT CARD
============================= */

const StatCard = ({ number, label, delay }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  const [value, setValue] = useState(0);

  // Intersection Observer to detect when stat is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 });
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Smooth number animation
  const animateCount = () => {
    let start = 0;
    const end = number;
    const duration = 1500; // 1.5s
    const stepTime = 10;

    let increment = (end - start) / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setValue(Math.floor(start));
    }, stepTime);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <h3 className="text-4xl md:text-5xl font-heading text-gold">
        {value}+
      </h3>
      <p className="text-dark text-sm md:text-base mt-2">{label}</p>
    </motion.div>
  );
};
