import { motion } from "framer-motion";
import { GalleryGrid } from "./GalleryGrid";

export const EventCategory = ({
  id,
  title,
  intro,
  about,
  gallery,
  onImageClick,
  isSingleFull
}) => {
  return (
    <section
      id={id}
      className="mb-28 scroll-mt-[160px] md:scroll-mt-[180px]"
    >
      {/* DESKTOP GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading text-dark mb-2"
          >
            {title}
          </motion.h2>

          <p className="text-gold text-sm mb-4">{intro}</p>

          <div className="text-[#555] text-sm md:text-base leading-relaxed">
            {about}
            <p className="mt-3 text-gold text-xs md:text-sm italic">
              * Click on images to see more
            </p>
          </div>
        </div>

        {/* RIGHT GALLERY — ALIGNED WITH TITLE */}
        <div className="md:pt-1">
          <GalleryGrid images={gallery} onOpen={onImageClick} isSingleFull={isSingleFull} />
        </div>
      </div>
    </section>
  );
};
