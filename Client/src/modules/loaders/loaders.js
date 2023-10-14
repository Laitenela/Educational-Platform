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
  const infoBlocks = [
    {
      type: "default",
      name: "image-block",
      title: "Лучшие курсы по мнению редакторов",
      grid: {row: "1/2", column: "1/5"},
      image: "PP_test.jpg",
      url: "/",
    },
    {
      type: "default",
      name: "little-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "2/3", column: "3/4"},
      text: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
      image: "QQ_Test.png",
    },
    {
      type: "default",
      name: "little-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "2/3", column: "4/5"},
      text: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
      image: "TT_Test.png"
    },
    {
      type: "default",
      name: "big-course-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "2/6", column: "1/3"},
      text: `Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.
  
  Каждый модуль содержит видеолекции, презентации, а также дополнительные материалы для самостоятельного изучения. Вы сможете задавать вопросы и получать ответы от преподавателей курса.
      
  После успешного прохождения курса вы сможете:
  1. Понимать основные принципы работы космических аппаратов и технологий;
  2. Разбираться в различных астрономических явлениях и процессах;
  3. Уметь находить на небе различные созвездия и планеты;
  4. Знать историю изучения космоса и основные этапы его освоения.
      
  Присоединяйтесь к нашему курсу и откройте для себя удивительный мир космоса!`,
      image: "NN_test.jpeg"
    },
    {
      type: "default",
      name: "medium-course-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "3/5", column: "3/5"},
      text: `Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.
  
  Каждый модуль содержит видеолекции, презентации, а также дополнительные материалы для самостоятельного изучения. Вы сможете задавать вопросы и получать ответы от преподавателей курса.
      
  Присоединяйтесь к нашему курсу и откройте для себя удивительный мир космоса!`,
      image: "LL_test.jpg"
    },
    {
      type: "default",
      name: "little-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "5/6", column: "4/5"},
      text: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
      image: "PP_test.jpg"
    },
    {
      type: "default",
      name: "little-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "5/6", column: "3/4"},
      text: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
      image: "GG_test.jpg"
    },
    {
      type: "default",
      name: "little-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "6/7", column: "1/2"},
      text: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
      image: "FF_test.jpeg"
    },
    {
      type: "default",
      name: "little-block",
      url: "/courses/1",
      title: "Космос: от Земли во Вселенную",
      grid: {row: "6/7", column: "2/3"},
      text: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
      image: "QLJo0.jpg"
    },
    {
      type: "default",
      name: "image-block",
      url: "/",
      title: "Открытия недели",
      grid: {row: "6/7", column: "3/5"},
      image: "TT_test.png",
    },
  ]

  const loadedData = {
    courses: courses,
    infoBlocks: infoBlocks
  }
  return loadedData;
};

routeLoader.profile = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/displayForm/?user_id=1`);
  const infoBlocks = await response.json();

  const loadData = {
    blocksStore: new BlocksStore(infoBlocks),
  }

  return loadData;
};

routeLoader.profileEditor = async ({ params }) => {
  const response = await fetch(`${rootUrl}api/user/displayForm/?user_id=1`);
  const infoBlocks = await response.json();

  const loadData = {
    blocksStore: new BlocksStore(infoBlocks),
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

  const requestUrl = `${rootUrl}api/course/displayForm?uid=${params.courseId}`;

  const infoBlocks = await fetchAndParseData(requestUrl);

  const loadedData = {infoBlocks, courseId: params.courseId};
  return loadedData;
};

routeLoader.courseEditor = async ({ params }) => {
  const response = await fetch(
    `${rootUrl}api/course/info?id=${params.courseId}`
  );
  const courseData = await response.json();
    
  return courseData;
};

export default routeLoader;
