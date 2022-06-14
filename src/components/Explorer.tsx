//--- ROUTER
import { NavLink } from "react-router-dom";
//--- CONTEXT
import { useContext } from "react";
import { ContextData } from "../context";
//--- ICONS
import { VscChevronRight, VscChevronDown } from "react-icons/vsc";
//--- INTERFACE
import { List } from "../database/explorer";

const Explorer = () => {
  //--- CONTEXT
  const {
    isExpanded,
    handleAccordion,
    list,
  }: { isExpanded: boolean; handleAccordion: () => void; list: List[] } =
    useContext(ContextData);

  return (
    <div className="explorer__container">
      <div className="explorer__title">EXPLORER</div>
      <div className="explorer__accordion">
        <div
          className="explorer__accordion--item"
          onClick={() => handleAccordion()}
        >
          <div>
            {isExpanded ? (
              <VscChevronDown size={20} />
            ) : (
              <VscChevronRight size={20} />
            )}
          </div>
          <div>&nbsp;portfolio</div>
        </div>
        <ul>
          {isExpanded &&
            list.map((elem: List) => {
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
