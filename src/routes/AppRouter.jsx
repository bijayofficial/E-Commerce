import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Courses from "../pages/public/Courses";
import CourseDetails from "../pages/public/CourseDetails";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";
import MyCourses from "../pages/dashboard/MyCourses";
import RoleBasedRoute from "./RoleBasedRoute";
import AdminPanel from "../pages/dashboard/AdminPanel";
import NotFound from "../pages/public/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* public route */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* private */}

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="my-courses" element={<MyCourses />} />
        </Route>

        {/* admin */}
        <Route element={<RoleBasedRoute />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

export default router;
