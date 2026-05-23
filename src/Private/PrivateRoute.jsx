import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContex";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div className="p-6 text-center text-lg font-semibold">loading...</div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  return children;
};
export default PrivateRoute;
