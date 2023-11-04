import { Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Welcome from "./components/LandingPage/Auth";
import AboutUs from "./components/LandingPage/AboutUs";
import SignIn from "./components/LandingPage/Auth/SignIn";
import SignUp from "./components/LandingPage/Auth/SignUp";
import ForgotPassword from "./components/LandingPage/Auth/SignIn/ForgotPassword";
import SetNewPassword from "./components/LandingPage/Auth/SignIn/ForgotPassword/ResetPassword/SetNewPassword";
import PasswordSuccessful from "./components/LandingPage/Auth/SignIn/ForgotPassword/ResetPassword/PasswordSuccessful";
import VerifyAccount from "./components/LandingPage/Auth/SignUp/VerifyAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-account" element={<VerifyAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/set-password" element={<SetNewPassword />} />
      <Route path="/updated-password" element={<PasswordSuccessful />} />

      {/* TODO Later */}
      {/* <Route path="/faq" element={<FAQ />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
