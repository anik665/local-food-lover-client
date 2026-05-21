import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContex";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  return children;
};
export default PrivateRoute;
