import "./profileEditor.css";
import { useLoaderData } from "react-router-dom";
import GridContainer from "../../containers/gridContainer/gridContainer";
import FactoryMenu from "../../containers/factoryMenu/factoryMenu";

function ProfileEditor() {
  const loadedData = useLoaderData();
  const blocksStore = loadedData.blocksStore;

  const saveData = async () => {
    const data = blocksStore.getData();
    const res = await fetch('http://localhost:3000/api/user/displayForm', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    
    document.location = ('/users/me');
  }

  return (
    <div className="profile">
      <FactoryMenu />
      <div className="profile__background" style={{ backgroundImage: `url(http://127.0.0.1:3000/uploads/SS_test.jpg)` }}></div>
      <button onClick={saveData} className="profile__edit-button">Сохранить</button>
      <GridContainer blocksStore={blocksStore} editable />
    </div>
  );
}

export default ProfileEditor;