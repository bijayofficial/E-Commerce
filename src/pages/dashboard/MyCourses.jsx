import { FaBookOpen, FaClock, FaPlayCircle } from "react-icons/fa";
import { UseContext } from "../../context/CourseContext";
import { UserAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

const MyCourses = () => {
  const { courses } = UseContext();
  const { currentUser } = UserAuth();

  // Example:
  // currentUser.enrolledCourses = [1,3,5]

  const myCourses = currentUser?.enrolledCourses
    ? courses.filter((course) =>
        currentUser.enrolledCourses.includes(course.id),
      )
    : [];

  return (
    <section className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="uppercase tracking-widest text-blue-400 text-sm">
            Student Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold">My Courses</h1>

          <p className="mt-3 text-slate-400">
            Continue learning from your enrolled courses.
          </p>
        </div>

        {/* No Courses */}
        {myCourses.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
            <FaBookOpen className="mx-auto mb-6 text-6xl text-blue-400" />

            <h2 className="text-3xl font-bold">No Courses Enrolled</h2>

            <p className="mt-4 text-slate-400">
              You haven't enrolled in any courses yet.
            </p>
            <NavLink
              to="/courses"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
            >
              Browse Courses
            </NavLink>
          </div>
        ) : (
          <>
            {/* Summary */}
            <div className="mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-2xl font-bold">
                Welcome back, {currentUser?.name}
              </h2>

              <p className="mt-2 text-slate-400">
                You are enrolled in{" "}
                <span className="font-semibold text-blue-400">
                  {myCourses.length}
                </span>{" "}
                course(s).
              </p>
            </div>

            {/* Courses */}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {myCourses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-52 w-full rounded-2xl object-cover"
                  />

                  <h2 className="mt-5 text-2xl font-bold">{course.title}</h2>

                  <p className="mt-3 line-clamp-3 text-slate-400">
                    {course.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-slate-400">
                    <span className="flex items-center gap-2">
                      <FaClock />
                      {course.duration}
                    </span>

                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                      Enrolled
                    </span>
                  </div>

                  <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">
                    <FaPlayCircle />
                    Continue Learning
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyCourses;
