import "./course.css";
import { useParams, useLoaderData, Link } from "react-router-dom";
import GridContainer from "../../containers/gridContainer/gridContainer";
import { BlocksStore } from "../../../modules/stores/blocksStore";

function Course(props) {
  const params = useParams();
  const loadedData = useLoaderData();
  const blocksStore = new BlocksStore(loadedData.infoBlocks);
  return (
    <div className="course-info">
      <div className="course-info__header">
        <div className="course-info__background" style={{backgroundImage: `url(http://127.0.0.1:3000/uploads/SS_test.jpg)`}}></div>
        <div className="course-info__title">Космос: от Земли во Вселенную</div>
      </div>
      <GridContainer blocksStore={blocksStore}/>
    </div>
  );
}

export default Course;


{/* <h1>{courseInfo?.title}</h1>
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
      <Link to="lessons/add">Добавить урок</Link> */}