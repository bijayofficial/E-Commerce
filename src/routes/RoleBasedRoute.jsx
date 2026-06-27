import { Outlet, Navigate } from "react-router-dom";

const role = "admin";

const RoleBasedRoute = () => {
  console.log(role === "admin");
  return role === "admin" ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default RoleBasedRoute;
