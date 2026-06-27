import { NavLink } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <FaUserGraduate />
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-2xl font-black text-transparent">
                YuktiTech
              </h1>

              <p className="text-xs tracking-wide text-slate-500">
                Learn • Build • Grow
              </p>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2.5 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
