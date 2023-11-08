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
} from "../components/LandingPage/ExportComponents";

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
