import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsappFloat";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

/* -----------------------------
   DATA
----------------------------- */
const proposalOptions = [
  {
    title: "Request Event Proposal",
    desc: "Weddings, concerts, corporate & private events.",
    msg: "Hi, I’d like to request an event proposal.",
  },
  {
    title: "Partnership Inquiry",
    desc: "Venues, artists, vendors & collaborators.",
    msg: "Hi, I’m interested in a partnership.",
  },
  {
    title: "Sponsorship Discussion",
    desc: "Brand visibility through premium events.",
    msg: "Hi, I’d like to discuss sponsorship opportunities.",
  },
];

/* -----------------------------
   PAGE
----------------------------- */
export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = new FormData();
    data.append("entry.908004017", form.name.value);      // Full Name
    data.append("entry.949089739", form.email.value);     // Email
    data.append("entry.1533516579", form.phone.value);    // Contact
    data.append("entry.1935722808", form.message.value);  // Message

    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeI92TlsUn-teVwv1MLPQTy8X8yCIKvlHbLdLuTgGPgYuYVVA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: data,
        }
      );

      toast.success("Message sent successfully! 🎉");

      form.reset();

    } catch (err) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center mt-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.25em] text-gold text-sm md:text-lg"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading text-dark mt-4"
        >
          Let’s Create Something <br /> Extraordinary Together
        </motion.h1>

        <p className="mt-4 max-w-2xl mx-auto text-[#555] text-sm md:text-base">
          From unforgettable celebrations to powerful collaborations —
          we’d love to hear from you.
        </p>
      </section>

      {/* ========================= */}
{/* UPCOMING EVENT */}
{/* ========================= */}
<section id="book" className="px-6 py-20 bg-[#faf7f2] scroll-mt-24">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* EVENT POSTER */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src="/upcoming-event.jpg"   // 👈 add your poster image here
        alt="Upcoming Event"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* EVENT DETAILS */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="space-y-5"
    >
      <p className="uppercase tracking-[0.25em] text-gold text-sm">
        Upcoming Event
      </p>

      <h2 className="text-3xl md:text-4xl font-heading text-dark">
        Namma Ooru Vibes – Season 2
      </h2>

      <p className="text-[#555] text-sm md:text-base leading-relaxed">
        Experience the energy of culture, music and celebration as we bring
        together unforgettable performances and vibrant moments — crafted
        exclusively by VV Entertainments.
      </p>

      {/* EVENT META */}
      <div className="space-y-2 text-sm text-[#444]">
        <p>
          <span className="font-medium text-dark">📍 Venue:</span> Chennai Trade Centre
        </p>
        <p>
          <span className="font-medium text-dark">📅 Date:</span> 28th December 2025
        </p>
        <p>
          <span className="font-medium text-dark">⏰ Time:</span> 6:00 PM onwards
        </p>
      </div>

      {/* CTA */}
      <div className="flex gap-4 pt-4">
        <a
          href="https://wa.me/919943160812?text=Hi, I’d like to book tickets for Namma Ooru Vibes."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-dark px-8 py-3 rounded-full font-medium hover:bg-gold-soft transition "
        >
          Book Now
        </a>

        <a
          href="/events"
          className="border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold/10 transition"
        >
          View Details
        </a>
      </div>
    </motion.div>

  </div>
</section>


      {/* ========================= */}
      {/* REQUEST PROPOSAL */}
      {/* ========================= */}
      <section id="proposal" className="px-6 py-10 bg-gold scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-white text-sm mb-10 text-center">
            Request Proposal
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {proposalOptions.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-heading text-dark">{o.title}</h3>

                <p className="mt-3 text-[#555] text-sm">{o.desc}</p>

                <a
                  href={`https://wa.me/919943160812?text=${encodeURIComponent(
                    o.msg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-dark transition"
                >
                  Get in Touch
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* CONTACT FORM */}
      {/* ========================= */}
      <section id="form" className="px-6 py-20 max-w-4xl mx-auto scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-heading text-dark text-center mb-10">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            name="name"
            className="contact-input block mx-auto w-full md:w-[480px]"
            placeholder="Full Name"
            required
          />

          <input
            name="email"
            type="email"
            className="contact-input block mx-auto w-full md:w-[480px]"
            placeholder="Email Address"
            required
          />

          <input
            name="phone"
            className="contact-input block mx-auto w-full md:w-[480px]"
            placeholder="Phone Number"
          />

          <textarea
            name="message"
            className="contact-input block mx-auto w-full md:w-[480px] h-32"
            placeholder="Tell us about your requirement"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="block mx-auto bg-gold text-dark py-3 w-56 md:w-64 rounded-full font-medium hover:bg-gold-soft transition flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>

      <WhatsAppFloat />
      <Footer />
    </>
  );
};
