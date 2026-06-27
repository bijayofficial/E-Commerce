import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />

      <main className="flex-1 bg-slate-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
