import { observer } from "mobx-react-lite";
import Text from "../elements/text/text";
import Caption from "../elements/caption/caption";
import Title from "../elements/title/title";

const DefaultBlock = observer(({block, editable}) => {
  return(
    <>
    {block.image && (
      <div className={`${block.name}__image-container`}>
        <img className={`${block.name}__image`} src={`http://127.0.0.1:3000/uploads/${block.image}`} alt="" />
      </div>
    )}
    <div className={`${block.name}__info-container`}>
      {block.title && <Title parentName={block.name} onChange={(event) => {block.changeTitle(event.target.value)}} editable={editable}>{block.title}</Title>}
      {block.caption && <Caption parentName={block.name} onChange={(event) => {block.changeCaption(event.target.value)}} editable={editable}>{block.caption}</Caption>}
      {block.text && <Text parentName={block.name} onChange={(event) => {block.changeText(event.target.value)}} editable={editable}>{block.text}</Text>}
    </div>
  </>
  )
})

export default DefaultBlock;