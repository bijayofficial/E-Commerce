import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaUserGraduate,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white">
                <FaUserGraduate className="text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">YuktiTech</h2>
                <p className="text-xs text-slate-400">Learn • Build • Grow</p>
              </div>
            </div>

            <p className="leading-relaxed text-slate-400">
              Empowering students and professionals with industry-ready skills
              in Web Development, MERN Stack, Java, AI, and Placement Training.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaLinkedinIn />,
                <FaYoutube />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="transition hover:text-blue-400">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="transition hover:text-blue-400">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/courses"
                  className="transition hover:text-blue-400"
                >
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink to="/login" className="transition hover:text-blue-400">
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className="transition hover:text-blue-400"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Student Area */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Student Area
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/dashboard"
                  className="transition hover:text-blue-400"
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="transition hover:text-blue-400"
                >
                  Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/my-courses"
                  className="transition hover:text-blue-400"
                >
                  My Courses
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/settings"
                  className="transition hover:text-blue-400"
                >
                  Settings
                </NavLink>
              </li>

              <li>
                <NavLink to="/admin" className="transition hover:text-blue-400">
                  Admin Panel
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-500" />
                <span>contact@yuktitech.com</span>
              </div>

              <div className="flex gap-3">
                <FaPhone className="mt-1 text-blue-500" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="mb-3 font-medium text-white">Newsletter</h4>

              <div className="flex overflow-hidden rounded-xl border border-slate-700">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-slate-900 px-4 py-3 outline-none"
                />

                <button className="bg-blue-600 px-5 font-medium text-white transition hover:bg-blue-700">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} YuktiTech. All rights reserved.</p>

          <div className="flex gap-6">
            <NavLink to="/" className="hover:text-blue-400">
              Privacy Policy
            </NavLink>

            <NavLink to="/" className="hover:text-blue-400">
              Terms & Conditions
            </NavLink>

            <NavLink to="/" className="hover:text-blue-400">
              Support
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
