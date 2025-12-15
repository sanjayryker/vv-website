import { motion } from "framer-motion";

export const Trust = () => {
  return (
    <section className="px-6 py-4 md:py-16 max-w-7xl mx-auto bg-gold relative">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-2xl  shadow-[0_4px_20px_rgba(212,175,55,0.18)] 
              h-64 hidden            /* mobile */
              sm:h-72       
              md:h-96 md:block         /* tablet / small laptop */
              lg:h-[550px]     /* large desktop */
          ">
            <img
              src="/about1.jpg" 
              alt="About VV Events"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-3 md:pl-6"
        >
          {/* Gold small title */}
          <p className="uppercase text-center md:text-left text-3xl md:text-xl text-dark">
            Our Trust - JFC
          </p>

          {/* Big heading */}
          <h2 className="text-xl md:text-4xl text-center md:text-left font-heading text-white leading-tight">
            Where kindness meets meaningful action.
          </h2>

          {/* Paragraph */}
          <p className="text-[#444] text-sm md:text-base leading-relaxed">
            At VV Entertainments, we turn your celebrations into beautifully
            curated experiences. Our team blends creativity, precision and
            passion to deliver events that feel effortless, elegant and deeply
            memorable.  
            <br /><br />
            From intimate weddings to grand corporate gatherings, every event we
            create reflects our commitment to excellence and attention to detail.
          </p>

          {/* Bullet points */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-[#555] text-sm">Tailor-made event concepts</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-[#555] text-sm">Production & theme styling</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-[#555] text-sm">Full planning & seamless execution</p>
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="border border-gold text-gold px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-sm md:text-base hover:bg-gold/10 transition"
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
