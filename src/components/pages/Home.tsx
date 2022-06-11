//--- ROUTER
import { Link } from "react-router-dom"
//--- IMAGES
import icona from "../../images/logo.png"

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__content">
        <ul>
          <li>&nbsp;1 import Roberto from 'react'</li>
          <li>&nbsp;2</li>
          <li>&nbsp;3</li>
          <li>&nbsp;4</li>
          <li>&nbsp;5</li>
          <li>&nbsp;6</li>
          <li>&nbsp;7</li>
          <li>&nbsp;8</li>
          <li>&nbsp;9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14 let job = {"{"}</li>
          <li>
            15&nbsp;&nbsp;&nbsp;work: <span>Project Manager,</span>
          </li>
          <li>
            16&nbsp;&nbsp;&nbsp;passion: <span>Web Developer,</span>
          </li>
          <li>
            17&nbsp;&nbsp;&nbsp;inspiration: <span>BIM Specialist,</span>
          </li>
          <li>18 {"}"}</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>
            24 export default{" "}
            <Link to="/about">
              <button type="button">about me</button>
            </Link>
          </li>
          <li>25</li>
        </ul>
        <img src={icona} alt="icona" />
        <div className="home__name">Robert0 Ca5telli</div>
      </div>
    </div>
  )
}

export default Home
