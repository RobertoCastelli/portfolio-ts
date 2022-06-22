//--- ICONS
import react from "../images/icons/react_icon.svg"
import js from "../images/icons/js_icon.svg"
import markdown from "../images/icons/markdown_icon.svg"
//--- INTERFACE
export interface List {
  id: number
  link: string
  route: string
  icon: string
}

//--- NAVBAR LIST
export const list: List[] = [
  {
    id: 1,
    link: "Home.jsx",
    route: "/",
    icon: react,
  },
  {
    id: 2,
    link: "Projects.js",
    route: "/projects",
    icon: js,
  },
  {
    id: 3,
    link: "Blog.md",
    route: "/blog",
    icon: markdown,
  },
]
