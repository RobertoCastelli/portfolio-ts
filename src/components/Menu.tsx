//--- ROUTER
import { NavLink } from "react-router-dom"
//--- ICONS
import {
  VscFiles,
  VscCode,
  VscBook,
  VscAccount,
  VscGear,
} from "react-icons/vsc"

const Menu = () => {
  //--- INTERFACE
  interface List {
    id: number
    icon: JSX.Element
    route: string
  }

  //--- LIST TOP
  const listTop: List[] = [
    {
      id: 1,
      icon: <VscFiles size={30} />,
      route: "/",
    },
    {
      id: 2,
      icon: <VscCode size={30} />,
      route: "/projects",
    },
    {
      id: 3,
      icon: <VscBook size={30} />,
      route: "/blog",
    },
  ]

  //--- LIST BOTTOM
  const listBottom: List[] = [
    {
      id: 1,
      icon: <VscAccount size={30} />,
      route: "/about",
    },
    {
      id: 2,
      icon: <VscGear size={30} />,
      route: "/tools",
    },
  ]

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
