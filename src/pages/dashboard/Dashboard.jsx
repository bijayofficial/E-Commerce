import { UserAuth } from "../../context/AuthContext";
import { UseContext } from "../../context/CourseContext";

const Dashboard = () => {
  const { currentUser, users } = UserAuth();
  const { courses } = UseContext();

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}

        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Welcome Back,
            <span className="text-blue-400">
              {" "}
              {currentUser?.name || "Student"} 👋
            </span>
          </h1>

          <p className="mt-3 text-slate-400">{currentUser?.email}</p>
        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-slate-400">Available Courses</h3>

            <h1 className="mt-3 text-5xl font-bold text-blue-400">
              {courses.length}
            </h1>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-slate-400">Registered Users</h3>

            <h1 className="mt-3 text-5xl font-bold text-emerald-400">
              {users.length}
            </h1>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-slate-400">Role</h3>

            <h1 className="mt-3 text-3xl font-bold text-purple-400 capitalize">
              {currentUser?.role}
            </h1>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-slate-400">Learning Status</h3>

            <h1 className="mt-3 text-3xl font-bold text-orange-400">Active</h1>
          </div>
        </div>

        {/* Courses */}

        <div className="mt-10">
          <h2 className="mb-6 text-3xl font-bold">Explore Courses</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <div
                key={course.id}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:border-blue-500"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <span className="rounded bg-blue-600 px-3 py-1 text-xs">
                    {course.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">{course.title}</h3>

                  <p className="mt-2 line-clamp-2 text-slate-400">
                    {course.description}
                  </p>

                  <div className="mt-5 flex justify-between text-sm text-slate-400">
                    <span>{course.duration}</span>

                    <span>{course.students} Students</span>
                  </div>

                  <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 transition hover:bg-blue-700">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile */}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-6 text-3xl font-bold">My Profile</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-slate-400">Name</p>

              <h3 className="text-xl font-semibold">{currentUser?.name}</h3>
            </div>

            <div>
              <p className="text-slate-400">Email</p>

              <h3 className="text-xl font-semibold">{currentUser?.email}</h3>
            </div>

            <div>
              <p className="text-slate-400">Role</p>

              <h3 className="text-xl font-semibold capitalize">
                {currentUser?.role}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
