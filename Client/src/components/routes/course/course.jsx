import { useEffect, useState } from "react";
import "./course.css";
import { useParams, Link } from "react-router-dom";

function Course(props) {
  const params = useParams();
  const [courseInfo, setCourseInfo] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://127.0.0.1:3000/api/course/info?id=" + params.courseId
      );
      const courseData = await response.json();
      setCourseInfo(courseData);
    })();
  }, []);

  return (
    <div className="course-info">
      {courseInfo && (
        <>
          <h1>{courseInfo?.title}</h1>
          <img
            className="course-info__image"
            src={`http://127.0.0.1:3000/uploads/${courseInfo?.picture}`}
            alt=""
          />
          <p>{courseInfo?.description}</p>
          <p>{courseInfo?.course_info}</p>
          <p>{courseInfo?.price}</p>
        </>
      )}
      <div>
        <Link to='edit'>Редактировать</Link>
      </div>
      <Link to='addLesson'>Добавить урок</Link>
    </div>
  );
}

export default Course;
