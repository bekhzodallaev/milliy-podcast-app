import React from "react";
import {
  Home,
  Welcome,
  AboutUs,
  SignIn,
  SignUp,
  ForgotPassword,
  SetNewPassword,
  PasswordSuccessful,
  VerifyAccount,
  MainAppHome,
  Contact,
} from "../pages/LandingPage/ExportComponents";

export interface Route {
  path: string;
  element: React.ReactElement;
}

const routes: Route[] = [
  { path: "/", element: <Home /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },

  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/verify-account", element: <VerifyAccount /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/set-password", element: <SetNewPassword /> },
  { path: "/updated-password", element: <PasswordSuccessful /> },
  { path: "/main-app", element: <MainAppHome /> },
];

export default routes;
