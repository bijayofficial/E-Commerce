import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = UseAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
