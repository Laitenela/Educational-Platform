import { Link } from "react-router-dom";
import "./aside.css";

function Aside({ items }) {

  function killUser (event) {
    event.preventDefault();
    document.cookie = 'auth-token='+ '' +'; Path=/;';
    window.location = '/';
  }

  return (
    <aside className="side-menu">
      {items.map(({title, url}) => {
        return (
          <Link to={url}>
            <div className="side-menu__button">
              {title}
            </div>
          </Link>
        );
      })}
      <a href='/?logout' onClick={killUser}>
            <div className="side-menu__button">
              Выйти
            </div>
      </a>
    </aside>
  );
}

export default Aside;