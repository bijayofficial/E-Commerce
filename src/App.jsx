import router from "./routes/AppRouter";
import { RouterProvider } from "react-router-dom";
import { CourseProvider } from "./context/CourseContext";

const App = () => {
  return (
    <CourseProvider>
      <RouterProvider router={router} />
    </CourseProvider>
  );
};

export default App;
