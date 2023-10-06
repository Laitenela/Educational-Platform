import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./components/routes/main/main";
import Profile from "./components/routes/profile/profile";
import ProfileEditor from "./components/routes/profileEditor/profileEditor";
import CourseCreator from "./components/routes/courseCreator/courseCreator";
import Course from "./components/routes/course/course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/my",
        element: <Profile />,
      },
      {
        path: "/my/edit",
        element: <ProfileEditor />,
      },
      {
        path: "/courses/:courseId",
        element: <Course />,
      },
      {
        path: "/courses/create",
        element: <CourseCreator />,
      },
    ],
  },
]);

export default router;
