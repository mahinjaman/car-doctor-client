import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../LayOut/Root";
import CheckOut from "../pages/CheckOut";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Bookings from "../pages/Bookings";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/check-out/:_id",
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params._id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <Bookings></Bookings>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes