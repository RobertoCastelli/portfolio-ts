//--- CONTEXT
import { useContext } from "react"
import { ContextData } from "../../context"
//--- COMPONENT
import PostCard from "./PostCard"
import { Posts } from "../../database/posts"

const Blog = () => {
  const { posts } = useContext(ContextData)

  return (
    <div className="blog__container">
      <ul>
        {posts.map((post: Posts) => {
          return (
            <li key={post.title}>
              <PostCard
                title={post.title}
                intro={post.intro}
                date={post.date}
                image={post.image}
                tags={post.tags}
                page={post.page}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Blog
