import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsappFloat";

/* -----------------------------
   DATA
----------------------------- */
const proposalOptions = [
  {
    title: "Request Event Proposal",
    desc: "Weddings, concerts, corporate & private events.",
    msg: "Hi, I’d like to request an event proposal."
  },
  {
    title: "Partnership Inquiry",
    desc: "Venues, artists, vendors & collaborators.",
    msg: "Hi, I’m interested in a partnership."
  },
  {
    title: "Sponsorship Discussion",
    desc: "Brand visibility through premium events.",
    msg: "Hi, I’d like to discuss sponsorship opportunities."
  }
];

/* -----------------------------
   PAGE
----------------------------- */
export const Contact = () => {

    const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    // redirect manually
    window.location.href = "/success";
  } catch (err) {
    alert("Submission failed. Please try again.");
  }
};


  return (
    <>
    <Navbar/>
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
      {/* CURRENT EVENT */}
      {/* ========================= */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.25em] text-gold text-sm mb-4 text-center">
          Happening Now
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-6 md:p-10">
          <img
            src="/current-event.jpg"
            alt="Current Event"
            className="rounded-2xl object-cover h-64 md:h-[420px] w-full"
          />

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading text-dark">
              Live Concert Night
            </h2>

            <p className="text-[#555] text-sm md:text-base">
              📍 Chennai <br />
              📅 20 December 2025 · 6:00 PM
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href="#"
                className="bg-gold text-dark px-6 py-3 rounded-full font-medium hover:bg-gold-soft transition"
              >
                Book Tickets
              </a>

              <a
                href="#"
                className="border border-gold text-gold px-6 py-3 rounded-full hover:bg-gold/10 transition"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* REQUEST PROPOSAL */}
      {/* ========================= */}
      <section className="px-6 py-10 bg-gold">
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
                <h3 className="text-xl font-heading text-dark">
                  {o.title}
                </h3>

                <p className="mt-3 text-[#555] text-sm">
                  {o.desc}
                </p>

                <a
                href={`https://wa.me/919943160812?text=${encodeURIComponent(o.msg)}`}
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
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-heading text-dark text-center mb-10">
          Send Us a Message
        </h2>

      <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
  className="grid gap-6"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />

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
    className="block mx-auto bg-gold text-dark py-3 w-56 md:w-64 rounded-full font-medium hover:bg-gold-soft transition"
  >
    Submit
  </button>
</form>



      </section>
      <WhatsAppFloat/>
      <Footer/>
    </>
  );
};
