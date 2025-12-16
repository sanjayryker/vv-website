import { motion } from "framer-motion";

export const EventCard = ({ title, date, location }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-5 border rounded-2xl shadow-sm bg-white"
    >
      <h4 className="font-heading text-lg text-dark">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">
        {location} · {date}
      </p>

      <button className="mt-3 text-gold text-sm hover:underline">
        View Details & Gallery →
      </button>
    </motion.div>
  );
};
