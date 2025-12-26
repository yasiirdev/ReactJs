import { useContext } from "react";
import PostContext from "../Context/ContextApi";
import { MdDelete } from "react-icons/md";

const Post = ({ postlist }) => {
  const { deletepost } = useContext(PostContext);
  const deletefun = () => {
    deletepost(postlist.id);
  };
  return (
    <div className="card" id="design_card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{postlist.title}</h5>
        <p className="card-text">{postlist.body}</p>
      </div>
      <div className="postTags">
        {postlist.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info">
            {tag}
          </span>
        ))}
      </div>
      <span
        className="position-absolute top-0 start-100 translate-middle "
        onClick={deletefun}
      >
        <MdDelete />
      </span>
      <div className="alert alert-primary" role="alert" key={postlist.userId}>
        {`👍🏼 ${postlist.reactions.likes} likes   👎${postlist.reactions.dislikes} dislikes `}
      </div>
    </div>
  );
};

export default Post;
