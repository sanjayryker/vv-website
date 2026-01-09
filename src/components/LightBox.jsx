import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export const Lightbox = ({ images, index, onClose, setIndex }) => {
  const prev = (e) => {
    e.stopPropagation();
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setIndex((index + 1) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev(e);
      if (e.key === "ArrowRight") next(e);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* CLOSE */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 text-white hover:text-gold transition"
      >
        <X size={30} />
      </button>

      {/* PREV */}
      {images.length > 1 && (
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 text-white hover:text-gold transition"
        >
          <ChevronLeft size={42} />
        </button>
      )}

      {/* MAIN IMAGE */}
      <motion.img
        key={images[index]}
        src={images[index]}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="max-h-[75vh] max-w-[90vw] rounded-xl mb-6"
        onClick={(e) => e.stopPropagation()}
      />

      {/* COUNTER */}
      <div className="text-sm text-gray-300 mb-3">
        {index + 1} / {images.length}
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            flex gap-3 px-4 pb-4
            max-w-full overflow-x-auto
            scrollbar-hide
          "
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                shrink-0 rounded-lg overflow-hidden
                border-2 transition
                ${i === index
                  ? "border-gold scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
                }
              `}
            >
              <img
                src={img}
                alt=""
                className="h-16 w-24 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* NEXT */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-4 md:right-8 text-white hover:text-gold transition"
        >
          <ChevronRight size={42} />
        </button>
      )}
    </motion.div>
  );
};
