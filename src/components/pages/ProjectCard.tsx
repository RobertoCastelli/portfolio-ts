//--- INTERFACE
import { List } from "../../database/projects"

const ProjectCard = (props: List) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <a href={props.link} rel="noopener noreferrer" target="_blank">
          <div className="flip-card-front">
            <img src={props.src} alt={props.title} />
          </div>
          <div className="flip-card-back">
            <div>{props.title}</div>
            <div>{props.tech}</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
