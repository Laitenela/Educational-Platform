import { useParams } from "react-router-dom";
import "./lessonCreator.css";

function LessonCreator() {
  const params = useParams();

  async function lessonCreate(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('course_id', params.courseId);
    const response = await fetch("http://127.0.0.1:3000/api/lesson/create", {
      method: "POST",
      body: data,
    });

    window.location = `/courses/${params.courseId}`;
  }

  return (
    <div>
      <form className="lesson-creator" onSubmit={lessonCreate}>
        <div>
          <input type="text" placeholder="Название" name="title" id="title" />
        </div>
        <div>
          <input type="file" placeholder="Картинка" name="picture" id="picture" />
        </div>
        <div>
          <textarea type="text" placeholder="Описание" name="description" id="description" />
        </div>
        <div>
          <textarea placeholder="Разметка" type="text" name="layout" id="layout" />
        </div>
        <div>
          <button type="submit">Добавить</button>
        </div>
      </form>
    </div>
  );
}

export default LessonCreator;
