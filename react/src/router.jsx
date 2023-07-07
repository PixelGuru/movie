import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";
import PrivateLayout from "./Layouts/PrivateLayout/PrivateLayout";
import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

const router = createBrowserRouter([
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
                path: "user",
                element: <User />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);
export default router;
