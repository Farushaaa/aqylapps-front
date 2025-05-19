import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignInPage from "../pages/SignInPage";
import MainPage from "../pages/MainPage";
import PrivateRoute from "../privateRoute/privateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
    ],
  },
]);
