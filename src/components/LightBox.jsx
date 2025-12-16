import { motion } from "framer-motion";

export const Lightbox = ({ images, index, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={images[index]}
        className="max-h-[90vh] max-w-[90vw] rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};
