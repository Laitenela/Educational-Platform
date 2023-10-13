import "./gridContainer.css";
import InfoBlock from "../../blocks/infoBlock/infoBlock";
import { observer } from "mobx-react-lite";

const GridContainer = observer(({ blocksStore, editable }) => {
  const infoBlocks = blocksStore.blocks;
  const dragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const dropItem = (event) => {
    const data = JSON.parse(event.dataTransfer.getData("application/my-app"));
    const eventRect = event.currentTarget.getBoundingClientRect();
    if (!data.isNew) return changePosition(event, data, eventRect);

    const gridStartColumn = Math.floor((event.pageX - event.currentTarget.offsetLeft) / (eventRect.width / 4) + 1);
    const gridStartRow = Math.floor((event.pageY - event.currentTarget.offsetTop) / 185 + 1);
    const gridEndColumn = Number(gridStartColumn) + data.block.size.column;
    const gridEndRow = Number(gridStartRow) + data.block.size.row;
    const newElement = Object.assign(data.block, {grid: {row: `${gridStartRow}/${gridEndRow}`, column: `${gridStartColumn}/${gridEndColumn}`}});
    console.log(newElement);
    
    blocksStore.createBlock(newElement);
  };

  const changePosition = (event, data, eventRect) => {
    const blockId = data.id;
    const editedBlock = infoBlocks.find((block) => block.id === blockId);

    const newRow = Math.round((event.pageY - event.currentTarget.offsetTop - data.mouseY) / 185 + 1);
    const newColumn = Math.round((event.pageX - event.currentTarget.offsetLeft - data.mouseX) / (eventRect.width / 4) + 1);
    editedBlock.changePosition(newRow, newColumn);
  }

  return editable ? (
    <div className="grid-container" onDragOver={dragOver} onDrop={dropItem}>
      {infoBlocks.map((block) => <InfoBlock onRemove={(id) => blocksStore.removeBlock(id)} block={block} key={block.id} id={block.id} editable draggable/>)}
    </div>
  ) : (
    <div className="grid-container">
      {infoBlocks.map((block) => <InfoBlock block={block} key={block.id} id={block.id} />)}
    </div>
  )
})

export default GridContainer;
