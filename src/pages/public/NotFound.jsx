import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl md:text-9xl font-extrabold text-indigo-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">Page Not Found</h2>

        <p className="mt-4 text-slate-400 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 transition font-semibold"
          >
            Go Back
          </button>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Error Code: <span className="text-indigo-400">404</span>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
