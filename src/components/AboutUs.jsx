import { motion } from "framer-motion";

export const AboutUs = ({ id }) => {
  return (
    <section id={id} className=" px-6 pt-8 pb-16 md:py-24 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-2xl  
                h-56             /* mobile */
                sm:h-72          
                md:h-92 md:block         /* tablet / small laptop */
                lg:h-[480px]      /* large desktop */
            ">
            <img
              src="/aboutus1.jpg"
              alt="Events"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="lazy"
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
          <p className="uppercase tracking-[0.25em] text-md md:text-xl text-gold">
            About Us
          </p>

          {/* Big heading */}
          <h2 className="text-3xl md:text-4xl font-heading text-dark leading-tight">
            Crafting Experiences <br /> That Last a Lifetime
          </h2>

          {/* Paragraph */}
          <p className="text-[#444] text-sm md:text-base leading-relaxed">
            VV Entertainment, established in 2024, is a professional event management and entertainment service provider specializing in corporate events. We bring creativity, energy, and flawless execution to
            every event—whether it’s a formal corporate gathering or a high-energy celebration.<br />
            We focus on creating memorable experiences through well-planned coordination, premium entertainment, and smooth event flow. Our team ensures every detail is handled with professionalism, so clients can enjoy stress-free events from start to finish.<br />
            At VV Entertainment, we believe every event should be impactful, engaging, and unforgettable.
          </p>

          {/* Bullet points */}
          {/* <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold"></span>
              <p className="text-[#555] text-sm">Tailor-made event concepts</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold"></span>
              <p className="text-[#555] text-sm">Production & theme styling</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-gold"></span>
              <p className="text-[#555] text-sm">Full planning & seamless execution</p>
            </div>
          </div> */}

          {/* Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="border border-gold text-gold px-6 py-2 md:px-8 md:py-3 rounded-full font-medium text-sm md:text-base hover:bg-gold/10 transition"
          >
            Learn More
          </motion.button> */}
        </motion.div>

      </div>
    </section>
  );
};
