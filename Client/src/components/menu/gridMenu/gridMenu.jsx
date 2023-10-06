import { Link } from "react-router-dom";
import "./gridMenu.css";
import InfoCard from "../../blocks/card/infoCard";

function GridMenu({ cards, title }) {
  return (
    <div className={`grid-menu`}>
      <h1 className="grid-menu__title">{title}</h1>
      {cards && cards.map(({title, course_info, uid, description, picture, price}) => {
        return (
          <Link to={`courses/${uid}`}>
            <InfoCard title={title} courseInfo={course_info} description={description} picture={picture} price={price}/>
          </Link>
        );
      })}
    </div>
  );
}

export default GridMenu;
