/* eslint-disable react/prop-types */

import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element: Element, isAdmin, ...rest }) => {
  if (isAdmin) {
    return <Route {...rest} element={<Element />} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
