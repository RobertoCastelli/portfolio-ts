//--- INTERFACE
import { List } from "../../database/projects"

const ProjectCard = (props: List) => {
  return (
    <div className="card__container">
      <div className="card_content">
        <a href={props.link} rel="noopener noreferrer" target="_blank">
          <div className="card__title">
            <div>{props.title}</div>
            <div>{props.tech}</div>
          </div>
          <img src={props.src} alt={props.title} />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
