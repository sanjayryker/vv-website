import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbox } from "../components/LightBox";
import { EventCategory } from "../components/EventCategory";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const vibesImages = [
  "/vibe1.JPG",
  "/vibe11.JPG",
  "/vibe2.JPG",
  "/vibe6.jpg",
  "/vibe10.JPG",
  "/vibe3.JPG",
  "/vibe4.JPG",
  "/vibe5.JPG",
  "/vibe7.JPG",
  "/vibe8.JPG",
  "/vibe9.JPG",
  "/vibe12.JPG",
];

const awardsImages = [
  "/award1.JPG",
  "/award2.jpg",
  "/award3.jpg",
  "/award4.JPG",
  "/award5.jpg",
  "/award6.JPG",
  "/award7.jpg",
  "/award8.jpg",
  "/award9.JPG",
  "/award10.JPG",
];

const intImages = [
  "int1.jpg",
  "int2.jpg",
  "int3.jpg",
  "int4.jpg",
  "int5.jpg",
  "int6.jpg",
  "int7.jpg",
  "int8.jpg",
  "int9.jpg",
]

const records = [
  "/record1.jpg",
  "/record2.jpg",
  "/record3.jpg",
  "/record4.jpg",
  "/record5.jpg",
  "/record6.JPG",
  "/record7.jpg",
  "/record8.jpg",
  "/record9.JPG",
  "/record10.jpg",
]
/* -----------------------------
   CATEGORY NAV
----------------------------- */
const categories = [
  { id: "vibes", label: "Namma Ooru Vibes" },
  { id: "awards", label: "Award Shows" },
  { id: "international", label: "International Events" },
  { id: "records", label: "World Records" },
  { id: "shortFilm", label: "ShortFilm Contest" },
];

/* -----------------------------
   PAGE
----------------------------- */
export const EventsPage = () => {
  const [viewer, setViewer] = useState({
    open: false,
    images: [],
    index: 0,
  });

  const openViewer = (images, index) => {
    setViewer({ open: true, images, index });
  };

  const closeViewer = () => {
    setViewer({ open: false, images: [], index: 0 });
  };

  return (
    <>
      <Navbar />

      <section className="px-6 py-20 max-w-7xl mx-auto">

        {/* PAGE HEADER */}
        <div className="text-center mt-2 mb-16">
          <p className="uppercase tracking-[0.25em] text-gold text-sm md:text-xl">
            Our Events
          </p>
          <h1 className="text-3xl md:text-5xl font-heading text-dark">
            Showcasing Our Events & Memorable Moments
          </h1>
        </div>

        {/* CATEGORY SCROLL BAR */}
        <div className="sticky top-20 z-20 bg-white py-4 mb-20">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="shrink-0 px-6 py-2 rounded-full border border-gold text-gold text-sm hover:bg-gold/10 transition"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* EVENTS */}
        <EventCategory
          id="vibes"
          title="Namma Ooru Vibes"
          intro="Where tradition meets modern celebration."
          about={<>
            <p> people the experience where tradition meets today's modern events, Namma Ooru Vibes is by VV Entertainments. <br />We play all our cards- live music, food, dance floor and exclusive WOW factors like dhol, chendamelam performances and many more from the creative cultural arena.</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-[#555]">
              <li> <strong>Namma Ooru Vibes</strong> - Madurai.</li>
              <li><strong>Namma Ooru Vibes Elite</strong> - Chennai.</li>
              <li><strong>Namma Ooru Vibes Chitirai Special</strong> - Madurai.</li>
            </ul>
          </>}
          gallery={vibesImages.slice(0, 4)}   // 👈 ONLY 4 SHOWN
          onImageClick={(i) => openViewer(vibesImages, i)} // 👈 ALL INSIDE LIGHTBOX
        />

        <EventCategory
          id="awards"
          title="Award Shows"
          intro="Honoring excellence across industries."
          about={<>
            <p>
              Celebrating excellence, leadership and impact, VV Entertainments
              curates prestigious award shows that honor inspiring individuals
              and organizations across diverse fields.<br /> From women empowerment
              and social service recognition to industry excellence and lifetime
              achievements, our award ceremonies blend elegance, meaningful
              storytelling and flawless execution.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-[#555]">
              <li>
                <strong>Global Women Icon Awards</strong> – American College, Madurai
              </li>
              <li>
                <strong>Joint for Care Social Service Award</strong> – American College,
                Madurai
              </li>
              <li>
                <strong>Lifetime Achievement Award</strong> – American College, Madurai
              </li>
              <li>
                <strong>Lifetime Achievement Award</strong> – Meenakshi Arts & Science
                College, Chennai
              </li>
              <li>
                <strong>Thamaya Women Warriors Award</strong> – Virudhunagar
              </li>
              <li>
                <strong>Sifterra – Grounds of Excellence Awards</strong> – Chennai
              </li>
              <li>
                <strong>Chennai Award Show</strong> – Aerohub Mall, Chennai
              </li>
            </ul>
          </>}
          gallery={awardsImages.slice(0, 4)}
          onImageClick={(i) => openViewer(awardsImages, i)}
        />

        <EventCategory
          id="international"
          title="International Events"
          intro="Global celebrations with local soul."
          about={
            <>
              <p>
                Expanding beyond borders, VV Entertainments proudly curates
                international award shows and cultural festivals that celebrate
                global excellence, talent and community spirit.<br /> Our international
                events blend cultural diversity, premium production and engaging
                experiences, creating powerful platforms that connect achievers
                and audiences worldwide.
              </p>

              <ul className="mt-4 space-y-3 list-disc list-inside text-[#555]">
                <li>
                  <strong>International Award Show</strong> – Sri Lanka
                  <ul className="ml-5 mt-2 list-disc space-y-1">
                    <li>Iconic Achievers Awards</li>
                    <li>Global Women Icon Awards (GWIA)</li>
                    <li>BICON Awards</li>
                    <li>Future Icon Awards</li>
                    <li>JFC Social Awards</li>
                    <li>Lifetime Achievement Award</li>
                  </ul>
                </li>

                <li>
                  <strong>UTSAV Mela ’25</strong> – Dallas, Texas, USA
                  <ul className="ml-5 mt-2 list-disc space-y-1">
                    <li>Iconic Awards Ceremony</li>
                    <li>Global Women Icon Awards (GWIA)</li>
                    <li>BICON Awards</li>
                    <li>Future Icon Awards</li>
                    <li>JFC Social Awards</li>
                    <li>Lifetime Achievement Award</li>
                  </ul>

                  {/* <p className="mt-2 font-medium">Festival Events:</p>
                  <ul className="ml-5 mt-1 list-disc space-y-1">
                    <li>Cooking Contest</li>
                    <li>Fashion Show</li>
                    <li>Talent Show</li>
                    <li>DJ Night</li>
                  </ul> */}
                </li>
              </ul>
            </>
          }
          gallery={intImages.slice(0, 4)}   // 👈 ONLY 4 SHOWN
          onImageClick={(i) => openViewer(intImages, i)}
        />

        <EventCategory
          id="records"
          title="World Records"
          intro="Creating history together."
          about={
            <>
              <p>
                Creating history through powerful collective participation,
                VV Entertainments proudly executes world record events that
                inspire unity, awareness and social impact.<br /> Each record attempt
                is thoughtfully designed, flawlessly coordinated and driven by
                a strong purpose — leaving behind milestones that resonate far
                beyond the moment.
              </p>

              <ul className="mt-4 space-y-3 list-disc list-inside text-[#555]">
                <li>
                  <strong>Largest Human Chain Forming the Portrait of Sunita Williams</strong> – Madurai
                </li>
                <li>
                  <strong>Largest Women Self-Defense Demonstration</strong> – Madurai
                </li>
                <li>
                  <strong>Maximum Number of Students Reciting a Multilingual Phrase on Women Empowerment</strong> – Chennai
                </li>
                <li>
                  <strong>Chithirai Special World Record Event</strong> - Madurai
                </li>
              </ul>
            </>
          }

          gallery={records.slice(0, 4)}   // 👈 ONLY 4 SHOWN
          onImageClick={(i) => openViewer(records, i)}
        />

        <EventCategory
          id="shortFilm"
          title="ShortFilm Contest"
          intro="Future Directors and Filmmakers"
          about={
            <>
              <p>
                Driven by purpose and creativity, VV Entertainments successfully conducted a short film contest that celebrated storytelling, talent, and cinematic innovation.
The event provided a powerful platform for emerging filmmakers to showcase original narratives, creative vision, and impactful voices, reinforcing our commitment to meaningful artistic expression and excellence.
              </p>

              <ul className="mt-4 space-y-3 list-disc list-inside text-[#555]">
                {/* <li>
                  <strong>Upcoming World Record:</strong> Stop Violence Against Her –
                  <em> Many Faces, One Voice</em> (December 17)
                </li> */}

                <li>
                  <strong>Lumiere Short Film Contest – Pandiyas Special</strong>
                  (December 18)
                </li>

                <li>
                  <strong>Lumiere Short Film Contest – Cholas Special</strong>
                  (December 18)
                </li>

                <li>
                  <strong>Lumiere Short Film Contest – Cheras Special</strong>
                  (December 18)
                </li>

                <li>
                  <strong>Lumiere Short Film Contest – Pallavas Special</strong>
                  (December 18)
                </li>
              </ul>
            </>
          }
          gallery={vibesImages.slice(0, 4)}  
          onImageClick={(i) => openViewer(vibesImages, i)}
        />

        {/* LIGHTBOX */}
        <AnimatePresence>
          {viewer.open && (
            <Lightbox
              images={viewer.images}
              index={viewer.index}
              setIndex={(i) =>
                setViewer((v) => ({ ...v, index: i }))
              }
              onClose={closeViewer}
            />
          )}
        </AnimatePresence>

      </section>

      <Footer />
    </>
  );
};
