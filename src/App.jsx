import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {EventsPage} from "./pages/EventsPage";
import {Contact} from "./pages/Contact";
import { Success } from "./pages/Success";
import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  return (
    <>
    <ScrollToHash/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}
