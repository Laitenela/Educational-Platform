import LineMenu from "../../menu/lineMenu/lineMenu";
import GridMenu from "../../menu/gridMenu/gridMenu";
import "./main.css";
import { useEffect, useState } from "react";

const links = [
  [
    { url: "/fresh", text: "Свежие" },
    { url: "/popular", text: "Популярные" },
    { url: "/hot", text: "Горячие" },
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

const cards = [
  {
    title: 'Вышивание крестиком',
    description: 'Практический курс от бабы Нюры по вышиванию крестиком. 20 в лет отшивании поклонников. 30 лет в вышивании крестиком.',
    picture: 'werokerkgerghtlmlkrbtmlkrtmbklrtmbrtgnjrethjk',
    courseInfo: "Бесплатно предоставляются 2 пробные части курса. Курс состоит из 12 частей и рассчитан на 2 недели.",
    url: 'Hehehe',
    price: 500
  },
  {
    title: 'Вышивание крестиком',
    description: 'Практический курс от бабы Нюры по вышиванию крестиком. 20 в лет отшивании поклонников. 30 лет в вышивании крестиком.',
    picture: 'werokerkgerghtlmlkrbtmlkrtmbklrtmbrtgnjrethjk',
    courseInfo: "Бесплатно предоставляются 2 пробные части курса. Курс состоит из 12 частей и рассчитан на 2 недели.",
    url: 'Hehehe',
    price: 500
  },
  {
    title: 'Вышивание крестиком',
    description: 'Практический курс от бабы Нюры по вышиванию крестиком. 20 в лет отшивании поклонников. 30 лет в вышивании крестиком.',
    picture: 'werokerkgerghtlmlkrbtmlkrtmbklrtmbrtgnjrethjk',
    courseInfo: "Бесплатно предоставляются 2 пробные части курса. Курс состоит из 12 частей и рассчитан на 2 недели.",
    url: 'Hehehe',
    price: 500
  },
  {
    title: 'Вышивание крестиком',
    description: 'Практический курс от бабы Нюры по вышиванию крестиком. 20 в лет отшивании поклонников. 30 лет в вышивании крестиком.',
    picture: 'werokerkgerghtlmlkrbtmlkrtmbklrtmbrtgnjrethjk',
    courseInfo: "Бесплатно предоставляются 2 пробные части курса. Курс состоит из 12 частей и рассчитан на 2 недели.",
    url: 'Hehehe',
    price: 500
  },
  {
    title: 'Вышивание крестиком',
    description: 'Практический курс от бабы Нюры по вышиванию крестиком. 20 в лет отшивании поклонников. 30 лет в вышивании крестиком.',
    picture: 'werokerkgerghtlmlkrbtmlkrtmbklrtmbrtgnjrethjk',
    courseInfo: "Бесплатно предоставляются 2 пробные части курса. Курс состоит из 12 частей и рассчитан на 2 недели.",
    url: 'Hehehe',
    price: 500
  },
];

function Main() {
  const [cards, setCards] = useState(undefined);
  useEffect(() => {
    (async() => {
      const response = await fetch('http://127.0.0.1:3000/api/course/stack');
      const data = await response.json();
      setCards(data);
    })()
  }, [])

  return (
    <div className="main-page">
      <LineMenu links={links} parentClassName="main-page" />
      <GridMenu title={'Популярные курсы'} cards={cards} parentClassName="main-page" />
    </div>
  );
}

export default Main;
