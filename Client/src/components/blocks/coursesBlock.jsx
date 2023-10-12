import { observer } from "mobx-react-lite";
import Caption from "../elements/caption/caption";
import Title from "../elements/title/title";
import ItemsList from "../elements/itemsList/itemsList";

const CoursesBlock = observer(({block, editable, onChange}) => {
  return(
    <div className={`${block.name}__info-container`}>
      <Title parentName={block.name} editable={editable}>{block.title}</Title>
      <Caption parentName={block.name} editable={editable}>{block.caption}</Caption>
      <ItemsList parentName={block.name} items={block.items} editable={editable} />
    </div>
  )
})

export default CoursesBlock;