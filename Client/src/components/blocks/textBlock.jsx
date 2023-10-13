import { observer } from "mobx-react-lite";
import Text from "../elements/text/text";
import Caption from "../elements/caption/caption";
import Title from "../elements/title/title";

const TextBlock = observer(({block, editable, onChange}) => {
  return(
    <div className={`${block.name}__info-container`}>
      {block.title && <Title onChange={(event) => {block.changeTitle(event.target.value)}} parentName={block.name} editable={editable}>{block.title}</Title>}
      {block.caption && <Caption onChange={(event) => {block.changeCaption(event.target.value)}} parentName={block.name} editable={editable}>{block.caption}</Caption>}
      <Text onChange={(event) => {block.changeText(event.target.value)}} parentName={block.name} editable={editable}>{block.text}</Text>
    </div>
  )
})

export default TextBlock;