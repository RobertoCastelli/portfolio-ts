//--- INTERFACE
import { List } from "../../database/projects"

const ProjectCard = (props: List) => {
  return (
    <div className="card__container">
      <div className="card_content">
        <a href="http://">
          <div>{props.title}</div>
          <div>{props.tech}</div>
          <img src={props.src} alt={props.title} />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
