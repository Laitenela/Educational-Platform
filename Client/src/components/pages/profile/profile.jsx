import { useLayoutEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './profile.css';
import GridContainer from "../../containers/gridContainer/gridContainer";
import { observer } from "mobx-react-lite";
import { BlocksStore } from "../../../modules/stores/blocksStore";

const Profile = observer(() => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const loadedData = useLoaderData();
  const blocksStore = loadedData.blocksStore;

  return (
    <div className="profile">
      <div className="profile__background" style={{backgroundImage: `url(http://127.0.0.1:3000/uploads/SS_test.jpg)`}}></div>
      <Link to={`edit`} className="profile__edit-button">Редактировать</Link>
      <GridContainer blocksStore={blocksStore}/>
    </div>
  );
})

export default Profile;