import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Main from "./components/routes/main/main";
import Profile from "./components/routes/profile/profile";
import ProfileEditor from "./components/routes/profileEditor/profileEditor";
import CourseCreator from "./components/routes/courseCreator/courseCreator";
import Course from "./components/routes/course/course";
import CourseEditor from "./components/routes/courseEditor/courseEditor";
import LessonCreator from "./components/routes/lessonCreator/lessonCreator";

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
        path: "/courses/:courseId/edit",
        element: <CourseEditor />,
      },
      {
        path: "/courses/:courseId/addLesson",
        element: <LessonCreator />,
      },
      {
        path: "/courses/create",
        element: <CourseCreator />,
      },
    ],
  },
]);

export default router;
