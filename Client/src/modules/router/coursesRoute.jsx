import Course from "../../components/pages/course/course";
import CourseCreator from "../../components/pages/courseCreator/courseCreator";
import CourseEditor from "../../components/pages/courseEditor/courseEditor";
import routeLoader from "../loaders/loaders";
import lessonsRoute from "./lessonsRoute";

const coursesRoute = [
  {
    path: "create",
    element: <CourseCreator />,
  },
  {
    path: ":courseId",
    element: <Course />,
    loader: routeLoader.course,
  },
  {
    path: ":courseId/edit",
    element: <CourseEditor />,
    loader: routeLoader.courseEditor,
  },
  {
    path: ":courseId/lessons",
    children: lessonsRoute
  },
];

export default coursesRoute;
