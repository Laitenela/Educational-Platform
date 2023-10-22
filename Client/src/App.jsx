import { useState, useEffect } from 'react';
import { Outlet, useLoaderData } from "react-router-dom";
import './App.css';
import Aside from './components/containers/aside/aside';
import LineMenu from './components/containers/lineMenu/lineMenu';
import { observer } from 'mobx-react-lite';

//title, url
const asideMenu = [
  {
    title: 'Главное',
    url: '/',
  },
  {
    title: 'Профиль',
    url: 'users/me'
  },
  {
    title: 'Мои курсы',
    url: 'courses/my'
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

const links = [
  [
    { url: "/?sort=fresh", text: "Свежие" },
    { url: "/?sort=popular", text: "Популярные" },
    { url: "/?sort=hot", text: "Горячие" },
  ],
  [
    { url: "/trainers", text: "Тренеры" },
    { url: "/mentors", text: "Менторы" },
    { url: "/mentors", text: "Рейтинг" },
  ],
  [
    { url: "/my", text: "Моё" },
    { url: "/current", text: "Назначено" },
    { url: "/myarchive", text: "Архив" },
  ],
];

const App = observer(() => {
  const user = useLoaderData();

  return (
    <>
      <header>
        <div className='menu-card'>
          <div className='menu-card__user-avatar' style={{backgroundImage: `url(http://127.0.0.1:3000/uploads/${user.settings.avatar})`}}></div>
          <div className='menu-card__user-name'>▾{user.name}</div>
        </div>
        <LineMenu links={links} parentClassName="main-page" />
      </header>
      <Aside items={asideMenu}/>
      <main>
        <Outlet/>
      </main>
      <footer>

      </footer>
    </>
  )
})

export default App;