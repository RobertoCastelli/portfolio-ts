import { useContext } from "react"
//--- CONTEXT
import { ContextData } from "../../context"
//--- INTERFACE
import { List } from "../../database/projects"
//--- COMPONENT
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const { projects } = useContext(ContextData)

  return (
    <div className="projects__container">
      <div className="projects__content">
        {/* eslint-disable-next-line */}
        <h1>// projects</h1>
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
      </div>
    </div>
  )
}

export default Projects
