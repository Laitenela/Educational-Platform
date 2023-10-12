import { observer } from "mobx-react-lite";
import Text from "../elements/text/text";
import Caption from "../elements/caption/caption";
import Title from "../elements/title/title";

const TextBlock = observer(({block, editable, onChange}) => {
  return(
    <div className={`${block.name}__info-container`}>
      {block.title && <Title parentName={block.name} editable={editable}>{block.title}</Title>}
      {block.caption && <Caption parentName={block.name} editable={editable}>{block.caption}</Caption>}
      <Text parentName={block.name} editable={editable}>{block.text}</Text>
    </div>
  )
})

export default TextBlock;