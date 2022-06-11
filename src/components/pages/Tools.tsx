//--- ICONS
import react from "../../images/icons/react_icon.svg"
import js from "../../images/icons/js_icon.svg"
import html from "../../images/icons/html_icon.svg"
import css from "../../images/icons/css_icon.svg"
import git from "../../images/icons/git_icon.svg"
import typescript from "../../images/icons/ts_icon.svg"
import firebase from "../../images/icons/firebase_icon.svg"
import vim from "../../images/icons/vim_icon.svg"

const Tools = () => {
  //--- INTERFACE
  interface List {
    tool: string
    icon: string
    num: string
  }

  //--- MASTERING
  const mastering: List[] = [
    {
      tool: "JS",
      icon: js,
      num: "2",
    },
    {
      tool: "React",
      icon: react,
      num: "3",
    },
    {
      tool: "HTML",
      icon: html,
      num: "4",
    },
    {
      tool: "CSS",
      icon: css,
      num: "5",
    },
    {
      tool: "Vim",
      icon: vim,
      num: "6",
    },
    {
      tool: "Git",
      icon: git,
      num: "7",
    },
    {
      tool: "Firebase",
      icon: firebase,
      num: "8",
    },
  ]

  //--- LEARNING
  const learning: List[] = [
    {
      tool: "Typescript",
      icon: typescript,
      num: "12",
    },
  ]

  return (
    <div className="tools__container">
      <div className="tools__content">
        {/* eslint-disable-next-line */}
        <h1>// tools</h1>
        <ul>
          <li>&nbsp;1 &nbsp;.mastering {"{"}</li>
          {mastering.map((elem) => {
            return (
              <li>
                &nbsp;{elem.num}{" "}
                <span>
                  &nbsp;&nbsp;
                  <img src={elem.icon} alt="icon" /> {elem.tool}
                </span>
              </li>
            )
          })}
          <li>&nbsp;9 &nbsp;{"}"}</li>
          <li>10</li>
          <li>11 &nbsp;.learning {"{"}</li>
          {learning.map((elem) => {
            return (
              <li>
                {elem.num}{" "}
                <span>
                  &nbsp;&nbsp;
                  <img src={elem.icon} alt="icon" /> {elem.tool}
                </span>
              </li>
            )
          })}
          <li>13 &nbsp;{"}"}</li>
          <li>14</li>
          <li>15</li>
        </ul>
      </div>
    </div>
  )
}

export default Tools
