import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './profile.css';

function Profile() {
  const userOptions = useLoaderData();

  return (
    <div className="profile">
      <div className="user-data">
        <img className="user-data__avatar" src={`http://127.0.0.1:3000/uploads/${userOptions.avatar}`} alt="" />
        <h2 className="user-data__name">{userOptions.name}</h2>
        <div className="user-data__description">
          <h3>Описание:</h3>
          <p>{userOptions.description}</p>
        </div>
        <div className="user-data__favoriteVegetable">
          <h4>Любимый овощ:</h4>
          <p>{userOptions.favoriteVegetable}</p>
        </div>
        <Link to={`edit`}>Редактировать</Link>
      </div>
    </div>
  );
}

export default Profile;