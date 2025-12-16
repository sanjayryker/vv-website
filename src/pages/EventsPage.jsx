import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "../components/LightBox";
import {EventCategory} from "../components/EventCategory"
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

/* -----------------------------
   CATEGORY NAV
----------------------------- */
const categories = [
  { id: "vibes", label: "Namma Ooru Vibes" },
  { id: "awards", label: "Award Shows" },
  { id: "records", label: "World Records" },
  { id: "international", label: "International Events" },
  { id: "upcoming", label: "Upcoming" }
];

/* -----------------------------
   PAGE
----------------------------- */
export const EventsPage = () => {
  const [viewer, setViewer] = useState({
    open: false,
    images: [],
    index: 0
  });

  const openViewer = (images, index) => {
    setViewer({ open: true, images, index });
  };

  const closeViewer = () => {
    setViewer({ open: false, images: [], index: 0 });
  };

  return (
    <>
    <Navbar/>
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
          {categories.map(c => (
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
        about={
          <>
            Namma Ooru Vibes by VV Entertainments blends live music, food,
            dance floors and powerful cultural performances like dhol
            and chendamelam to create unforgettable experiences across the world.
          </>
        }
        gallery={["/events/vibes1.jpg", "/events/vibes2.jpg", "/events/vibes3.jpg"]}
        onImageClick={(i) =>
          openViewer(["/events/vibes1.jpg", "/events/vibes2.jpg", "/events/vibes3.jpg"], i)
        }
      />

      <EventCategory
        id="awards"
        title="Award Shows"
        intro="Honoring excellence across industries."
        about={
          <>
            From Global Women Icon Awards to Lifetime Achievement recognitions,
            our award shows celebrate impact, leadership and inspiration.
          </>
        }
        gallery={["/events/award1.jpg", "/events/award2.jpg", "/events/award3.jpg"]}
        onImageClick={(i) =>
          openViewer(["/events/award1.jpg", "/events/award2.jpg", "/events/award3.jpg"], i)
        }
      />

      <EventCategory
        id="records"
        title="World Records"
        intro="Creating history together."
        about={
          <>
            From largest human chains to mass self-defense demonstrations,
            VV Entertainments proudly executes record-breaking events.
          </>
        }
        gallery={["/events/record1.jpg", "/events/record2.jpg"]}
        onImageClick={(i) =>
          openViewer(["/events/record1.jpg", "/events/record2.jpg"], i)
        }
      />

      <EventCategory
        id="international"
        title="International Events"
        intro="Global celebrations with local soul."
        about={
          <>
            From Sri Lanka to the USA, our international award shows
            and festivals bring people together beyond borders.
          </>
        }
        gallery={["/events/int1.jpg", "/events/int2.jpg"]}
        onImageClick={(i) =>
          openViewer(["/events/int1.jpg", "/events/int2.jpg"], i)
        }
      />

      <EventCategory
        id="upcoming"
        title="Upcoming Events"
        intro="What’s next?"
        about={
          <>
            UTSAV Mela ’25 – Dallas • Lumiere Short Film Contests •
            Makeup Contest & Fashion Show.
          </>
        }
        gallery={["/events/up1.jpg"]}
        onImageClick={(i) =>
          openViewer(["/events/up1.jpg"], i)
        }
      />

      {/* LIGHTBOX */}
      {viewer.open && (
        <Lightbox
          images={viewer.images}
          index={viewer.index}
          onClose={closeViewer}
        />
      )}
    </section>
    <Footer/>
    </>
  );
};
