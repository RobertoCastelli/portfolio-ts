//--- CONTEXT
import { useContext } from "react"
//--- DATABASE
import { List } from "../database/navbar"
//--- ROUTER
import { NavLink } from "react-router-dom"
import { ContextData } from "../context"

const Navbar = () => {
  const { list } = useContext(ContextData)

  return (
    <nav className="navbar__container">
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
                <div className="nav__link">
                  <img src={elem.icon} alt="icon" />
                  {elem.link}
                </div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
