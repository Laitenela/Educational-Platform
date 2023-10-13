import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import typesBlock from "..";

const InfoBlock = observer(({ block, draggable, editable, id, onRemove }) => {
  const dragStart = (event) => {
    if(!draggable) return;
    const elementId = event.target.id;
    const mouseX = event.pageX - event.target.offsetLeft;
    const mouseY = event.pageY - event.target.offsetTop;
    const data = JSON.stringify({ isNew: false, id: elementId, mouseX: mouseX, mouseY: mouseY });
    event.dataTransfer.setData("application/my-app", data);
    event.dataTransfer.effectAllowed = "move";
  };

  if(editable || !block.url) return (
    <div id={id} className={`${block.name} block`} style={{ gridColumn: block.grid.column, gridRow: block.grid.row }} onDragStart={dragStart} draggable={draggable}>
      {editable && <button onClick={() => onRemove(id)} className="block__remove-button">Удалить блок</button>}
      {typesBlock[block.type](block, editable, (event) => console.log(event.target.value))}
    </div>
  );
  return (
    <Link id={id} to={block.url} className={`${block.name} block`} style={{ gridColumn: block.grid.column, gridRow: block.grid.row }} draggable={draggable}>
      {typesBlock[block.type](block)}
    </Link>
  )
})

export default InfoBlock;