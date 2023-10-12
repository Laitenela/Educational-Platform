import { observer } from "mobx-react-lite";
import Title from "../elements/title/title";
import Caption from "../elements/caption/caption";
import PhotosGrid from "../elements/photosGrid/photosGrid";

const SliderBlock = observer(({block, editable, onChange}) => {
  return(
    <div className={`${block.name}__info-container`}>
      <Title parentName={block.name} editable={editable}>{block.title}</Title>
      <Caption parentName={block.name} editable={editable}>{block.caption}</Caption>
      <PhotosGrid parentName={block.name} items={block.items} editable={editable} />
    </div>
  )
})

export default SliderBlock;