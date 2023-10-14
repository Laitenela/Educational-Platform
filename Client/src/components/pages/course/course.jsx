import "./course.css";
import { useLoaderData } from "react-router-dom";
import { BlocksStore } from "../../../modules/stores/blocksStore";
import GridContainer from "../../containers/gridContainer/gridContainer";

function Course() {
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