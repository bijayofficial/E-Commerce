import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaClock, FaArrowRight } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Skeleton */}

      {!loaded && (
        <div className="h-60 w-full animate-pulse bg-slate-200"></div>
      )}

      <img
        src={course.image}
        alt={course.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-60 w-full object-cover transition-opacity duration-700
          
          ${loaded ? "opacity-100" : "absolute opacity-0"}
          `}
      />

      {/* content */}

      <div className="p-6">
        <span className="rounded-full bg-blue-200 px-3 py-1 text-sm font-medium text-blue-800">
          {course.category}
        </span>
        <h3 className="mt-4 text-2xl font-bold text-slate-900 ">
          {course.title}
        </h3>
        <div className="mt-5 text-slate-500  flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-600" />
            <span>{course.students}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-blue-600" />
            <span>{course.duration}</span>
          </div>
        </div>

        <NavLink
          to={`/courses/${course.id}`}
          className="mt-6 text-white bg-blue-600 flex items-center gap-2 justify-center rounded-xl py-3 font-semibold transition hover:bg-blue-800"
        >
          Vew Details
        </NavLink>
      </div>
    </div>
  );
};

export default CourseCard;
