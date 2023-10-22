import Course from "../../components/pages/course/course";
import CourseCreator from "../../components/pages/courseCreator/courseCreator";
import UserCourses from "../../components/pages/userCourses/userCourses";
import routeLoader from "../loaders/loaders";
import lessonsRoute from "./lessonsRoute";

const coursesRoute = [
  {
    path: "create",
    element: <CourseCreator />,
  },
  {
    path: "my",
    element: <UserCourses />,
    loader: routeLoader.userCourses
  },
  {
    path: ":courseId",
    element: <Course mode="view" />,
    loader: routeLoader.course,
  },
  {
    path: ":courseId/edit",
    element: <Course mode="edit" />,
    loader: routeLoader.course,
  },
  {
    path: ":courseId/lessons",
    children: lessonsRoute
  },
];

export default coursesRoute;
