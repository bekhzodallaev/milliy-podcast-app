import React from "react";
import Home from "../components/LandingPage/Home";
import Welcome from "../components/LandingPage/Auth";
import AboutUs from "../components/LandingPage/AboutUs";
import SignIn from "../components/LandingPage/Auth/SignIn";
import SignUp from "../components/LandingPage/Auth/SignUp";
import ForgotPassword from "../components/LandingPage/Auth/SignIn/ForgotPassword";
import SetNewPassword from "../components/LandingPage/Auth/SignIn/ForgotPassword/ResetPassword/SetNewPassword";
import PasswordSuccessful from "../components/LandingPage/Auth/SignIn/ForgotPassword/ResetPassword/PasswordSuccessful";
import VerifyAccount from "../components/LandingPage/Auth/SignUp/VerifyAccount";

export interface Route {
  path: string;
  element: React.ReactElement;
}

const routes: Route[] = [
  { path: "/", element: <Home /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/verify-account", element: <VerifyAccount /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/set-password", element: <SetNewPassword /> },
  { path: "/updated-password", element: <PasswordSuccessful /> },
];

export default routes;
