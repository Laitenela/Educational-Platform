import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import typesBlock from "../../../helpers/blockTypes";

const Block = observer(({ block, draggable, editable, id, onRemove }) => {
  const linkable = !editable && block.url;
  
  const dragStart = (event) => {
    if (!draggable) return;

    const transferedDataObject = {};
    transferedDataObject.isNew = false;
    transferedDataObject.elementId = event.target.id;
    transferedDataObject.mouseX = event.pageX - event.target.offsetLeft;
    transferedDataObject.mouseY = event.pageY - event.target.offsetTop;

    const transferedDataJson = JSON.stringify(transferedDataObject);
    event.dataTransfer.setData("application/my-app", transferedDataJson);
    
    event.dataTransfer.effectAllowed = "move";
  };

  const blockChildren = typesBlock[block.type](block, editable);
  const removeButtonProps = { onClick: () => onRemove(id), className: "block__remove-button" };
  const removeButton = editable ? <button {...removeButtonProps}>Удалить блок</button> : undefined;

  const blockProps = { id, draggable };
  blockProps.className = `${block.name} block`;
  blockProps.onDragStart = editable ? dragStart : undefined;
  blockProps.style = { gridColumn: block.grid.column, gridRow: block.grid.row };
  blockProps.children = [removeButton, blockChildren];
  blockProps.to = block.url;

  return linkable ? <Link {...blockProps}/> : <div {...blockProps}/>;
});

export default Block;
