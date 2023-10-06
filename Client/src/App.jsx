import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import Aside from './components/menu/aside/aside';

//title, url
const asideMenu = [
  {
    title: 'Главное',
    url: '/',
  },
  {
    title: 'Профиль',
    url: 'my'
  },
  {
    title: 'Сообщения',
    url: 'messages'
  },
  {
    title: 'Библиотека',
    url: 'library'
  },
  {
    title: 'Лекторий',
    url: 'lecture'
  },
  {
    title: 'Настройки',
    url: 'setting'
  },
]

function App({children}) {
  const [userName, setUserName] = useState('Имя');
  const [userAvatar, setUserAvatar] = useState('public/avatar_test.png');
  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/user/info', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setUserName(data?.name);
      setUserAvatar('http://127.0.0.1:3000/uploads/' + data?.settings?.avatar);
    });
  }, []);
    
  return (
    <>
      <header>
        <div className='menu-card'>
          <div className='menu-card__user-avatar' style={{backgroundImage: `url(${userAvatar})`}}></div>
          <div className='menu-card__user-name'>▾{userName}</div>
        </div>
      </header>
      <Aside items={asideMenu}/>
      <main>
        <Outlet/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App;