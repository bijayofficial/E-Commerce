import { useState } from "react";
import { FaUserCog, FaLock, FaBell, FaMoon, FaSave } from "react-icons/fa";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: true,
    publicProfile: false,
    twoFactorAuth: false,
  });

  const handleToggle = (e) => {
    const { name, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Settings saved successfully!");
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Account Settings
          </p>

          <h1 className="mt-2 text-4xl font-bold">Settings</h1>

          <p className="mt-2 text-slate-400">
            Customize your account preferences and security settings.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Settings */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <FaUserCog className="text-2xl text-blue-400" />
              <h2 className="text-2xl font-semibold">Profile Settings</h2>
            </div>

            <div className="space-y-5">
              <label className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
                <div>
                  <h3 className="font-medium">Public Profile</h3>

                  <p className="text-sm text-slate-400">
                    Allow others to view your profile.
                  </p>
                </div>

                <input
                  type="checkbox"
                  name="publicProfile"
                  checked={settings.publicProfile}
                  onChange={handleToggle}
                  className="h-5 w-5 accent-blue-600"
                />
              </label>
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <FaBell className="text-2xl text-emerald-400" />
              <h2 className="text-2xl font-semibold">Notifications</h2>
            </div>

            <label className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
              <div>
                <h3 className="font-medium">Email Notifications</h3>

                <p className="text-sm text-slate-400">
                  Receive updates about new courses and announcements.
                </p>
              </div>

              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleToggle}
                className="h-5 w-5 accent-emerald-500"
              />
            </label>
          </div>

          {/* Security */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <FaLock className="text-2xl text-orange-400" />
              <h2 className="text-2xl font-semibold">Security</h2>
            </div>

            <label className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
              <div>
                <h3 className="font-medium">Two-Factor Authentication</h3>

                <p className="text-sm text-slate-400">
                  Add an extra layer of account security.
                </p>
              </div>

              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={settings.twoFactorAuth}
                onChange={handleToggle}
                className="h-5 w-5 accent-orange-500"
              />
            </label>
          </div>

          {/* Appearance */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <FaMoon className="text-2xl text-violet-400" />
              <h2 className="text-2xl font-semibold">Appearance</h2>
            </div>

            <label className="flex items-center justify-between rounded-xl bg-slate-950 p-4">
              <div>
                <h3 className="font-medium">Dark Mode</h3>

                <p className="text-sm text-slate-400">
                  Use the dark theme throughout the application.
                </p>
              </div>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleToggle}
                className="h-5 w-5 accent-violet-500"
              />
            </label>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
            >
              <FaSave />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Settings;
