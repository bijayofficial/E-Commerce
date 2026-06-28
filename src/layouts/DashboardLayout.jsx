import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/layout/Sidebar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="flex min-h-screen flex-col lg:ml-72">
        {/* Mobile Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-950 p-4 md:hidden">
          <button onClick={() => setOpen(true)} className="text-2xl text-white">
            <FaBars />
          </button>

          <h2 className="text-lg font-bold text-white">
            Yukti<span className="text-blue-500">Tech</span>
          </h2>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-slate-950 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
