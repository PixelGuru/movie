import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Client/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";
import PrivateLayout from "./Layouts/PrivateLayout/PrivateLayout";
import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import LoginAdmin from "./pages/Admin/Login/LoginAdmin";
import User from "./pages/Admin/User/User";
import Movie from "./pages/Admin/Movie/Movie";
import News from "./pages/Admin/News/News";
import Test from "./components/Test";
import ScreeningHoChiMinh from "./pages/Admin/Screenings/ScreeningHoChiMinh";
import ScreeningDaNang from "./pages/Admin/Screenings/ScreeningDaNang";

const router = createBrowserRouter([
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "/admin",
        element: <LoginAdmin />,
    },
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                path: "/admin/screening/HoChiMinh",
                element: <ScreeningHoChiMinh />,
            },
            {
                path: "/admin/screening/DaNang",
                element: <ScreeningDaNang />,
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
