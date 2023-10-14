import "./course.css";
import { Link, useLoaderData } from "react-router-dom";
import { BlocksStore } from "../../../modules/stores/blocksStore";
import GridContainer from "../../containers/gridContainer/gridContainer";
import FactoryMenu from "../../containers/factoryMenu/factoryMenu";

function Course({mode}) {

  const isEditMode = (mode === 'edit');
  const isViewMode = (mode === 'view');

  const loadedData = useLoaderData();
  console.log(loadedData);
  const blocksStore = new BlocksStore(loadedData.infoBlocks);

  const saveData = async () => {
    const requestOptions = {};
    requestOptions.method = 'POST';
    const data = blocksStore.getData();
    requestOptions.body = JSON.stringify(data)
    requestOptions.headers = {"Content-Type": "application/json"};
    const res = await fetch(`http://localhost:3000/api/course/displayForm/?uid=${loadedData.courseId}`, {...requestOptions});
    document.location = (`/courses/${loadedData.courseId}`);
  }

  return (
    <div className="course-info">
      {isEditMode && <FactoryMenu />}
      {isViewMode && <Link to={`edit`} className="course-info__edit-button">Редактировать</Link>}
      {isEditMode && <button onClick={saveData} className="course-info__edit-button">Сохранить</button>}
      <div className="course-info__header">
        <div className="course-info__background" style={{backgroundImage: `url(http://127.0.0.1:3000/uploads/SS_test.jpg)`}}></div>
        <div className="course-info__title">Космос: от Земли во Вселенную</div>
      </div>
      <GridContainer editable={isEditMode} blocksStore={blocksStore}/>
    </div>
  );
}

export default Course;