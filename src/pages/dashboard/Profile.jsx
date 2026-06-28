import {
  FaUserCircle,
  FaEnvelope,
  FaUserTag,
  FaGraduationCap,
  FaEdit,
} from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";

const Profile = () => {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
          <FaUserCircle className="mx-auto mb-4 text-6xl text-slate-500" />
          <h2 className="text-2xl font-bold">No User Found</h2>
          <p className="mt-2 text-slate-400">
            Please login to view your profile.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            My Profile
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Welcome,
            <span className="text-blue-400"> {currentUser.name}</span>
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your personal information and account details.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="flex flex-col items-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-600 text-6xl">
                <FaUserCircle />
              </div>

              <h2 className="mt-6 text-2xl font-bold">{currentUser.name}</h2>

              <p className="mt-2 rounded-full bg-blue-600/20 px-4 py-1 capitalize text-blue-400">
                {currentUser.role}
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700">
                <FaEdit />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right Details */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="mb-6 text-2xl font-bold">Personal Information</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 p-5">
                  <div className="mb-3 flex items-center gap-3 text-blue-400">
                    <FaUserCircle />
                    <span className="font-semibold">Full Name</span>
                  </div>

                  <p className="text-lg">{currentUser.name}</p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-5">
                  <div className="mb-3 flex items-center gap-3 text-emerald-400">
                    <FaEnvelope />
                    <span className="font-semibold">Email</span>
                  </div>

                  <p className="text-lg">{currentUser.email}</p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-5">
                  <div className="mb-3 flex items-center gap-3 text-violet-400">
                    <FaUserTag />
                    <span className="font-semibold">Role</span>
                  </div>

                  <p className="text-lg capitalize">{currentUser.role}</p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-5">
                  <div className="mb-3 flex items-center gap-3 text-orange-400">
                    <FaGraduationCap />
                    <span className="font-semibold">Course</span>
                  </div>

                  <p className="text-lg">
                    {currentUser.course || "Not Enrolled"}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Overview */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="mb-6 text-2xl font-bold">Account Overview</h2>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-950 p-6 text-center">
                  <h3 className="text-3xl font-bold text-blue-400">5</h3>
                  <p className="mt-2 text-slate-400">Courses Enrolled</p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 text-center">
                  <h3 className="text-3xl font-bold text-emerald-400">18</h3>
                  <p className="mt-2 text-slate-400">Completed Lessons</p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-6 text-center">
                  <h3 className="text-3xl font-bold text-violet-400">92%</h3>
                  <p className="mt-2 text-slate-400">Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
