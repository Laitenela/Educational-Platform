import "./profileEditor.css";
import { useLoaderData } from "react-router-dom";
import GridContainer from "../../containers/gridMenu/gridContainer";
import { BlocksStore } from "../../../modules/stores/blocksStore";
import FactoryMenu from "../../containers/factoryMenu/factoryMenu";

function ProfileEditor() {
  const loadedData = useLoaderData();
  const blocksStore = loadedData.blocksStore;
  const userOptions = loadedData.userOptions;
  console.log(userOptions);

  return (
    <div className="user-forms">
      <FactoryMenu />
      <div className="profile__background" style={{ backgroundImage: `url(http://127.0.0.1:3000/uploads/SS_test.jpg)` }}></div>
      <GridContainer blocksStore={blocksStore} userOptions={userOptions} editable />
    </div>
  );
}

export default ProfileEditor;

/* 
  async function updateData(event) {
  console.log(event.target.action);
  event.preventDefault();
  const data = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: "POST",
    body: data,
  });
  window.location = "";
}  
  <form id="avatar-form" action={import.meta.env.DEV ? "http://127.0.0.1:3000/api/user/avatar" : "api/user/avatar"} method="post" onSubmit={updateData}>
        <div>
          <input type="file" name="avatar" id="avatar" />
        </div>
        <div>
          <input type="submit" value="Загрузить!" />
        </div>
      </form>
      <form id="options-form" action={import.meta.env.DEV ? "http://127.0.0.1:3000/api/user/settings" : "api/update/user/settings"} method="post" onSubmit={updateData}>
        <div>
          <input placeholder="Имя" type="text" name="name" id="name" defaultValue={userOptions.settings.name}/>
        </div>
        <div>
          <textarea placeholder="О себе" name="description" id="description" cols="30" rows="10" defaultValue={userOptions.settings.description}></textarea>
        </div>
        <div>
          <input type="text" placeholder="Любимый овощ" name="favoriteVegetable" id="favoriteVegetable" defaultValue={userOptions.settings.favoriteVegetable} />
        </div>
        <div>
          <input type="submit" value="Сохранить!" />
        </div>
      </form> 
*/
