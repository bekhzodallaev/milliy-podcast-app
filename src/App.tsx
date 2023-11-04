import { Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Welcome from "./components/LandingPage/Auth";
import AboutUs from "./components/LandingPage/AboutUs";
import SignIn from "./components/LandingPage/Auth/SignIn";
import SignUp from "./components/LandingPage/Auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* TODO Later */}
      {/* <Route path="/faq" element={<FAQ />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
