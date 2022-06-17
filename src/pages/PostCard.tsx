import { PostsList } from "../database/posts";

const PostCard = (props: PostsList) => {
  return (
    <div className="post__wrapper">
      <div className="post__content">
        <div className="post__image-wrapper">
          <img className="post__image" src={props.image} alt="post-img" />
        </div>
        <div className="post__box-wrapper">
          <div className="post__date">{props.date}</div>
          <h1 className="post__title">{props.title}</h1>
          <div className="post__intro">{props.intro}</div>
          <div className="post__footer">
            <div className="post__page">{props.page}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
