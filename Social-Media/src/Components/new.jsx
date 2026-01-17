import { useContext, useRef, useState } from "react";
import { useOnline } from "../Hooks/networkStatus";
import PostContext from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";
import {
  FaPen,
  FaUser,
  FaFileAlt,
  FaCheckCircle,
  FaWifi,
} from "react-icons/fa";
import { MdOutlineWifiOff } from "react-icons/md";
export default function CreatePost() {
  const userId = useRef(null);
  const body = useRef(null);
  const title = useRef(null);
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [titleCount, setTitleCount] = useState(0);

  // custom hook
  const isonline = useOnline();
  const { pushPost } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let I = userId.current.value;
    let B = body.current.value;
    let T = title.current.value;

    if (!I.trim() || !T.trim() || !B.trim()) {
      alert("Please fill all fields");
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: T,
        body: B,
        userId: I,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/");
          pushPost(json);
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        alert("Error creating post. Please try again.");
      });

    userId.current.value = "";
    body.current.value = "";
    title.current.value = "";
    setCharCount(0);
    setTitleCount(0);
  };

  const handleBodyChange = (e) => {
    setCharCount(e.target.value.length);
  };

  const handleTitleChange = (e) => {
    setTitleCount(e.target.value.length);
  };

  return (
    <>
      {/* Hero Banner Section */}
      <div
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          minHeight: "200px",
        }}
      >
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div
              className="rounded-circle bg-warning"
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
              }}
            >
              <FaPen />
            </div>
            <div>
              <small className="text-warning">Create Something New</small>
              <h1 className="m-0 fw-bold display-5">Share Your Story</h1>
            </div>
          </div>
          <p className="lead">
            Express yourself and share your thoughts with our vibrant community.
            Your voice matters!
          </p>
        </div>
      </div>

      {/* Success Message */}
      {submitted && (
        <div
          className="alert alert-success alert-dismissible fade show mx-3 mt-3"
          role="alert"
        >
          <FaCheckCircle className="me-2" />
          <strong>Success!</strong> Your post has been created successfully.
          Redirecting...
        </div>
      )}

      {/* Main Form Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg p-4">
              <h3 className="fw-bold mb-4">
                <FaPen className="me-2 text-primary" />
                Create New Post
              </h3>

              <form id="newposts" name="createnewpost" onSubmit={handleSubmit}>
                {/* Username Field */}
                <div className="mb-4">
                  <label htmlFor="userId" className="form-label fw-bold">
                    <FaUser className="me-2 text-primary" />
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="userId"
                    placeholder="Enter your username"
                    ref={userId}
                  />
                  <small className="text-muted">
                    Enter a username to identify as the post author
                  </small>
                </div>

                {/* Title Field */}
                <div className="mb-4">
                  <label htmlFor="title" className="form-label fw-bold">
                    <FaFileAlt className="me-2 text-success" />
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="title"
                    placeholder="What's on your mind?"
                    ref={title}
                    onChange={handleTitleChange}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <small className="text-muted">
                      Give your post a catchy title
                    </small>
                    <small
                      className={
                        titleCount > 100 ? "text-danger" : "text-muted"
                      }
                    >
                      {titleCount}/100
                    </small>
                  </div>
                </div>

                {/* Description Field */}
                <div className="mb-4">
                  <label htmlFor="body" className="form-label fw-bold">
                    <FaFileAlt className="me-2 text-info" />
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="body"
                    rows="6"
                    placeholder="Tell your story... Share your thoughts, experiences, and ideas with the community."
                    ref={body}
                    onChange={handleBodyChange}
                    style={{ minHeight: "150px" }}
                  ></textarea>
                  <div className="d-flex justify-content-between mt-2">
                    <small className="text-muted">
                      Write a compelling description
                    </small>
                    <small
                      className={
                        charCount > 500 ? "text-warning" : "text-muted"
                      }
                    >
                      {charCount}/500
                    </small>
                  </div>
                </div>

                {/* Network Status */}
                <div className="mb-4 p-3 rounded bg-light border">
                  <div className="d-flex align-items-center">
                    {isonline ? (
                      <>
                        <FaWifi className="text-success me-2" size={20} />
                        <span className="fw-bold text-success">
                          You are online - Ready to post!
                        </span>
                      </>
                    ) : (
                      <>
                        <MdOutlineWifiOff className="text-danger me-2" size={20} />
                        <span className="fw-bold text-danger">
                          You are offline - Please reconnect
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg"
                    onClick={() => {
                      userId.current.value = "";
                      body.current.value = "";
                      title.current.value = "";
                      setCharCount(0);
                      setTitleCount(0);
                    }}
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5 fw-bold"
                    disabled={!isonline || submitted}
                    onClick={handleSubmit}
                  >
                    {submitted ? "Publishing..." : "Publish Post"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar - Tips & Guidelines */}
          <div className="col-lg-4">
            {/* Tips Card */}
            <div className="card border-0 shadow-lg mb-4">
              <div className="card-header bg-primary text-white py-3">
                <h5 className="m-0 fw-bold">✨ Pro Tips</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>📝 Be Clear:</strong>
                    <p className="small text-muted mb-0">
                      Use a clear, descriptive title
                    </p>
                  </li>
                  <li className="mb-3">
                    <strong>💡 Be Original:</strong>
                    <p className="small text-muted mb-0">
                      Share unique insights and ideas
                    </p>
                  </li>
                  <li className="mb-3">
                    <strong>🎯 Be Concise:</strong>
                    <p className="small text-muted mb-0">
                      Keep content focused and engaging
                    </p>
                  </li>
                  <li>
                    <strong>🌟 Be Respectful:</strong>
                    <p className="small text-muted mb-0">
                      Maintain community guidelines
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Character Limit Card */}
            <div className="card border-0 shadow-lg">
              <div className="card-header bg-info text-white py-3">
                <h5 className="m-0 fw-bold">📊 Content Length</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <small className="text-muted">Title Progress</small>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      style={{
                        width: `${Math.min((titleCount / 100) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <small className="text-muted">Description Progress</small>
                  <div className="progress">
                    <div
                      className={`progress-bar ${
                        charCount > 500 ? "bg-warning" : "bg-info"
                      }`}
                      style={{
                        width: `${Math.min((charCount / 500) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
