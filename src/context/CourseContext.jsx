import { createContext, useContext, useState } from "react";
import initialCourse from "../data/courses.js";

// create context

const CourseContext = createContext();

// provide
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(initialCourse);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const UseContext = () => {
  return useContext(CourseContext);
};
