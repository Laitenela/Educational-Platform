import { useEffect, useState } from "react";
import "./lessonEditor.css";
import { useParams } from "react-router-dom";

function LessonEditor() {
  const params = useParams();

  async function courseEdit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('id', params.lessonId);
    const response = await fetch("http://127.0.0.1:3000/api/course/edit", {
      method: "POST",
      body: data,
    });
    window.location = `/courses/${params.courseId}/lesson${params.lessonId}`;
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://127.0.0.1:3000/api/lesson/info?id=${params.lessonId}`);
      const data = await response.json();
      document.getElementById('title').value = data.title;
      document.getElementById('description').value = data.description;
      document.getElementById('course_info').value = data.course_info;
      document.getElementById('price').value = data.price;
    })();
  }, []);

  return (
    <div>
      <form className="lesson-editor" onSubmit={courseEdit}>
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

export default LessonEditor;