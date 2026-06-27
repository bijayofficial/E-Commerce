import { NavLink } from "react-router-dom";
import { UseContext } from "../../context/CourseContext.jsx";

import CourseCard from "../../components/courses/CourseCard.jsx";
const Courses = () => {
  const { courses } = UseContext();
  // console.log(courses);
  return (
    // Hero section
    <>
      <section className=" rounded-2xl bg-linear-to-r from-blue-700 to via-indigo-700 to-purple-700 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <span className="rounded-full bg-white/30 px-4 py-2 text-md">
            🪄 Explore Courses
          </span>

          <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Learn Industry Ready Skills.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Master modern web development with practical projects, mentorship
            and real-world implementation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-blue-600">
              {courses.length}
            </h2>
            <p className="mt-2 text-slate-500 ">Available Courses</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="mt-2 text-slate-500 ">Students</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-blue-600">90%</h2>
            <p className="mt-2 text-slate-500 ">Success Rate</p>
          </div>
        </div>
      </section>

      {/* course grid */}
      <section className="container mx-auto px-6 py-10">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold">Our Courses</h2>
          <p className="mt-4 text-slate-400">
            Learn from Beginner to advance with guided mentorship and
            project-based learning.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">Ready to Start Learning?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Join our MERN Stack batch and start building production-ready
            applications.
          </p>

          <NavLink
            to="/register"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold"
          >
            Join Next Batch
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Courses;
