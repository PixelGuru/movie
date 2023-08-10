import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Client/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import PrivateLayout from "./Layouts/PrivateLayout/PrivateLayout";
import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import User from "./pages/Admin/User/User";
import Movie from "./pages/Admin/Movie/Movie";
import Screenings from "./pages/Admin/Screenings/Screenings";
import ShowTime from "./pages/Client/ShowTimePage/ShowTime";
import ShowTimeHoChiMinh from "./pages/Client/ShowTimePage/HCM/ShowTimeHoChiMinh";
import ShowTimeDaNang from "./pages/Client/ShowTimePage/DN/DN";
import Login from "./pages/Login/Login";
import BookingPage from "./pages/Client/Booking/BookingPage";
import PaymentSuccess from "./pages/Client/PaymentResult/PaymentSuccess";
import PaymentFault from "./pages/Client/PaymentResult/PaymentFault";
import Orders from "./pages/Admin/Orders/Orders";
import Text from "./components/text";

const router = createBrowserRouter([
  {
    path: "/a",
    element: <Text />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/show-time",
        element: <ShowTime />,
      },
      {
        path: "/show-time/ho-chi-minh",
        element: <ShowTimeHoChiMinh />,
      },
      {
        path: "/show-time/da-nang",
        element: <ShowTimeDaNang />,
      },

      {
        path: "/booking/:movie_id/:screeningId",
        element: <BookingPage />,
      },
      {
        path: "/payment-return-success/:order_id",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment-return-fault",
        element: <PaymentFault />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/admin/user",
        element: <User />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/movie",
        element: <Movie />,
      },
      {
        path: "/admin/screenings",
        element: <Screenings />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
