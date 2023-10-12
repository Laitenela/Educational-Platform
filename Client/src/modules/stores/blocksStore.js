import { makeAutoObservable } from "mobx"

export class BlocksStore {
  blocks = []

  constructor(blocksInfo){
    makeAutoObservable(this);
    blocksInfo.forEach(blockInfo => {
      const block = new Block(blockInfo);
      this.blocks.push(block);
    })
  }

  createBlock(blockInfo){
    const block = new Block(blockInfo);
    this.blocks.push(block);
  }

  deleteBlock(){

  }
}

export class Block {
  id
  type
  name
  url
  grid
  image
  title
  caption
  text
  items

  constructor(blockInfo){
    makeAutoObservable(this);
    this.id = blockInfo.id;
    this.type = blockInfo.type;
    this.name = blockInfo.name;
    this.url = blockInfo.url;
    this.grid = blockInfo.grid;
    this.image = blockInfo.image;
    this.title = blockInfo.title;
    this.caption = blockInfo.caption;
    this.text = blockInfo.text;
    this.items = blockInfo.items;
  }

  changePosition(column, row){
    this.grid = {column: column, row: row};
  }

  changeTitle(title){
    this.title = title;
  }

  changeCaption(caption){
    this.caption = caption;
  }

  changeText(text){
    this.text = text;
  }
}

// infoBlocks: [
//   {
//     name: "block-user",
//     grid: {column: "1/3", row: "1/3"},
//     image: userOptions.avatar,
//     title: "Уланов Владислав",
//     caption: "Гуманитарий, извините",
//     topPosition: "1",
//     leftPosition: "1",
//     text: "Мне 25. Я живу в Москве и работаю в сфере дизайна уже несколько лет. Моя страсть - это фотография, и я стараюсь находить время для путешествий, чтобы делать новые снимки. В свободное время я также увлекаюсь дизайном: мне нравится придумывать новые идеи и воплощать их в жизнь.",
//   },
//   {
//     name: "block-text",
//     grid: {column: "3/5", row: "1/4"},
//     title: "Мои достижения",
//     caption: "Коротко о моём пути",
//     text: `Образование: высшее, МГУ им. М.В. Ломоносова, экономический факультет

// Языки: русский - родной, английский - свободно, французский - базовый уровень
    
// Должность: финансовый директор
    
// Опыт работы: более 15 лет в сфере финансов и экономики
    
// Профессиональные навыки: анализ финансовых показателей, планирование бюджета, управление рисками, разработка инвестиционных проектов
    
// Личные качества: ответственность, стрессоустойчивость, коммуникабельность, умение работать в команде
    
// Увлечения и хобби: чтение книг, путешествия, спорт (бег, йога)`,
//   },
//   {
//     name: "block-portfolio",
//     grid: {column: "1/3", row: "3/7"},
//     title: "Моё портфолио",
//     caption: "Любимые работы",
//     portfolio: [
//       { title: "Магазин видеоигр", image: "test_image_help.jpg" },
//       { title: "Магазин видеоигр", image: "test_image_help.jpg" },
//       { title: "Магазин видеоигр", image: "test_image_help.jpg" },
//       { title: "Магазин видеоигр", image: "test_image_help.jpg" },
//       { title: "Магазин видеоигр", image: "test_image_help.jpg" },
//       { title: "Магазин видеоигр", image: "test_image_help.jpg" },
//     ], 
//   },
//   {
//     name: "block-courses",
//     grid: {column: "3/5", row: "4/7"},
//     title: "Мои курсы на сайте",
//     courses: [
//       {
//         title: "Космос: от Земли во Вселенную", 
//         description: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
//         image: "QQ_test.png"
//       },
//       {
//         title: "Космос: от Земли во Вселенную", 
//         description: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
//         image: "TT_test.png"
//       },
//       {
//         title: "Космос: от Земли во Вселенную", 
//         description: "Здесь вы узнаете о невероятных тайнах и загадках нашей Вселенной, а также о том, как человечество стремится их разгадать.",
//         image: "QLJo0.jpg"
//       },
//     ]
//   }
// ],