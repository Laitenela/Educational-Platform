import Lesson from "../../components/pages/lesson/lesson";
import LessonCreator from "../../components/pages/lessonCreator/lessonCreator";
import LessonEditor from "../../components/pages/lessonEditor/lessonEditor";

const lessonsRoute = [
  {
    path: "add",
    element: <LessonCreator />,
  },
  {
    path: ":lessonId",
    element: <Lesson />,
  },
  {
    path: ":lessonId/edit",
    element: <LessonEditor />,
  },
];

export default lessonsRoute;
