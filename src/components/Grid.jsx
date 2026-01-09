import { motion } from "framer-motion";

export const MultiCardGrid = () => {
  const items = [
    { title: "Namma Ooru Vibes", image: "/service1.jpg" },
    { title: "Namma Ooru Vibes Elite", image: "/grid2.jpg" },
    { title: "Award Shows", image: "/grid3.jpg" },
    { title: "Thapovan-Active 50", image: "/grid4.jpg" },
    { title: "Namma ooru vibes-Chithirai special", image: "/grid5.jpg" },
    { title: "UTSAV Mela’25", image: "/grid6.jpg" },
    { title: "World Records", image: "/grid4.jpg" },
    { title: "Lumiere Shortfilm contest", image: "/grid5.jpg" },
    { title: "Make up contest And Fashion show", image: "/grid6.jpg" },
  ];

  return (
    <section className="px-6 pt-0 pb-10 md:pt-0 pb-16 max-w-7xl mx-auto">

      {/* Title animation */}
      {/* Heading */}
      <div className="mb-8">
        <p className="uppercase tracking-[0.25em] text-sm md:text-xl text-center text-gold pb-3">Our Events</p>
        <h2 className="text-3xl md:text-4xl font-heading text-dark text-center">Crafted With Perfection</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden border border-gold/30
                       h-40 md:h-56 cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text */}
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-white text-xs md:text-lg font-heading">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
