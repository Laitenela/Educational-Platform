import { Link } from "react-router-dom";
import "./lineMenu.css";

function LineMenu({ links, parentClassName }) {
  return (
    <div className={`${parentClassName}__line-menu line-menu`}>
      {links.map((links) => {
        return (
          <div className={`${parentClassName}__link-group`}>
            {links.map((link) => {
              return (
                <Link className={`${parentClassName}__link`} to={link.url}>
                  {link.text}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default LineMenu;
