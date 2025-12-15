import { useState } from "react";
import { motion } from "framer-motion";

export const EventsPage = () => {
  const [tab, setTab] = useState("portfolio"); // default section

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">

      {/* PAGE HEADING */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.25em] text-sm md:text-xl text-gold">
          Our Events
        </p>
        <h2 className="text-3xl md:text-5xl font-heading text-dark">
          Showcasing Our Events & Memorable Moments
        </h2>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setTab("portfolio")}
          className={`px-6 py-3 rounded-full text-sm transition shadow-md 
            ${tab === "portfolio" 
              ? "bg-gold text-white" 
              : "border border-gold text-gold hover:bg-gold/10"}`}
        >
          Watch Portfolio
        </button>

        <button
          onClick={() => setTab("upcoming")}
          className={`px-6 py-3 rounded-full text-sm transition shadow-md 
            ${tab === "upcoming" 
              ? "bg-gold text-white" 
              : "border border-gold text-gold hover:bg-gold/10"}`}
        >
          Upcoming Events
        </button>

        <button
          onClick={() => setTab("details")}
          className={`px-6 py-3 rounded-full text-sm transition shadow-md 
            ${tab === "details" 
              ? "bg-gold text-white" 
              : "border border-gold text-gold hover:bg-gold/10"}`}
        >
          Event Details
        </button>
      </div>

      {/* ---------------------------- */}
      {/* TAB CONTENTS */}
      {/* ---------------------------- */}

      {/* ============================= */}
      {/* WATCH PORTFOLIO TAB */}
      {/* ============================= */}
      {tab === "portfolio" && (
        <motion.section
          key="portfolio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-heading text-dark mb-6">
            Moments We've Created
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={`/events/gallery${i}.jpg`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* ============================= */}
      {/* UPCOMING EVENTS TAB */}
      {/* ============================= */}
      {tab === "upcoming" && (
        <motion.section
          key="upcoming"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-heading text-dark mb-6">
            Upcoming Events
          </h3>

          <div className="space-y-8">
            <div className="p-6 border rounded-2xl shadow-sm">
              <h4 className="text-xl font-heading text-dark">Utsav Mela 2025</h4>
              <p className="text-gray-600">Dallas, Texas – Oct 10</p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm">
              <h4 className="text-xl font-heading text-dark">Lumiere Shortfilm Contests</h4>
              <p className="text-gray-600">
                Pandiyas | Cholas | Cheras | Pallavas – Dec 2024
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm">
              <h4 className="text-xl font-heading text-dark">Makeup Contest & Fashion Show</h4>
              <p className="text-gray-600">Coming Soon</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* ============================= */}
      {/* EVENT DETAILS TAB */}
      {/* ============================= */}
      {tab === "details" && (
        <motion.section
          key="details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          {/* NAMMA OORU VIBES */}
          <div className="mb-10">
            <h4 className="text-xl font-heading text-gold mb-2">
              Namma Ooru Vibes
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Bringing the experience where tradition meets modern events…
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={`/events/vibes${i}.jpg`}
                    className="w-full h-60 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* AWARD SHOWS */}
          <div className="mb-10">
            <h4 className="text-xl font-heading text-gold mb-2">Award Shows</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Global Women Icon Awards – Madurai – March 7</li>
              <li>Joint for Care Social Service Awards – Madurai – March 7</li>
              <li>Lifetime Achievement Awards – Chennai & Madurai</li>
              <li>Thamaya Women Warriors – Virudhunagar – May 24–25</li>
              <li>Chennai Award Show – Aerohub Mall – April 27</li>
            </ul>
          </div>

          {/* WORLD RECORDS */}
          <div className="mb-10">
            <h4 className="text-xl font-heading text-gold mb-2">World Records</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Largest Human Chain – Sunita Williams Portrait</li>
              <li>Largest Women Self Defense Demo – Madurai</li>
              <li>Maximum Students Reciting Multilingual Phrase – Chennai</li>
              <li>Upcoming: Stop Violence Against Her – Dec 17</li>
            </ul>
          </div>
        </motion.section>
      )}

    </section>
  );
};
