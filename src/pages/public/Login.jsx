import { NavLink, useNavigate } from "react-router-dom";
import {
  FaCode,
  FaLaptopCode,
  FaUserGraduate,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = UserAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter the fields");
    }

    const success = login(formData.email, formData.password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid login Credential");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background Blur Effects */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-600/30 blur-[120px]" />

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-600/30 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 py-12">
        <div className="grid min-h-[85vh] items-center gap-12 lg:grid-cols-2">
          {/* LEFT SECTION */}
          <div className="text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by Students Across India
            </div>

            <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
              Learn.
              <br />
              Build.
              <br />
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Master MERN Stack, Java, Spring Boot, AI, and Full Stack
              Development with practical projects, mentorship, and placement
              guidance.
            </p>

            {/* Feature Cards */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition hover:-translate-y-2">
                <FaCode className="mb-4 text-3xl text-blue-400" />

                <h3 className="font-semibold">Live Projects</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Build real-world applications.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition hover:-translate-y-2">
                <FaLaptopCode className="mb-4 text-3xl text-indigo-400" />

                <h3 className="font-semibold">Industry Training</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Learn from experienced developers.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition hover:-translate-y-2">
                <FaUserGraduate className="mb-4 text-3xl text-emerald-400" />

                <h3 className="font-semibold">Placement Support</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Resume, interview & job assistance.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h2 className="text-4xl font-bold">500+</h2>
                <p className="text-slate-400">Students Trained</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">20+</h2>
                <p className="text-slate-400">Industry Projects</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">95%</h2>
                <p className="text-slate-400">Success Rate</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative">
            {/* Floating Decorations */}
            <div className="absolute -left-6 top-10 h-24 w-24 animate-bounce rounded-3xl bg-blue-500/20 blur-xl" />

            <div className="absolute -right-8 bottom-10 h-24 w-24 animate-pulse rounded-full bg-indigo-500/20 blur-xl" />

            <div className="rounded-4xl border border-white/10 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-white">Welcome Back</h2>

                <p className="mt-2 text-slate-300">
                  Sign in to continue learning
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-300">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="h-px flex-1 bg-white/10" />
                <span className="px-4 text-sm text-slate-400">OR</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Social Login */}
              <div className="grid gap-4 sm:grid-cols-2">
                <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10">
                  <FaGoogle />
                  Google
                </button>

                <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10">
                  <FaGithub />
                  GitHub
                </button>
              </div>

              <p className="mt-8 text-center text-slate-300">
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className="font-semibold text-blue-400 hover:text-blue-300"
                >
                  Create Account
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
