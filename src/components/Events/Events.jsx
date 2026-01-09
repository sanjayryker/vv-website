import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Events = () => {
  const services = [
    { title: "Namma Ooru Vibes", desc: "Madurai", image: "/event1.jpg" },
    { title: "Namma Ooru Vibes Elite", desc: "Chennai", image: "/event2.jpg" },
    { title: "Namma Ooru Vibes Chitirai Special", desc: "Madurai", image: "/event3.JPG" },
    // add more items if you want; nav/buttons show only when services.length > 3
  ];

  const showNav = services.length > 3;
  const enableLoop = services.length > 3;

  return (
    <section id="services" className="px-6 pt-8 pb-4 md:pt-16 max-w-7xl mx-auto">
      {/* Heading (centered) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 text-center max-w-2xl mx-auto"
      >
        <p className="uppercase tracking-[0.25em] text-sm md:text-xl text-gold pb-3">Our Events</p>
        <h2 className="text-3xl md:text-4xl font-heading text-dark">Crafted With Perfection</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-3 max-w-full pl-3"
      >
        <p className="text-lg md:text-2xl text-gold pb-0 md:pb-3">Our Speciality</p>
      </motion.div>

      <div className="relative">
        {/* custom nav buttons: only render when showNav is true */}
        {showNav && (
          <button
            id="services-prev"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full bg-gold text-white items-center justify-center
              hover:scale-105 transition"
            aria-label="Previous"
          >
            ❮
          </button>
        )}

        {showNav && (
          <button
            id="services-next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full bg-gold text-white items-center justify-center
              hover:scale-105 transition"
            aria-label="Next"
          >
            ❯
          </button>
        )}

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          loop={enableLoop}
          navigation={
            showNav
              ? { prevEl: "#services-prev", nextEl: "#services-next" }
              : false
          }
          slidesPerView={1.15}
          spaceBetween={0}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
          }}
          className="pb-12 cursor-pointer"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-45 md:h-72 rounded-2xl overflow-hidden relative w-[90%] md:w-full
                  border border-gold/30 transition-transform duration-300 hover:scale-[1.01]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />

                {/* Text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-md md:text-xl font-heading">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
