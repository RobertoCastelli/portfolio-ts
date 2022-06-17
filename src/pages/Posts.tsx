//--- CONTEXT
import { useContext } from "react";
import { ContextData } from "../context";
//--- COMPONENT
import PostCard from "./PostCard";
import { PostsList } from "../database/posts";

const Posts = () => {
  const { posts } = useContext(ContextData);

  return (
    <div className="posts__container">
      <ul>
        {posts.reverse().map((post: PostsList) => {
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
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
