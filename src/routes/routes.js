import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, ResetPassword } from "../pages";
import RouteArr from "../configuration/getRoutes";
import Main from "../pages/main";
import TermsConditions from "../pages/termsconditions";
import AboutUs from "../pages/aboutus";
import HelpDesk from "../pages/helpdesk";
import SignUp from "../pages/signup";

const router = createBrowserRouter([
  {
    name: "Login",
    path: "/login",
    key: "login",
    route: "/",
    element: <Login />,
  },
  {
    name: "Signup",
    path: "/signup",
    key: "signup",
    route: "/signup",
    element: <SignUp />,
  },
  {
    name: "Reset Password",
    path: "/reset",
    key: "resetpassword",
    route: "/",
    element: <ResetPassword />,
  },

  {
    name: "TermsConditions",
    path: "/terms-conditions",
    key: "terms-conditions",
    route: "/terms-conditions",
    element: <TermsConditions />,
  },

  {
    name: "About Us",
    path: "/about-us",
    key: "about-us",
    route: "/about-us",
    element: <AboutUs />,
  },

  {
    name: "HelpDesk",
    path: "/help-desk",
    key: "help-desk",
    route: "/help-desk",
    element: <HelpDesk />,
  },
  {
    path: "/",
    element: <Main />,
    children: RouteArr,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
