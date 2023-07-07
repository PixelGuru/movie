import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
    return (
        <div>
            Private Layout
            <Outlet />
        </div>
    );
};

export default PrivateLayout;
