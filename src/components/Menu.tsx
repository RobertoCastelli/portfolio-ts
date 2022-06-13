//--- ROUTER
import { NavLink } from "react-router-dom"
//--- CONTEXT
import { useContext } from "react"
import { ContextData } from "../context"
//--- INTERFACE
import { List } from "../database/menu"

const Menu = () => {
  //--- CONTEXT
  const { listTop, listBottom } = useContext(ContextData)

  return (
    <div className="menu__container">
      <ul>
        {listTop.map((elem: List) => {
          return (
            <li key={elem.id}>
              <NavLink
                to={elem.route}
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : "nav__link-menu--inactive"
                }
              >
                <div>{elem.icon}</div>
              </NavLink>
            </li>
          )
        })}
      </ul>
      <ul>
        {listBottom.map((elem: List) => {
          return (
            <li key={elem.id}>
              <NavLink
                to={elem.route}
                className={({ isActive }) =>
                  isActive ? "nav__link--active" : "nav__link-menu--inactive"
                }
              >
                <div>{elem.icon}</div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Menu
