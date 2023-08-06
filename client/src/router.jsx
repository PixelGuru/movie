import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Client/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import PrivateLayout from "./Layouts/PrivateLayout/PrivateLayout";
import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";

import User from "./pages/Admin/User/User";
import Movie from "./pages/Admin/Movie/Movie";
import News from "./pages/Admin/News/News";
import Test from "./components/Test";
import Screenings from "./pages/Admin/Screenings/Screenings";
import ShowTime from "./pages/Client/ShowTimePage/ShowTime";
import ShowTimeHoChiMinh from "./pages/Client/ShowTimePage/HCM/ShowTimeHoChiMinh";
import ShowTimeDaNang from "./pages/Client/ShowTimePage/DN/DN";
import Login from "./pages/Admin/Login/Login";
import BookingPage from "./pages/Client/Booking/BookingPage";


const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
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
        element: <BookingPage />, // Thêm route cho BookingPage
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
        path: "/admin/news",
        element: <News />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
