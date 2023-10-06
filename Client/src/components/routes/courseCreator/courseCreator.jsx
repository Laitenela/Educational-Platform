import "./courseCreator.css";

async function courseCreate(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const response = await fetch("http://127.0.0.1:3000/api/course/create", {
    method: "POST",
    body: data,
  });
  const json = await response.json();
  window.location = `/courses/${json.uid}`;
}

function CourseCreator() {
  return (
    <div>
      <form className="course-creator" onSubmit={courseCreate}>
        <div>
          <label htmlFor="title">Название</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="picture">Картинка</label>
          <input type="file" name="picture" id="picture" />
        </div>
        <div>
          <label htmlFor="description">Описание</label>
          <textarea type="text" name="description" id="description" />
        </div>
        <div>
          <label htmlFor="course_info">Дополнительная информация</label>
          <input type="text" name="course_info" id="course_info" />
        </div>
        <div>
          <label htmlFor="price">Цена</label>
          <input type="number" name="price" id="price" />
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}

export default CourseCreator;
