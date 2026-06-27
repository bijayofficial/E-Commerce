import {
  FaChalkboardTeacher,
  FaRocket,
  FaUsers,
  FaCertificate,
  FaLaptopCode,
  FaHandshake,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Industry Expert Mentors",
      desc: "Learn directly from developers working in top tech companies.",
      icon: <FaChalkboardTeacher />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Job-Oriented Training",
      desc: "Curriculum designed to get you hired, not just certified.",
      icon: <FaRocket />,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Community Learning",
      desc: "Join a strong peer network of learners and developers.",
      icon: <FaUsers />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Certification Programs",
      desc: "Earn verified certificates that boost your resume value.",
      icon: <FaCertificate />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Hands-on Projects",
      desc: "Build real-world applications for your portfolio.",
      icon: <FaLaptopCode />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      title: "Placement Assistance",
      desc: "Mock interviews, resume building & job referrals.",
      icon: <FaHandshake />,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {/* Background glow */}
      <div className="absolute left-20 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Why Choose{" "}
            <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              YuktiTech?
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            We don’t just teach coding — we build careers. Our focus is
            practical learning, real-world experience, and guaranteed skill
            growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl"
            >
              {/* Icon */}
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} text-2xl ${item.color} transition group-hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-blue-400">1000+</h3>
            <p className="text-sm text-slate-400">Students Trained</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-indigo-400">150+</h3>
            <p className="text-sm text-slate-400">Projects Built</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-emerald-400">95%</h3>
            <p className="text-sm text-slate-400">Placement Rate</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
            <p className="text-sm text-slate-400">Support Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
