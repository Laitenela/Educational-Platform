import { observer } from "mobx-react-lite";
import Slider from "../elements/slider/slider";

const SliderBlock = observer(({block, editable}) => {

  return(
    <div className={`${block.name}__info-container`}>
      <Slider blockName={block.name} items={block.items} editable={editable} />
    </div>
  )
})

export default SliderBlock;