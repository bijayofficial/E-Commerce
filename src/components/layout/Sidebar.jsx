import { useState } from "react";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

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
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser />,
    },
    {
      name: "My Courses",
      path: "/dashboard/my-courses",
      icon: <FaGraduationCap />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  const adminLinks = [
    {
      name: "Admin Panel",
      path: "/admin",
      icon: <FaUsersCog />,
    },
  ];

  const LinkItem = ({ to, icon, label }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      {label}
    </NavLink>
  );

  return (
    <>
      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-slate-800 bg-slate-950 px-5 py-4 text-white lg:hidden">
        <h1 className="text-xl font-bold">
          Yukti<span className="text-blue-500">Tech</span>
        </h1>

        <button onClick={() => setOpen(true)} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 border-r border-slate-800 bg-slate-950 text-white transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-full flex-col p-5">
          {/* Mobile Close */}
          <div className="mb-8 flex items-center justify-between lg:block">
            <div>
              <h1 className="text-2xl font-bold">
                Yukti<span className="text-blue-500">Tech</span>
              </h1>

              <p className="text-xs text-slate-400">Learn • Build • Grow</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-2xl lg:hidden"
            >
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            {/* Main */}
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

            {/* Account */}
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
          <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} YuktiTech
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
