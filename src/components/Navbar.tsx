//--- ROUTER
import { NavLink } from "react-router-dom"

const Navbar = () => {
  //--- INTERFACE
  interface List {
    id: number
    link: string
    route: string
  }

  //--- LIST
  const list: List[] = [
    {
      id: 1,
      link: "Home.jsx",
      route: "/",
    },
    {
      id: 2,
      link: "Projects.js",
      route: "/projects",
    },
    {
      id: 3,
      link: "Blog.md",
      route: "/blog",
    },
    {
      id: 4,
      link: "Github.html",
      route: "/github",
    },
  ]

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
                <div>{elem.link}</div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
