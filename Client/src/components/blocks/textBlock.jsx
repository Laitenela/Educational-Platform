import { observer } from "mobx-react-lite";
import Text from "../elements/text/text";
import Caption from "../elements/caption/caption";
import Title from "../elements/title/title";

const TextBlock = observer(({block, editable}) => {

  const titleProps = {editable};
  titleProps.parentName = block.name;
  titleProps.children = block.title;
  titleProps.onChange = (event) => block.changeTitle(event.target.value);

  const captionProps = {editable};
  captionProps.parentName = block.name;
  captionProps.children = block.caption;
  captionProps.onChange = (event) => block.changeCaption(event.target.value);

  const textProps = {editable};
  textProps.parentName = block.name;
  textProps.onChange = (event) => block.changeText(event.target.value);

  return(
    <div className={`${block.name}__info-container`}>
      {block.title && <Title {...titleProps}/>}
      {block.caption && <Caption {...captionProps}/>}
      <Text {...textProps}>{block.text}</Text>
    </div>
  )
})

export default TextBlock;