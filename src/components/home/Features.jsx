import React from "react";

import {
  FaLaptopCode,
  FaProjectDiagram,
  FaVideo,
  FaUserGraduate,
  FaBook,
  FaBriefcase,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Live Interactive Classes",
      desc: "Learn directly from industry experts in real time.",
      icon: <FaLaptopCode />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Real World Projects",
      desc: "Build production-level applications for your portfolio.",
      icon: <FaProjectDiagram />,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Recorded Sessions",
      desc: "Never miss a class with lifetime access recordings.",
      icon: <FaVideo />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      title: "1:1 Mentorship",
      desc: "Get personalized guidance from experienced mentors.",
      icon: <FaUserGraduate />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Practice Assignments",
      desc: "Strengthen your skills with structured assignments.",
      icon: <FaBook />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: "Placement Support",
      desc: "Resume building, mock interviews & job referrals.",
      icon: <FaBriefcase />,
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      {/* Background glow */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Students Love Our Institute
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to become industry-ready and land your dream
            job.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl"
            >
              {/* Icon */}
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} text-2xl ${feature.color} transition group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{feature.title}</h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
