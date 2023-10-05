import { useEffect } from 'react';
import './profileEditor.css';

async function updateData(event) {
  console.log(event.target.action);
  event.preventDefault();
  const data = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: 'POST',
    body: data
  });
  window.location = '';
}

function ProfileEditor(){
  useEffect(() => {
    (async() => {
      const response = await fetch('http://127.0.0.1:3000/api/userInfo', {method: 'POST'});
      const data = await response.json();
      document.getElementById('name').value = data.settings.name;
      document.getElementById('description').value = data.settings.description;
      document.getElementById('favoriteVegetable').value = data.settings.favoriteVegetable;
    })();
  }, [])

  return(
    <div>
      <form id="avatar-form" action={import.meta.env.DEV ? "http://127.0.0.1:3000/api/update/useravatar" : "api/update/useravatar"} method="post" onSubmit={updateData}>
        <input type="file" name="avatar" id="avatar" />
        <input type="submit" value="Загрузить!" />
      </form>
      <form id="options-form" action={import.meta.env.DEV ? "http://127.0.0.1:3000/api/update/useravatar" : "api/update/usersettings"} method="post" onSubmit={updateData}>
        <input type="text" name="name" id="name" />
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <input type="text" name="favoriteVegetable" id="favoriteVegetable"/>
        <input type="submit" value="Сохранить!"/>
      </form>
    </div>
  );
}

export default ProfileEditor;