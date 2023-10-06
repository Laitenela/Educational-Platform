import { useEffect } from 'react';
import './profileEditor.css';
import { useLoaderData } from 'react-router-dom';

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
  const userData = useLoaderData();
  useEffect(() => {
    document.getElementById('name').value = userData.settings.name;
    document.getElementById('description').value = userData.settings.description;
    document.getElementById('favoriteVegetable').value = userData.settings.favoriteVegetable;
  }, [])

  return(
    <div className='user-forms'>
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
          <input placeholder='Имя' type="text" name="name" id="name" />
        </div>
        <div>
          <textarea placeholder="О себе" name="description" id="description" cols="30" rows="10"></textarea>
        </div>
        <div>
          <input type="text" placeholder='Любимый овощ' name="favoriteVegetable" id="favoriteVegetable"/>
        </div>
        <div>
          <input type="submit" value="Сохранить!"/>
        </div>
      </form>
    </div>
  );
}

export default ProfileEditor;