import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import typesBlock from "..";

const InfoBlock = observer(({ block, draggable, editable, onDragStart, id }) => {
  if(editable || !block.url) return (
    <div id={id} className={`${block.name} block`} style={{ gridColumn: block.grid.column, gridRow: block.grid.row }} onDragStart={onDragStart} draggable={draggable}>
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