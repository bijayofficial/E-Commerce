import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FaCode, FaProjectDiagram, FaAward } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register } = UserAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: formData.role,
    });

    navigate("/login");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6 py-12">
        <div className="grid min-h-[85vh] items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Start Your Career Transformation
            </div>

            <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
              Become
              <br />
              a
              <br />
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Tech Professional
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Join YuktiTech and gain practical skills, real-world project
              experience, mentorship, and placement support to accelerate your
              career.
            </p>

            {/* Skill Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "React",
                "Node.js",
                "MongoDB",
                "AI",
                "DSA",
                "SQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2">
                <FaCode className="mb-4 text-3xl text-blue-400" />

                <h3 className="font-semibold">Coding Skills</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Learn through practical coding.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2">
                <FaProjectDiagram className="mb-4 text-3xl text-indigo-400" />

                <h3 className="font-semibold">Projects</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Build portfolio-ready applications.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2">
                <FaAward className="mb-4 text-3xl text-emerald-400" />

                <h3 className="font-semibold">Placement Help</h3>

                <p className="mt-2 text-sm text-slate-400">
                  Resume & interview preparation.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h2 className="text-4xl font-bold">500+</h2>
                <p className="text-slate-400">Students Trained</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">50+</h2>
                <p className="text-slate-400">Real Projects</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">95%</h2>
                <p className="text-slate-400">Student Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="absolute -left-8 top-10 h-24 w-24 animate-bounce rounded-full bg-blue-500/20 blur-xl" />

            <div className="absolute -right-8 bottom-10 h-24 w-24 animate-pulse rounded-full bg-indigo-500/20 blur-xl" />

            <div className="rounded-4xl border border-white/10 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-white">
                  Create Account
                </h2>

                <p className="mt-2 text-slate-300">
                  Begin your learning journey today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

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
                    placeholder="Create password"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 py-4 font-semibold text-white transition hover:scale-[1.02]"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                <p className="text-sm text-emerald-300">
                  🎉 Join now and start learning with industry-standard
                  curriculum and hands-on projects.
                </p>
              </div>

              <p className="mt-8 text-center text-slate-300">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="font-semibold text-blue-400 hover:text-blue-300"
                >
                  Sign In
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
