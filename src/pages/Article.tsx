import { useContext } from "react"
import { ContextData } from "../context"
import ReactMarkdown from "react-markdown"

const Article = () => {
  const { article } = useContext(ContextData)
  return (
    <div className="article__container">
      <ReactMarkdown children={article}></ReactMarkdown>
    </div>
  )
}

export default Article
