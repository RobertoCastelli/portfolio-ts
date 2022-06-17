//--- INTERFACE
import { List } from "../database/projects";

const ProjectCard = (props: List) => {
  return (
    <div className="card">
      <a href={props.link} rel="noopener noreferrer" target="_blank">
        <img className="card__img" src={props.src} alt="card-img" />
        <div className="card__content">
          <div className="card__title">{props.title}</div>
          <p className="card__tech">{props.tech}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
