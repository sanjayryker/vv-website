import { motion } from "framer-motion";

export const Founder = ({id}) => {
  return (
    <section id={id} className="px-6 py-8 md:py-16 max-w-7xl mx-auto bg-gold scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE — FIRST ON MOBILE, SECOND ON DESKTOP */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          
        >
          <div
            className="overflow-hidden rounded-2xl 
            h-64 sm:h-72 md:h-96 lg:h-[500px]"
          >
            <img
              src="/founder.jpeg"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT — SECOND ON MOBILE, FIRST ON DESKTOP */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-3 md:pr-6 order-2 md:order-1"
        >
          {/* Gold small label */}
          <p className="uppercase tracking-[0.25em] text-md md:text-xl text-white">
            Meet The Founder
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-heading text-dark leading-tight">
            The Vision Behind <br /> VV Entertainments
          </h2>

          {/* Paragraph */}
          <p className="text-[#444] text-sm md:text-base leading-relaxed">
            Dr. Vijay Vishwa is a known face in the South Indian film and entertainment circuit. 
            With strong roots in media, performance arts, and public engagement, he carries an understanding of 
            what captivates a crowd and transforms events into unforgettable experiences, blending artistic 
            vision with cultural resonance to create moments that truly connect with audiences.

          </p>

          {/* Gold decorative line */}
          <div className="h-1 w-20 bg-white rounded-full"></div>

          {/* Founder Name */}
          <div>
            <h3 className="text-xl font-heading text-dark">Dr. Vijay Vishwa</h3>
            <p className="text-[#666] text-sm">Founder & CEO</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
