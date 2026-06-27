import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 left-20 h-96 w-96 rounded-full bg-blue-600/30 blur-[140px]" />
      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-indigo-600/30 blur-[160px]" />

      {/* Floating animated shapes */}
      <div className="absolute left-10 top-20 h-6 w-6 animate-bounce rounded-full bg-blue-500/60" />
      <div className="absolute bottom-20 right-20 h-4 w-4 animate-pulse rounded-full bg-indigo-400/60" />

      <div className="container mx-auto px-6">
        <div className="grid min-h-[90vh] items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
              🪄 MERN Stack Development Program
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Become a{" "}
              <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>{" "}
              in 6 Months
            </h1>

            {/* Sub text */}
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Master React, Node.js, Express, MongoDB, Java, and build
              real-world projects with placement assistance and mentorship from
              industry experts.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/courses"
                className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-1 hover:shadow-blue-500/30"
              >
                Explore Courses
              </NavLink>

              <NavLink
                to="/register"
                className="rounded-2xl border border-slate-600 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-500"
              >
                Join New Batch
              </NavLink>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-blue-400">500+</h2>
                <p className="text-sm text-slate-300">Students</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-indigo-400">100+</h2>
                <p className="text-sm text-slate-300">Projects</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-emerald-400">90%</h2>
                <p className="text-sm text-slate-300">Success Rate</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL SECTION */}
          <div className="relative flex items-center justify-center">
            {/* Main glowing card */}
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-2xl">
              <h3 className="text-lg font-semibold text-white">
                Live Learning Dashboard
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                Track your progress in real time
              </p>

              {/* Mock UI blocks */}
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-blue-500/10 p-4">
                  <p className="text-sm text-slate-300">React Progress</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
                    <div className="h-2 w-4/5 rounded-full bg-blue-500"></div>
                  </div>
                </div>

                <div className="rounded-2xl bg-indigo-500/10 p-4">
                  <p className="text-sm text-slate-300">Backend Skills</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
                    <div className="h-2 w-3/5 rounded-full bg-indigo-500"></div>
                  </div>
                </div>

                <div className="rounded-2xl bg-emerald-500/10 p-4">
                  <p className="text-sm text-slate-300">Placement Readiness</p>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
                    <div className="h-2 w-4/6 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative blobs */}
            <div className="absolute -left-6 top-10 h-24 w-24 animate-pulse rounded-full bg-blue-500/30 blur-2xl" />
            <div className="absolute -bottom-10 right-0 h-32 w-32 animate-bounce rounded-full bg-indigo-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
