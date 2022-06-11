import { useContext } from "react"
//--- CONTEXT
import { ContextData } from "../../context"
//--- INTERFACE
import { List } from "../../database/projects"

const Projects = () => {
  const { projects } = useContext(ContextData)

  return (
    <div className="projects__container">
      <div className="projects__content">
        {/* eslint-disable-next-line */}
        <h1>// projects</h1>
        <ul>
          {projects.map((elem: List) => {
            return <li>{elem.title}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Projects
