import { BlocksStore } from "../stores/blocksStore";

const rootUrl = "http://127.0.0.1:3000/";
const routeLoader = {};

routeLoader.app = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/info`);
  const userData = await response.json();

  return userData;
};

routeLoader.main = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/course/stack`);
  const courses = await response.json();

  return courses;
};

routeLoader.profile = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/info`);
  const userData = await response.json();

  return userData.settings;
};

routeLoader.profileEditor = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/info`);
  const userData = await response.json();
  const profileData = {
    background: "{url}",
    infoBlocks: [
      {
        type: "default",
        name: "block-user",
        grid: {column: "1/3", row: "1/3"},
        image: userData.settings.avatar,
        title: "Уланов Владислав",
        caption: "Гуманитарий, извините",
        topPosition: "1",
        leftPosition: "1",
        text: "Мне 25. Я живу в Москве и работаю в сфере дизайна уже несколько лет. Моя страсть - это фотография, и я стараюсь находить время для путешествий, чтобы делать новые снимки. В свободное время я также увлекаюсь дизайном: мне нравится придумывать новые идеи и воплощать их в жизнь.",
      },
      {
        type: "text",
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
        type: "portfolio",
        name: "block-portfolio",
        grid: {column: "1/3", row: "3/7"},
        title: "Моё портфолио",
        caption: "Любимые работы",
        items: [
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
          { title: "Магазин видеоигр", image: "test_image_help.jpg" },
        ], 
      },
      {
        type: "coursesList",
        name: "block-courses",
        grid: {column: "3/5", row: "4/7"},
        title: "Мои курсы на сайте",
        items: [
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

  const loadData = {
    blocksStore: new BlocksStore(profileData.infoBlocks),
    userOptions: userData,
  }

  return loadData;
};

routeLoader.course = async ({ params }) => {
  const fetchAndParseData = (url) => {
    return new Promise(async (resolve) => {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    })
  }

  const requestUrls = [
    `${rootUrl}api/course/info?id=${params.courseId}`,
    `${rootUrl}api/lesson/collection?course_id=${params.courseId}`,
  ];

  const [courseData, lessons] = await Promise.all([
    fetchAndParseData(requestUrls[0]),
    fetchAndParseData(requestUrls[1]),
  ]);

  courseData.lessons = lessons;
  return courseData;
};

routeLoader.courseEditor = async ({ params }) => {
  const response = await fetch(
    `${rootUrl}api/course/info?id=${params.courseId}`
  );
  const courseData = await response.json();
    
  return courseData;
};

export default routeLoader;
