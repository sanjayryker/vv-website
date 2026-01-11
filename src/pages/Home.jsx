import { AboutUs } from "../components/AboutUs";
import { Awards } from "../components/Events/Awards";
import { Events } from "../components/Events/Events";
import { Founder } from "../components/Founder";
import { MultiCardGrid } from "../components/Grid";
import { HeroA } from "../components/Hero";
import Navbar from "../components/Navbar"
import { NewspaperCutting } from "../components/NewsPaperCutting";
import { InternationalEvents } from "../components/Events/InternationalEvents";
import { UpcomingEvents } from "../components/Events/UpcomingEvents";
import { WorldRecords } from "../components/Events/WorldRecords";
import { OtherEvents } from "../components/Events/OtherEvents";
import { Trust } from "../components/Trust";
import { Testimonial1 } from "../components/Testimonial1";
import { Stats } from "../components/Stats";
import { Footer } from "../components/Footer";
import EmbedLink from "../components/EmbedLink";



export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <Navbar />
      <HeroA/>
      <AboutUs id="vv"/>
      <Founder id="founder"/>
      {/* <EmbedLink/> */}
      <Events/>
      <Awards/>
      <InternationalEvents/>
      {/* <WorldRecords/> */}
      {/* <UpcomingEvents/> */}
      {/* <OtherEvents/> */}
      <Trust id="trust"/>
      <NewspaperCutting/>
      <Testimonial1/>
      <Stats/>
      <Footer/>
    </div>
  );
}
