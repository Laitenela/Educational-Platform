import { useEffect, useState } from "react";
import "./courseEditor.css";
import { useParams } from "react-router-dom";

function CourseEditor() {
  const params = useParams();

  async function courseEdit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('id', params.courseId);
    const response = await fetch("http://127.0.0.1:3000/api/course/edit", {
      method: "POST",
      body: data,
    });
    window.location = `/courses/${params.courseId}`;
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://127.0.0.1:3000/api/course/info?id=" + params.courseId
      );
      const data = await response.json();
      document.getElementById('title').value = data.title;
      document.getElementById('description').value = data.description;
      document.getElementById('course_info').value = data.course_info;
      document.getElementById('price').value = data.price;
    })();
  }, []);

  return (
    <div>
      <form className="course-creator" onSubmit={courseEdit}>
        <div>
          <input placeholder="Название" type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="picture">Картинка</label>
          <input type="file" name="picture" id="picture" />
        </div>
        <div>
          <textarea placeholder="Описание" type="text" name="description" id="description" />
        </div>
        <div>
          <textarea placeholder="Дополнительная информация" type="text" name="course_info" id="course_info" />
        </div>
        <div>
          <input placeholder="Цена" type="number" name="price" id="price" />
        </div>
        <div>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  );
}

export default CourseEditor;