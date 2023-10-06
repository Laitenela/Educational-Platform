import { useEffect, useState } from "react";
import "./course.css";
import { useParams, useLoaderData, Link } from "react-router-dom";

function Course(props) {
  const params = useParams();
  const courseInfo = useLoaderData();
  console.log(courseInfo);

  return (
    <div className="course-info">
      <h1>{courseInfo?.title}</h1>
      <img
        className="course-info__image"
        src={`http://127.0.0.1:3000/uploads/${courseInfo?.picture}`}
      />
      <p>{courseInfo?.description}</p>
      <p>{courseInfo?.course_info}</p>
      <p>{courseInfo?.price}</p>
      <div>
        <Link to="edit">Редактировать</Link>
      </div>
      <div className="lessons">
        {courseInfo.lessons.map((lesson) => {
          return (
            <div className="lesson">
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </div>
          );
        })}
      </div>
      <Link to="lessons/add">Добавить урок</Link>
    </div>
  );
}

export default Course;
