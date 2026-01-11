import { motion } from "framer-motion";

export const GalleryGrid = ({ images, onOpen }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="rounded-xl overflow-hidden cursor-pointer h-28 md:h-46"
          onClick={() => onOpen(i)}
        >
          <img
            src={img}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
};
