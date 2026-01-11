import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Awards = () => {
  const services = [
    { title: "Global Women Icon Award", desc: "American College, Madurai", image: "/award1.JPG" },
    { title: "Joint for care social service award", desc: "Aerohub mall, Chennai", image: "/award2.jpg" },
    { title: "Life Time Achievement Award", desc: "American College, Madurai", image: "/award3.jpg" },
    { title: "Thamaya women warriors award", desc: "Virudhunagar", image: "/award4.JPG" },
    { title: "Sifterra", desc: "Chennai", image: "/award5.jpg" },
    { title: "Chennai Award Show", desc: "Aerohub mall, Chennai", image: "/award6.JPG" },
    { title: "Future Icon Award", desc: "Aerohub mall, Chennai", image: "/award7.jpg" }
  ];

  const showNav = services.length > 3;
  const enableLoop = services.length > 3;

  return (
    <section id="services" className="px-6 pt-0 pb-4 md:pt-0 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-3 max-w-full pl-3"
      >
        <p className="text-lg md:text-2xl text-gold pb-0 md:pb-3">Award Shows</p>
      </motion.div>

      <div className="relative">
        {/* custom nav buttons: only render when showNav is true */}
        {showNav && (
          <button
            id="services-prev"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20
              w-6 h-6 rounded-full bg-gold text-white items-center justify-center
              hover:scale-105 transition cursor-pointer"
            aria-label="Previous"
          >
            ❮
          </button>
        )}

        {showNav && (
          <button
            id="services-next"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20
              w-6 h-6 rounded-full bg-gold text-white items-center justify-center
              hover:scale-105 transition cursor-pointer"
            aria-label="Next"
          >
            ❯
          </button>
        )}

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          loop={true}
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
          className="pb-12"
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
