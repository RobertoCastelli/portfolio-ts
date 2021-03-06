//--- CONTEXT
import { createContext, ReactNode, useState, useEffect } from "react"
//--- DATABASE
import { mastering, learning } from "./database/tools"
import { listTop, listBottom } from "./database/menu"
import { list } from "./database/explorer"
import { projects, List } from "./database/projects"
import { posts } from "./database/posts"
import { articles } from "./database/articles"

//--- INTERFACE
interface ContextProps {
  children: ReactNode
}

//--- CONTEXT
export const ContextData = createContext<any>({})

const ContextProvider = (props: ContextProps) => {
  //--- STATES
  const [isExpanded, setisExpanded] = useState(false)
  const [breadCrumbs, setBreadCrumbs] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState<List[]>([])
  const [breadCrumbTitle, setBreadCrumbTitle] = useState("")
  const [article, setArticle] = useState("")

  //--- SET ACCORDION OPEN/CLOSE
  const handleAccordion = () => setisExpanded(!isExpanded)

  //--- FETCH BLOG ARTICLES
  const handlePost = (page: string) => {
    articles.map((elem: { page: string; article: string }) => {
      if (elem.page === page) {
        return fetch(elem.article)
          .then((res) => res.text())
          .then((text) => setArticle(text))
      }
      return articles
    })
  }

  //--- GET UNIQUE TECH FROM PROJECTS LIST --> BREADCRUMS
  useEffect(() => {
    const bread = projects.map((post) => post.tech)
    const flatBread = bread.flat()
    const unique = [...new Set(flatBread)]
    setBreadCrumbs(unique)
  }, [])

  //--- GET ALL PROJECTS ON LOAD
  useEffect(() => setFilteredProjects(projects), [])

  //--- GET BREADCRUMB TO FILTER THE PROJECT LIST
  const getBreadCrumb = (breadCrumb: string) => {
    if (breadCrumb !== "all") {
      // set breadcrumb title
      setBreadCrumbTitle(`${breadCrumb} projects`)
      setFilteredProjects(
        projects.filter((project: List) => project.tech === breadCrumb)
      )
    } else {
      // set breadcrumb title
      setBreadCrumbTitle("all projects")
      setFilteredProjects(projects)
    }
  }

  return (
    <ContextData.Provider
      value={{
        isExpanded,
        handleAccordion,
        mastering,
        learning,
        listTop,
        listBottom,
        list,
        projects,
        posts,
        breadCrumbs,
        getBreadCrumb,
        filteredProjects,
        breadCrumbTitle,
        handlePost,
        article,
      }}
    >
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
