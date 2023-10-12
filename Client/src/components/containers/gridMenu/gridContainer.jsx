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
    const element = document.getElementById(data.id);
    if (!data.isNew) {
      const className = element.classList[0];
      const editedBlock = infoBlocks.find((block) => block.name === className);
      console.log(editedBlock.grid.column);
      console.log(editedBlock.grid.row);
      const [columnStart, columnEnd] = editedBlock.grid.column.split("/");
      const [rowStart, rowEnd] = editedBlock.grid.row.split("/");
      const gridStartColumn = Math.round((event.pageX - event.currentTarget.offsetLeft - data.mouseX) / (eventRect.width / 4) + 1);
      const gridEndColumn = Number(gridStartColumn) + Number(columnEnd) - Number(columnStart);
      const gridStartRow = Math.round((event.pageY - event.currentTarget.offsetTop - data.mouseY) / 185 + 1);
      const gridEndRow = Number(gridStartRow) + Number(rowEnd) - Number(rowStart);
      console.log(`${gridStartColumn} / ${gridStartRow} / ${gridEndColumn} / ${gridEndRow}`);
      editedBlock.changePosition(`${gridStartColumn}/${gridEndColumn}`, `${gridStartRow}/${gridEndRow}`);
    } else {
      const gridStartColumn = Math.floor((event.pageX - event.currentTarget.offsetLeft) / (eventRect.width / 4) + 1);
      const gridEndColumn = Number(gridStartColumn) + 1;
      const gridStartRow = Math.floor((event.pageY - event.currentTarget.offsetTop) / 185 + 1);
      const gridEndRow = Number(gridStartRow) + 1;
      const newElement = {
        type: "text",
        name: "block-text",
        grid: {row: `${gridStartRow}/${gridEndRow}`, column: `${gridStartColumn}/${gridEndColumn}`},
        text: "Моя страсть - это фотография, и я стараюсь находить время для путешествий, чтобы делать новые снимки. В свободное время я также увлекаюсь дизайном.",
      };
      console.log(newElement);
      blocksStore.createBlock(newElement);
      //setInfoBlocks([newElement, ...infoBlocks]);
      console.log("Хуй соси(пока что)");
    }
  };

  const dragStart = (event) => {
    const elementId = event.target.id;
    const mouseX = event.pageX - event.target.offsetLeft;
    const mouseY = event.pageY - event.target.offsetTop;
    const data = JSON.stringify({ isNew: false, id: elementId, mouseX: mouseX, mouseY: mouseY });
    event.dataTransfer.setData("application/my-app", data);
    event.dataTransfer.effectAllowed = "move";
  };
  if (editable) {
    return (
      <div className="grid-container" onDragOver={dragOver} onDrop={dropItem}>
        {infoBlocks.map((block, index) => <InfoBlock block={block} key={index} id={`block${index}`} onDragStart={dragStart} editable draggable/>)}
      </div>
    );
  } else {
    return (
      <div className="grid-container">
        {infoBlocks.map((block, index) => <InfoBlock block={block} id={`block${index}`} />)}
      </div>
    );
  }
  // return (
  //   <div className="grid-container" onDragOver={dragOver} onDrop={dropItem}>
  //     {infoBlocks.map((block, index) => {
  //       return (
  //         <Link
  //           key={index}
  //           onDragStart={dragStart}
  //           draggable
  //           id={`block${index}`}
  //           to={block.url}
  //           className={`${block.name} block${block.url ? " hovered" : " "}`}
  //           style={{ gridColumn: block.grid.column, gridRow: block.grid.row }}
  //         >
  //           <InfoBlock block={block} />
  //         </Link>
  //       );
  //     })}
  //   </div>
  // );
})

export default GridContainer;
