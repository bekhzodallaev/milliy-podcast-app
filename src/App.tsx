import { Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Welcome from "./components/LandingPage/Auth";
import AboutUs from "./components/LandingPage/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/aboutus" element={<AboutUs />} />

      {/* TODO Later */}
      {/* <Route path="/faq" element={<FAQ />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
