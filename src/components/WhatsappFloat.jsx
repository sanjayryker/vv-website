import { motion } from "framer-motion";

export const WhatsAppFloat = () => {
  const phone = "919876543210"; // 🔴 replace with your real number
  const message = "Hi 👋 I’d like to enquire about an event.";

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        bg-[#25D366] text-white
        px-4 py-3
        rounded-full shadow-lg
        hover:shadow-xl
      "
    >
      {/* WhatsApp Icon (SVG – no library needed) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-white"
      >
        <path d="M19.11 17.5c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.33.43-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z"/>
        <path d="M26.68 5.32A13.94 13.94 0 0016.01 1C8.27 1 2 7.27 2 15c0 2.47.65 4.79 1.78 6.83L2 31l9.36-1.73A13.9 13.9 0 0016 29c7.73 0 14-6.27 14-14 0-3.74-1.45-7.26-4.32-9.68zM16 26.9c-2.1 0-4.17-.56-5.97-1.62l-.43-.25-5.55 1.03 1.05-5.41-.28-.44A11.78 11.78 0 014.21 15c0-6.5 5.29-11.79 11.79-11.79 3.15 0 6.11 1.23 8.34 3.45A11.74 11.74 0 0127.79 15c0 6.5-5.29 11.9-11.79 11.9z"/>
      </svg>

      <span className="hidden md:inline text-sm font-medium">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};
