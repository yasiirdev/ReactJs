import { useContext, useState } from "react";
import PostContext from "../Context/ContextApi";
import { MdDelete } from "react-icons/md";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Post = ({ postlist }) => {
  const { deletepost } = useContext(PostContext);
  const [liked, setLiked] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const deletefun = () => {
    deletepost(postlist.id);
    setShowDeleteConfirm(false);
  };

  return (
    <div
      className="card h-100 border-0 shadow-sm transition"
      style={{ cursor: "pointer" }}
    >
      {/* Post Header */}
      <div className="card-header bg-light border-bottom d-flex justify-content-between align-items-center py-3">
        <div>
          <h6 className="mb-0 fw-bold">User #{postlist.userId}</h6>
          <small className="text-muted">Posted recently</small>
        </div>
        <div className="position-relative">
          {showDeleteConfirm ? (
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-danger"
                onClick={deletefun}
                title="Confirm delete"
              >
                Yes
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => setShowDeleteConfirm(false)}
                title="Cancel delete"
              >
                No
              </button>
            </div>
          ) : (
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => setShowDeleteConfirm(true)}
              title="Delete post"
            >
              <MdDelete size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Post Body */}
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{postlist.title}</h5>
        <p className="card-text text-muted mb-4" style={{ lineHeight: "1.6" }}>
          {postlist.body}
        </p>

        {/* Post Stats */}
        <div className="row text-center border-top border-bottom py-3 mb-3">
          <div className="col-4">
            <small className="text-muted">
              <FaHeart className="text-danger me-1" />
              Likes
            </small>
            <div className="fw-bold">0</div>
          </div>
          <div className="col-4">
            <small className="text-muted">
              <FaComment className="text-info me-1" />
              Comments
            </small>
            <div className="fw-bold">0</div>
          </div>
          <div className="col-4">
            <small className="text-muted">
              <FaShare className="text-success me-1" />
              Shares
            </small>
            <div className="fw-bold">0</div>
          </div>
        </div>
      </div>

      {/* Post Footer - Action Buttons */}
      <div className="card-footer bg-light border-top d-flex gap-2 justify-content-around py-3">
        <button
          className={`btn btn-sm flex-grow-1 ${
            liked ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => setLiked(!liked)}
          title="Like post"
        >
          <FaHeart className="me-2" />
          {liked ? "Liked" : "Like"}
        </button>
        <button
          className="btn btn-sm btn-outline-info flex-grow-1"
          title="Comment on post"
        >
          <FaComment className="me-2" />
          Comment
        </button>
        <button
          className="btn btn-sm btn-outline-success flex-grow-1"
          title="Share post"
        >
          <FaShare className="me-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
