import './factoryMenu.css';

function FactoryMenu(){
  const dragStart = (event) => {
    const data = JSON.stringify({isNew: true, id: event.target.id})
    event.dataTransfer.setData("application/my-app", data);
    event.dataTransfer.effectAllowed = "move";
  }
  return <div className="factory-menu">
    <div id='class' className='factory-menu__button' onDragStart={dragStart} draggable></div>
  </div>
}

export default FactoryMenu;