//--- IMAGES
import icona from "../images/logo.png"

const Home = () => {
  return (
    <div className="home__container">
      <div>Roberto Castelli</div>
      <div>Project Manager - Web Developer - BIM Specialist</div>
      <img className="home__icona" src={icona} alt="icona" />
    </div>
  )
}

export default Home
