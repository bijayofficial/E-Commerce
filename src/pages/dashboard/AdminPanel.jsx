import {
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaUserPlus,
  FaPlusCircle,
  FaClipboardList,
  FaArrowUp,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Students",
    value: "542",
    icon: <FaUsers />,
    color: "text-blue-400",
  },
  {
    title: "Courses",
    value: "18",
    icon: <FaBookOpen />,
    color: "text-emerald-400",
  },
  {
    title: "Instructors",
    value: "12",
    icon: <FaChalkboardTeacher />,
    color: "text-violet-400",
  },
  {
    title: "Revenue",
    value: "₹2.4L",
    icon: <FaMoneyBillWave />,
    color: "text-orange-400",
  },
];

const activities = [
  "New student registered",
  "React Course updated",
  "Payment received from Rahul",
  "Java Batch created",
  "New instructor added",
];

const AdminPanel = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400">
              Dashboard
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Welcome, <span className="text-blue-400">Admin</span>
            </h1>

            <p className="mt-2 text-slate-400">
              Manage students, courses, instructors and monitor platform
              activity.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
            + Create Course
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-blue-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">{item.title}</p>

                  <h2 className="mt-3 text-4xl font-bold">{item.value}</h2>
                </div>

                <div
                  className={`rounded-2xl bg-slate-800 p-4 text-3xl ${item.color}`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Recent Activity */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Activity</h2>

              <button className="text-sm text-blue-400 hover:text-blue-300">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
                      <FaClipboardList />
                    </div>

                    <div>
                      <h3 className="font-medium">{activity}</h3>

                      <p className="text-sm text-slate-500">
                        Just a few minutes ago
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-500">Now</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="mb-6 text-2xl font-bold">Quick Actions</h2>

              <div className="space-y-4">
                <button className="flex w-full items-center gap-3 rounded-xl bg-blue-600 px-5 py-4 transition hover:bg-blue-700">
                  <FaPlusCircle />
                  Add New Course
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl bg-emerald-600 px-5 py-4 transition hover:bg-emerald-700">
                  <FaUserPlus />
                  Add Student
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl bg-violet-600 px-5 py-4 transition hover:bg-violet-700">
                  <FaChalkboardTeacher />
                  Add Instructor
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Growth</h2>

                <FaArrowUp className="text-emerald-400 text-xl" />
              </div>

              <h1 className="mt-6 text-5xl font-bold text-emerald-400">+18%</h1>

              <p className="mt-3 text-slate-400">
                Student enrollment has increased compared to last month.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Table */}
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Latest Students</h2>

            <button className="text-blue-400 hover:text-blue-300">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="py-4">Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Rahul Sharma", "rahul@gmail.com", "MERN Stack", "Active"],
                  ["Priya Singh", "priya@gmail.com", "Java", "Active"],
                  ["Aman Das", "aman@gmail.com", "React", "Pending"],
                  ["Sneha Roy", "sneha@gmail.com", "Node.js", "Active"],
                ].map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-800/40"
                  >
                    <td className="py-5">{student[0]}</td>
                    <td>{student[1]}</td>
                    <td>{student[2]}</td>
                    <td>
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          student[3] === "Active"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {student[3]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
