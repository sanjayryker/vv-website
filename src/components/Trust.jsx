import { motion } from "framer-motion";

export const Trust = ({ id }) => {
  return (
    <section id={id} className="px-6 py-4 md:py-12 md:mt-10 max-w-7xl mx-auto bg-gold relative scroll-mt-24">
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
              src="/jfc1.jpg"
              alt="About VV Events"
              className="w-full h-full object-cover"
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
          <p className="uppercase text-center md:text-left text-3xl md:text-xl text-dark">
            Our Trust - JFC
          </p>

          {/* Big heading */}
          <h2 className="text-xl md:text-4xl text-center md:text-left font-heading text-white leading-tight">
            JFC – Joint for Care
          </h2>

          {/* Paragraph */}
          <p className="text-[#444] text-sm md:text-base leading-relaxed">
            A Trust Dedicated to Humanity <br />
            At VV entertainment, we believe that true success is measured not just by what we achieve together, but by how many lives we touch along the way. <br /><br />
            JFC – Joint for Care was started in 2018 as a registered non-profit trust under the Indian Trusts Act embodies this belief. At the close of every corporate event, family celebration, annual day, or milestone gathering, we joyfully set aside a dedicated portion of our resources to help those who need it most.
            Through JFC, we extend immediate and direct financial support to individuals and families facing unimaginable hardship, including:

          </p>

          {/* Bullet points */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-[#555] text-sm">Victims of natural disasters (floods, cyclones, tsunamis, and earthquakes)</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-[#555] text-sm">Families who have suddenly lost their primary breadwinner</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-[#555] text-sm">Critical medical emergencies where treatment costs become a burden</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-[#555] text-sm"> Children at risk of dropping out of school due to financial crises</p>
            </div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="border mt-4 md:mt-10 block mx-auto cursor-pointer border-red text-gold bg-white 
             px-6 py-2 md:px-8 md:py-3 rounded-full font-medium 
             text-sm md:text-base transition md:hidden"
          >
            Join Hands for Care
          </motion.button>
        </motion.div>

      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="border mt-4 md:mt-10 hidden mx-auto cursor-pointer border-red text-gold bg-white 
             px-6 py-2 md:px-8 md:py-3 rounded-full font-medium 
             text-sm md:text-base transition md:block "
      >
        Join Hands for Care
      </motion.button>
    </section>
  );
};
