import { Link } from "react-router-dom";
import "./gridMenu.css";
import InfoCard from "../../blocks/card/infoCard";

function GridMenu({ cards, title }) {
  return (
    <div className={`grid-menu`}>
      <h1 className="grid-menu__title">{title}</h1>
      {cards.map(({title, courseInfo, url, description, picture, price}) => {
        return (
          <Link to={url}>
            <InfoCard title={title} courseInfo={courseInfo} description={description} picture={picture} price={price}/>
          </Link>
        );
      })}
    </div>
  );
}

export default GridMenu;
