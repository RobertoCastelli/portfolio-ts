//--- ROUTE
import { Link } from "react-router-dom"
//--- CONTEXT
import { useContext } from "react"
import { ContextData } from "../context"
//--- INTERFACE
import { List } from "../database/projects"
//--- COMPONENT
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const { filteredProjects, breadCrumbs, breadCrumbTitle, getBreadCrumb } =
    useContext(ContextData)

  return (
    <div className="projects__container">
      <div className="projects__content">
        <div className="projects__tags">
          <ul>
            <li onClick={() => getBreadCrumb("all")}>all {">"}</li>
            {breadCrumbs.map((bread: string) => {
              return (
                <li key={bread} onClick={() => getBreadCrumb(bread)}>
                  {bread} {">"}
                </li>
              )
            })}
          </ul>
        </div>
        {/* // eslint-disable-next-line */}
        <h1>{breadCrumbTitle ? `// ${breadCrumbTitle}` : "// all projects"}</h1>
        <ul>
          {filteredProjects.map((elem: List) => {
            return (
              <li key={elem.src}>
                <ProjectCard
                  title={elem.title}
                  link={elem.link}
                  src={elem.src}
                  tech={elem.tech}
                />
              </li>
            )
          })}
        </ul>
        <Link to="/tools">
          <label htmlFor="tools">made w/ ❤ using</label>
          <button name="tools" type="button">
            tools
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Projects
