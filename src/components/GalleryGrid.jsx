import { motion } from "framer-motion";

export const GalleryGrid = ({ images, onOpen }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => onOpen(i)}
        >
          <img
            src={img}
            alt=""
            className="w-full h-48 object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};
