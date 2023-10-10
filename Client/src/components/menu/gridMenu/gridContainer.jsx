import { Link } from "react-router-dom";
import BlockContainer from "../../blocks/BlockContainer/blockContainer";
import "./gridContainer.css";
import Slider from "../../blocks/slider/slider";

function GridContainer({infoBlocks}) {
  
  return (
    <div className="grid-container">
      {infoBlocks.map(((block, index) => {
        return (
        <Link key={index} to={block.url} className={`${block.name} block${block.url ? " hovered" : " disabled"}`} style={{gridColumn: block.grid.column, gridRow: block.grid.row}}>
          {block.image &&
            <div className={`${block.name}__image-container`}>
              <img className={`${block.name}__image`} src={`http://127.0.0.1:3000/uploads/${block.image}`} alt="" />
            </div>
          }
          <div className={`${block.name}__info-container`}>
            {block.title && <div className={`${block.name}__title`}>{block.title}</div>}
            {block.caption && <div className={`${block.name}__caption`}>{block.caption}</div>}
            {block.text && <div className={`${block.name}__text`}>{block.text}</div>}
            {block.portfolio && 
              <div className={`${block.name}__grid`}>
                {block.portfolio.map((infoCard) => {
                  return (<div className="label-card">
                    <img src={`http://127.0.0.1:3000/uploads/${infoCard.image}`} className="label-card__image" />
                    <div className="label-card__title">{infoCard.title}</div>
                  </div>)
                })}
              </div>
            }
            {block.courses &&
              <div className={`${block.name}__flex-container`}>
                {block.courses.map((course, index) => {
                return (<div key={index} className="course-container">
                  <img className="course-container__image" src={`http://127.0.0.1:3000/uploads/${course.image}`} alt="" />
                  <div className="course-container__info-container">
                    <div className="course-container__title">{course.title}</div>
                    <div className="course-container__description">{course.description}</div>
                  </div>
                </div>)
                })}
              </div> 
            }
            {block.slides && <Slider blockName={block.name} slides={block.slides}/>}
          </div>
        </Link>
        )
      }))}
    </div>
  );
}

export default GridContainer;
