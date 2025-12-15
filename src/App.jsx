import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {EventsPage} from "./pages/EventsPage";
import {Contact} from "./pages/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}
