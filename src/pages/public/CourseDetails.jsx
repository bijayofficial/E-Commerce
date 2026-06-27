import { NavLink, useParams } from "react-router-dom";
import { FaUser, FaClock, FaSignal, FaCheckCircle } from "react-icons/fa";
import { UseContext } from "../../context/CourseContext.jsx";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses } = UseContext();
  const course = courses.find((course) => course.id === Number(id));
  console.log(course);

  if (!course) {
    return (
      <section className="container  mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-mono text-red-800 md:text-5xl">
          Course Not Found
        </h1>
        <p className="mt-4 text-slate-200">
          The course you are looking for does not exist.
        </p>

        <NavLink
          to="/courses"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-800"
        >
          Back to Courses
        </NavLink>
      </section>
    );
  } else {
    return (
      <>
        {/* Hero */}
        {/* 
        
        id: 7,
        title: "Express.js API Development",
        category: "Backend",
        students: 90,
        duration: "3 Months",
        level: "Intermediate",
        price: 14000,
        description:
            "Create RESTful APIs with Express.js, authentication, middleware, error handling, and database connectivity.",
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
        */}
        <section className="bg-slate-900 rounded-2xl py-12 px-14 md:px-20 text-white md:py-20 ">
          <div className="container mx-auto  md:py-6">
            <span className="rounded-lg bg-blue-600 px-3 py-1 text-sm">
              {course.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold md:text-5xl">
              {course.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              {course.description}
            </p>

            {/* stats */}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div
                className="flex items-center gap-3
             rounded-lg bg-slate-800 p-4"
              >
                <FaUser className="text-blue-400" />
                <span>{course.students}</span>
              </div>
              <div
                className="flex items-center gap-3
             rounded-lg bg-slate-800 p-4"
              >
                <FaClock className="text-blue-400" />
                <span>{course.duration}</span>
              </div>
              <div
                className="flex items-center gap-3
             rounded-lg bg-slate-800 p-4"
              >
                <FaSignal className="text-blue-400" />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}

        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* sidebar */}
            <div className="order-1 lg:order-2">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lg lg:sticky lg:top-24">
                <h3 className="text-3xl font-bold text-blue-600 md:text-4xl">
                  {course.price}
                </h3>
                <p className="mt-2 text-slate-500">One-time enrollment fee</p>

                <div className="mt-2 space-y-2 border-t pt-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration</span>
                    <span className="text-slate-900 font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">Level</span>
                    <span className="text-slate-900 font-medium">
                      {course.level}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">Students</span>
                    <span className="text-slate-900 font-medium">
                      {course.students}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">Projects</span>
                    <span className="text-slate-900 font-medium">20+</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">Certification</span>
                    <span className="text-slate-900 font-medium">Included</span>
                  </div>
                </div>

                <button className="mt-8 w-full bg-blue-600 rounded-lg py-3 font-semibold text-white transition hover:bg-blue-900">
                  Enroll Now
                </button>

                <NavLink
                  to="/courses"
                  className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-800"
                >
                  Browse More Courses
                </NavLink>
              </div>
            </div>

            {/* main content */}

            <div className="order-2 lg:order-1 lg:col-span-2">
              <img
                src={course.image}
                alt={course.title}
                loading="lazy"
                className="h-64 w-full rounded-xl object-cover shadow-lg md:h-97"
              />

              {/* ABOUT */}

              <div>
                <h2>About the course</h2>
                <p>{course.description}</p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur dolor veritatis voluptates obcaecati accusamus
                  doloribus cumque assumenda quod a fugit, vitae vero dolorem
                  facere, exercitationem placeat libero provident adipisci iste
                  blanditiis aut itaque! Vero asperiores, explicabo maiores
                  recusandae adipisci autem veniam doloribus cumque ullam, sunt
                  aperiam magni, accusamus assumenda voluptates.
                </p>
              </div>

              {/*  learning outcomes*/}

              <div>
                <h2>What You'll Learn</h2>

                <div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Industry Standard Development Workflow",
                      "API Integration",
                      "Git & GitHub",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course highlight to add */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default CourseDetails;
