import { useContext } from "react";
import PostContext from "../Context/ContextApi";
import Post from "./post";
import Loader from "./spinner";
import { FaFire, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const { postState, loading } = useContext(PostContext);

  return (
    <>
      {/* Hero Banner Section */}
      <div
        className="py-5 text-white position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "300px",
        }}
      >
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <span className="badge bg-warning text-dark px-3 py-2">
                  <FaFire className="me-2" />
                  Trending Posts
                </span>
              </div>
              <h1 className="display-4 fw-bold mb-3">
                Discover Amazing Stories
              </h1>
              <p className="lead mb-4">
                Explore the latest posts from our vibrant community. Connect,
                engage, and inspire others with your thoughts and ideas.
              </p>
              <div className="d-flex gap-3">
                <a href="#postgrid" className="btn btn-warning btn-lg px-4 fw-bold text-decoration-none">
                  <FaArrowRight className="me-2" />
                  Explore Posts
                </a>
                <Link to="/about" className="btn btn-outline-light btn-lg px-4 fw-bold" >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="display-1">📱</div>
              <p className="text-warning fw-bold">Join Our Community</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="position-absolute"
          style={{
            width: "300px",
            height: "300px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            bottom: "-100px",
            right: "-100px",
          }}
        ></div>
      </div>

      {/* Filter/Stats Section */}
      <div className="bg-light py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h5 className="fw-bold text-primary">{postState.length}+</h5>
              <small className="text-muted">Total Posts</small>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-success">
                {postState.length > 0 ? "Active" : "Loading"}
              </h5>
              <small className="text-muted">Community Status</small>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold text-warning">100%</h5>
              <small className="text-muted">Engagement Rate</small>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid Section */}
      <div id="postgrid" className="container py-5">
        <div className="mb-4">
          <h2 className="fw-bold mb-2">Latest Posts</h2>
          <p className="text-muted">
            Check out the most recent posts from our community
          </p>
        </div>

        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "400px" }}
          >
            <div className="text-center">
              <Loader />
              <p className="text-muted mt-3">Loading amazing posts...</p>
            </div>
          </div>
        )}

        {!loading && postState.length > 0 ? (
          <div className="row g-4">
            {postState.map((postlist) => (
              <div key={postlist.id} className="col-lg-4 col-md-6">
                <Post postlist={postlist} />
              </div>
            ))}
          </div>
        ) : (
          !loading && (
            <div className="text-center py-5">
              <div style={{ fontSize: "3rem" }}>📝</div>
              <h4 className="fw-bold mt-3">No Posts Yet</h4>
              <p className="text-muted">Be the first to create a post!</p>
            </div>
          )
        )}
      </div>

      {/* CTA Section */}
      {!loading && postState.length > 0 && (
        <div className="bg-info bg-opacity-10 py-5 border-top border-bottom">
          <div className="container text-center">
            <h3 className="fw-bold mb-3">Want to Share Your Story?</h3>
            <p className="text-muted mb-4">
              Join thousands of content creators and share your amazing posts
            </p>
            <Link to="create-post" className="btn btn-primary btn-lg px-5">
              Create Your First Post
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
