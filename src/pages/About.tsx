//--- ICONS
import { GrLinkedin, GrGithub } from "react-icons/gr";
//--- IMAGES
import potrait from "../images/roberto.jpg";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__content">
        {/* eslint-disable-next-line */}
        <h1>// about me </h1>
        <img src={potrait} alt="potrait" />
        <section>
          <div>function hello {"() {"}</div>
          <div className="about__text">
            Hi, my name is Roberto and I'm a Project Manager, Web Developer &
            BIM specialist.
          </div>
          <div>{"}"}</div>
        </section>
        <section>
          <div>function story {"() {"}</div>
          <div className="about__text">
            <div>
              Since I was a youngster I had a passion for programming languages.
            </div>
            <br />
            <div>
              In 2019 I decided to bring into fruition my avid interest in this
              field to enhance my career, putting every possible effort to
              achieve this goal and pursue this path.
            </div>
          </div>
          <div>{"}"}</div>
        </section>
        <section>
          <div>function links {"() {"}</div>
          <div className="about__links">
            <a
              href="https://www.linkedin.com/in/roberto-castelli-teal/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GrLinkedin size={30} />
            </a>
            <a
              href="https://github.com/RobertoCastelli"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GrGithub size={30} />
            </a>
          </div>
          <div>{"}"}</div>
        </section>
      </div>
    </div>
  );
};

export default About;
