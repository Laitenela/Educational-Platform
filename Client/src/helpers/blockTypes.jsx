import Text from "../components/elements/text/text";
import DefaultBlock from "../components/blocks/defaultBlock";
import TextBlock from "../components/blocks/textBlock";
import PortfolioBlock from "../components/blocks/portfolioBlock";
import CoursesBlock from "../components/blocks/coursesBlock";
import SliderBlock from "../components/blocks/sliderBlock";

const defaultBlock = (block, editable, onChange) => <DefaultBlock block={block} editable={editable} onChange={onChange}/>
const textBlock = (block, editable, onChange) => <TextBlock block={block} editable={editable} onChange={onChange}/>
const portfolioBlock = (block, editable, onChange) => <PortfolioBlock block={block} editable={editable} onChange={onChange}/>
const coursesBlock = (block, editable, onChange) => <CoursesBlock block={block} editable={editable} onChange={onChange}/>
const silderBlock = (block, editable, onChange) => <SliderBlock block={block} editable={editable} onChange={onChange}/>

const typesBlock = {
  "text": textBlock,
  "slider": silderBlock,
  "default": defaultBlock,
  "portfolio": portfolioBlock,
  "coursesList": coursesBlock,
  "image-block": defaultBlock,
  "little-block": defaultBlock,
  "big-course-block": defaultBlock,
  "medium-course-block": defaultBlock,
  "block-text--big block-text": (block, editable) => (
    <div className={`${block.name}__info-container`}>
      <Text parentName={block.name} editable={editable}>{block.text}</Text>
    </div>
  ),
  "little-lesson-block": defaultBlock,
  "block-text--little block-text": (block, editable) => (
    <div className={`${block.name}__info-container`}>
      <Text parentName={block.name} editable={editable}>{block.text}</Text>
    </div>
  ),
};

export default typesBlock;