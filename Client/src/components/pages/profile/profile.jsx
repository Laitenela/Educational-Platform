import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './profile.css';
import GridContainer from "../../menu/gridMenu/gridContainer";

function Profile() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  const userOptions = useLoaderData();
  const profileData = {
    background: "{url}",
    infoBlocks: [
      {
        name: "block-user",
        grid: {column: "1/3", row: "1/3"},
        image: userOptions.avatar,
        title: "Уланов Владислав",
        caption: "Гуманитарий, извините",
        topPosition: "1",
        leftPosition: "1",
        text: "Мне 25. Я живу в Москве и работаю в сфере дизайна уже несколько лет. Моя страсть - это фотография, и я стараюсь находить время для путешествий, чтобы делать новые снимки. В свободное время я также увлекаюсь дизайном: мне нравится придумывать новые идеи и воплощать их в жизнь.",
      },
      {
        name: "block-text",
        grid: {column: "3/5", row: "1/4"},
        title: "Мои достижения",
        caption: "Коротко о моём пути",
        text: `Образование: высшее, МГУ им. М.В. Ломоносова, экономический факультет
  
Языки: русский - родной, английский - свободно, французский - базовый уровень
        
Должность: финансовый директор
        
Опыт работы: более 15 лет в сфере финансов и экономики
        
Профессиональные навыки: анализ финансовых показателей, планирование бюджета, управление рисками, разработка инвестиционных проектов
        
Личные качества: ответственность, стрессоустойчивость, коммуникабельность, умение работать в команде
        
Увлечения и хобби: чтение книг, путешествия, спорт (бег, йога)`,
      },
      {
        name: "block-portfolio",
        grid: {column: "1/3", row: "3/7"},
        title: "Моё портфолио",
        caption: "Любимые работы",
        portfolio: [
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
        ], 
      },
      {
        name: "block-courses",
        grid: {column: "3/5", row: "4/7"},
        title: "Мои курсы на сайте",
        courses: [
          {
            title: "Космос: от Земли во Вселенную", 
            description: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
            image: "QQ_test.png"
          },
          {
            title: "Космос: от Земли во Вселенную", 
            description: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
            image: "TT_test.png"
          },
          {
            title: "Космос: от Земли во Вселенную", 
            description: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
            image: "QLJo0.jpg"
          },
        ]
      }
    ],
  }
  const markup = userOptions.markup;

  return (
    <div className="profile">
      <div className="profile__background" style={{backgroundImage: `url(http://127.0.0.1:3000/uploads/SS_test.jpg)`}}></div>
      <GridContainer infoBlocks={profileData.infoBlocks} userOptions={userOptions}/>
      {/* <div className="user-data">
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
      </div> */}
    </div>
  );
}

export default Profile;