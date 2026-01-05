import React from 'react'
import { motion } from "framer-motion";

const EmbedLink = () => {
  return (
   <section className="mt-10 mb-5 px-6">
      <div className="max-w-6xl mx-auto text-center">
    
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.25em] text-gold text-sm md:text-lg"
        >
          Live Coverage
        </motion.p>
    
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading text-dark mt-4"
        >
          Watch Our Events Live on YouTube
        </motion.h2>
    
        <p className="mt-4 max-w-2xl mx-auto text-[#555] text-sm md:text-base">
          Experience the energy, excitement and unforgettable moments from our
          events — streamed live for audiences across the globe.
        </p>
    
        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl overflow-hidden shadow-xl aspect-video bg-black"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/4dUr6L-dKgo"
            title="VV Entertainments Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>
    
        {/* OPTIONAL CTA */}
        <div className="mt-8 flex justify-center gap-3 md:gap-4">
      <a
        href="https://www.youtube.com/@YOUR_CHANNEL_NAME"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-gold text-white 
          px-5 py-2 text-xs 
          md:px-8 md:py-3 md:text-base
          rounded-full font-medium 
          hover:bg-gold-soft transition
        "
      >
        Visit Our Channel
      </a>
    </div>
    
      </div>
    </section>
  )
}

export default EmbedLink