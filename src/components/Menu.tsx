//--- ICONS
import {
  VscFiles,
  VscGithubAlt,
  VscCode,
  VscBook,
  VscAccount,
  VscGear,
} from "react-icons/vsc"

const Menu = () => {
  //--- INTERFACE
  interface List {
    id: number
    icon: JSX.Element
  }

  //--- LIST TOP
  const listTop: List[] = [
    {
      id: 1,
      icon: <VscFiles size={30} />,
    },
    {
      id: 2,
      icon: <VscCode size={30} />,
    },
    {
      id: 3,
      icon: <VscBook size={30} />,
    },
    {
      id: 4,
      icon: <VscGithubAlt size={30} />,
    },
  ]

  //--- LIST BOTTOM
  const listBottom: List[] = [
    {
      id: 1,
      icon: <VscAccount size={30} />,
    },
    {
      id: 2,
      icon: <VscGear size={30} />,
    },
  ]

  return (
    <div className="menu__container">
      <ul>
        {listTop.map((elem: List) => {
          return <li key={elem.id}>{elem.icon}</li>
        })}
      </ul>
      <ul>
        {listBottom.map((elem: List) => {
          return <li key={elem.id}>{elem.icon}</li>
        })}
      </ul>
    </div>
  )
}

export default Menu
