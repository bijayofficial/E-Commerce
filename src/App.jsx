import router from "./routes/AppRouter";
import { RouterProvider } from "react-router-dom";
import { CourseProvider } from "./context/CourseContext.jsx";
// import { UserAuth } from "./context/AuthContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
const App = () => {
  return (
    <CourseProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CourseProvider>
  );
};

export default App;
