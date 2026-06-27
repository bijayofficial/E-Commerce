import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaTachometerAlt,
  FaCog,
  FaGraduationCap,
  FaUsersCog,
} from "react-icons/fa";

const Sidebar = () => {
  const publicLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Courses", path: "/courses", icon: <FaBook /> },
  ];

  const authLinks = [
    { name: "Login", path: "/login", icon: <FaSignInAlt /> },
    { name: "Register", path: "/register", icon: <FaUserPlus /> },
  ];

  const dashboardLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
    {
      name: "My Courses",
      path: "/dashboard/my-courses",
      icon: <FaGraduationCap />,
    },
    { name: "Settings", path: "/dashboard/settings", icon: <FaCog /> },
  ];

  const adminLinks = [
    { name: "Admin Panel", path: "/admin", icon: <FaUsersCog /> },
  ];

  const LinkItem = ({ to, icon, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      {label}
    </NavLink>
  );

  return (
    <aside className="h-screen w-72 border-r border-white/10 bg-slate-950 text-white backdrop-blur-xl">
      <div className="flex h-full flex-col p-5">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Yukti<span className="text-blue-500">Tech</span>
          </h1>
          <p className="text-xs text-slate-400">Learn • Build • Grow</p>
        </div>

        {/* Scrollable nav */}
        <div className="flex-1 space-y-6 overflow-y-auto pr-2">
          {/* Public */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase text-slate-500">
              Main
            </h2>

            <div className="space-y-2">
              {publicLinks.map((link) => (
                <LinkItem
                  key={link.path}
                  to={link.path}
                  icon={link.icon}
                  label={link.name}
                />
              ))}
            </div>
          </div>

          {/* Auth */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase text-slate-500">
              Account
            </h2>

            <div className="space-y-2">
              {authLinks.map((link) => (
                <LinkItem
                  key={link.path}
                  to={link.path}
                  icon={link.icon}
                  label={link.name}
                />
              ))}
            </div>
          </div>

          {/* Dashboard */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase text-slate-500">
              Dashboard
            </h2>

            <div className="space-y-2">
              {dashboardLinks.map((link) => (
                <LinkItem
                  key={link.path}
                  to={link.path}
                  icon={link.icon}
                  label={link.name}
                />
              ))}
            </div>
          </div>

          {/* Admin */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase text-slate-500">
              Admin
            </h2>

            <div className="space-y-2">
              {adminLinks.map((link) => (
                <LinkItem
                  key={link.path}
                  to={link.path}
                  icon={link.icon}
                  label={link.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} YuktiTech
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
