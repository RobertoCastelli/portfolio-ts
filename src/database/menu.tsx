//--- ICONS
import {
  VscFiles,
  VscCode,
  VscBook,
  VscAccount,
  VscGear,
} from "react-icons/vsc"

//--- INTERFACE
export interface List {
  id: number
  icon: JSX.Element
  route: string
}

//--- SIDE MENU LIST TOP
export const listTop: List[] = [
  {
    id: 1,
    icon: <VscFiles size={30} />,
    route: "/",
  },
  {
    id: 2,
    icon: <VscCode size={30} />,
    route: "/projects",
  },
  {
    id: 3,
    icon: <VscBook size={30} />,
    route: "/blog",
  },
]

//--- SIDE MENU LIST BOTTOM
export const listBottom: List[] = [
  {
    id: 1,
    icon: <VscAccount size={30} />,
    route: "/about",
  },
  {
    id: 2,
    icon: <VscGear size={30} />,
    route: "/tools",
  },
]
