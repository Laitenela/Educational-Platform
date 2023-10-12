import Caption from "../elements/caption/caption";
import ItemsList from "../elements/itemsList/itemsList";
import PhotosGrid from "../elements/photosGrid/photosGrid";
import Text from "../elements/text/text";
import Title from "../elements/title/title";
import Slider from "./slider/slider";
import DefaultBlock from "./defaultBlock";
import TextBlock from "./textBlock";
import PortfolioBlock from "./portfolioBlock";
import CoursesBlock from "./coursesBlock";

const defaultBlock = (block, editable, onChange) => <DefaultBlock block={block} editable={editable} onChange={onChange}/>
const textBlock = (block, editable, onChange) => <TextBlock block={block} editable={editable} onChange={onChange}/>
const portfolioBlock = (block, editable, onChange) => <PortfolioBlock block={block} editable={editable} onChange={onChange}/>
const coursesBlock = (block, editable, onChange) => <CoursesBlock block={block} editable={editable} onChange={onChange}/>

const typesBlock = {
  "default": defaultBlock,
  "text": textBlock,
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
  "slider": (block, editable) => (
    <>
      <div className={`${block.name}__info-container`}>
        <Title parentName={block.name} editable={editable}>{block.title}</Title>
        <Caption parentName={block.name} editable={editable}>{block.caption}</Caption>
        <Text parentName={block.name} editable={editable}>{block.text}</Text>
        <Slider blockName={block.name} items={block.items} editable={editable} />
      </div>
    </>
  ),
};

export default typesBlock;