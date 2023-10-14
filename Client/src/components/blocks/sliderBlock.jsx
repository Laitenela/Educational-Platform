import { observer } from "mobx-react-lite";
import Title from "../elements/title/title";
import Caption from "../elements/caption/caption";
import Slider from "../elements/slider/slider";
import Text from "../elements/text/text";

const SliderBlock = observer(({block, editable}) => {

  return(
    <div className={`${block.name}__info-container`}>
      <Title parentName={block.name} editable={editable}>{block.title}</Title>
      <Caption parentName={block.name} editable={editable}>{block.caption}</Caption>
      <Text parentName={block.name} editable={editable}>{block.text}</Text>
      <Slider blockName={block.name} items={block.items} editable={editable} />
    </div>
  )
})

export default SliderBlock;