//--- CONTEXT
import { useContext } from "react";
import { ContextData } from "../../context";

const Blog = () => {
  const { posts } = useContext(ContextData);

  return (
    <div>
      <ul>
        {posts.map((post: any) => {
          return <li key={post}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Blog;
