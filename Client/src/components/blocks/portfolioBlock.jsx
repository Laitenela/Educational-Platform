import { observer } from "mobx-react-lite";
import Title from "../elements/title/title";
import Caption from "../elements/caption/caption";
import PhotosGrid from "../elements/photosGrid/photosGrid";

const PortfolioBlock = observer(({block, editable}) => {
  return(
    <div className={`${block.name}__info-container`}>
      <Title onChange={(event) => {block.changeTitle(event.target.value)}} parentName={block.name} editable={editable}>{block.title}</Title>
      <Caption onChange={(event) => {block.changeCaption(event.target.value)}} parentName={block.name} editable={editable}>{block.caption}</Caption>
      <PhotosGrid parentName={block.name} block={block} items={block.items} editable={editable} />
      {editable && <button onClick={() => block.createItem()} className={`${block.name}__button-add`}>Добавить</button>}
    </div>
  )
})

export default PortfolioBlock;