import './factoryMenu.css';

function FactoryMenu(){
  const blocks = {
    "factoryButton1": {
      type: "text",
      name: "block-text",
      size: {row: 1, column: 1},
      text: "Пиши че ухочешь"
    },
    "factoryButton2": {
      type: "default",
      name: "block-user",
      size: {row: 2, column: 2},
      title: "Пиши че хочешь",
      caption: "Пиши че хочешь",
      text: "Пиши че хочешь",
    },
    "factoryButton3": "courses",
    "factoryButton4": "portfolio",
    "factoryButton5": "slider",
  }

  const dragStart = (event) => {
    const isNew = true;
    const block = blocks[event.target.id];
    const data = JSON.stringify({isNew, block});
    event.dataTransfer.setData("application/my-app", data);
    event.dataTransfer.effectAllowed = "move";
  }
  return <div className="factory-menu">
    <div id='factoryButton1' className='factory-menu__button' onDragStart={dragStart} draggable></div>
    <div id='factoryButton2' className='factory-menu__button' onDragStart={dragStart} draggable></div>
    <div id='factoryButton3' className='factory-menu__button' onDragStart={dragStart} draggable></div>
    <div id='factoryButton4' className='factory-menu__button' onDragStart={dragStart} draggable></div>
    <div id='factoryButton5' className='factory-menu__button' onDragStart={dragStart} draggable></div>
  </div>
}

export default FactoryMenu;

  // const types = {
  //   "factoryButton1": "text",
  //   "factoryButton2": "default",
  //   "factoryButton3": "courses",
  //   "factoryButton4": "portfolio",
  //   "factoryButton5": "slider",
  // }

  // const names = {
  //   "factoryButton1": "block-text",
  //   "factoryButton2": "block-user",
  //   "factoryButton3": "block-courses",
  //   "factoryButton4": "block-portfolio",
  //   "factoryButton5": "slider",
  // }