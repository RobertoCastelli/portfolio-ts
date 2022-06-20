//--- ROUTE
/* import { Link } from "react-router-dom" */
//--- CONTEXT
import { useContext } from "react"
import { ContextData } from "../context"
//--- INTERFACE
import { List } from "../database/projects"
//--- COMPONENT
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const { projects } = useContext(ContextData)

  return (
    <div className="projects__container">
      <div className="projects__content">
        {/* eslint-disable-next-line */}
        <div className="projects__tags">
          <ul>
            <li>all</li>
            <li>JS</li>
            <li>react</li>
            <li>vue</li>
            <li>API</li>
            <li>canvas</li>
          </ul>
        </div>
        <ul>
          {projects.map((elem: List) => {
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
        {/*   <Link to="/tools">
          <button type="button">tools</button>
        </Link> */}
      </div>
    </div>
  )
}

export default Projects
