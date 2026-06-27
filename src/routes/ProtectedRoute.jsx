import { Outlet, Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

// const isAuthenticated = true;

const ProtectedRoute = () => {
  const { isAuthenticated } = UserAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
