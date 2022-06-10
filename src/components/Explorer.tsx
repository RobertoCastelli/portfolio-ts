//--- ROUTER
import { NavLink } from "react-router-dom";
//--- ICONS
import { VscChevronRight } from "react-icons/vsc";
import react from "../images/icons/react_icon.svg";
import js from "../images/icons/js_icon.svg";
import markdown from "../images/icons/markdown_icon.svg";
import json from "../images/icons/json_icon.svg";

const Explorer = () => {
  //--- INTERFACE
  interface List {
    id: number;
    link: string;
    route: string;
    icon: string;
  }

  //--- LIST
  const list: List[] = [
    {
      id: 1,
      link: "Home.jsx",
      route: "/",
      icon: react,
    },
    {
      id: 2,
      link: "Projects.js",
      route: "/projects",
      icon: js,
    },
    {
      id: 3,
      link: "Blog.md",
      route: "/blog",
      icon: markdown,
    },
    {
      id: 4,
      link: "Github.html",
      route: "/github",
      icon: json,
    },
  ];

  return (
    <div className="explorer__container">
      <div className="explorer__title">EXPLORER</div>
      <div className="explorer__accordion">
        <div className="explorer__accordion--folder">
          <div>
            <VscChevronRight size={20} />
          </div>
          <div>portfolio</div>
        </div>
        <ul>
          {list.map((elem: List) => {
            return (
              <li key={elem.id}>
                <NavLink
                  to={elem.route}
                  className={({ isActive }) =>
                    isActive ? "nav__link--active" : "nav__link--inactive"
                  }
                >
                  <div className="explorer__accordion--link">
                    <img src={elem.icon} alt="icon" />
                    {elem.link}
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Explorer;
