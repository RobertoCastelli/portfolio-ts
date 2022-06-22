//--- ROUTER
import { Link } from "react-router-dom"
//--- CONTEXT
import { useContext } from "react"
import { ContextData } from "../context"
//--- COMPONENT
import PostCard from "./PostCard"
import { PostsList } from "../database/posts"

const Posts = () => {
  const { posts, handlePost } = useContext(ContextData)

  return (
    <div className="posts__container">
      <ul>
        {posts.reverse().map((post: PostsList) => {
          return (
            <Link key={post.title} to="/article">
              <li onClick={() => handlePost(post.page)}>
                <PostCard
                  title={post.title}
                  intro={post.intro}
                  date={post.date}
                  image={post.image}
                  tags={post.tags}
                  page={post.page}
                />
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Posts
