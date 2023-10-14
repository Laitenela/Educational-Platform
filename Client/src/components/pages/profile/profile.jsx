import './profile.css';
import { observer } from "mobx-react-lite";
import { useLayoutEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import FactoryMenu from "../../containers/factoryMenu/factoryMenu";
import GridContainer from "../../containers/gridContainer/gridContainer";

const Profile = observer(({mode}) => {
  useLayoutEffect(() => window.scrollTo(0, 0));

  const isEditMode = (mode === 'edit');
  const isViewMode = (mode === 'view');

  const loadedData = useLoaderData();
  const blocksStore = loadedData.blocksStore;

  const saveData = async () => {
    const requestOptions = {};
    requestOptions.method = 'POST';
    const data = blocksStore.getData();
    requestOptions.body = JSON.stringify(data)
    requestOptions.headers = {"Content-Type": "application/json"};
    const res = await fetch('http://localhost:3000/api/user/displayForm', {...requestOptions});
    document.location = ('/users/me');
  }

  return (
    <div className="profile">
      {isEditMode && <FactoryMenu />}
      <div className="profile__background" style={{backgroundImage: `url(http://127.0.0.1:3000/uploads/SS_test.jpg)`}}></div>
      {isViewMode && <Link to={`edit`} className="profile__edit-button">Редактировать</Link>}
      {isEditMode && <button onClick={saveData} className="profile__edit-button">Сохранить</button>}
      <GridContainer blocksStore={blocksStore} editable={isEditMode}/>
    </div>
  );
})

export default Profile;