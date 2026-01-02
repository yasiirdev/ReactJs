import { useContext,  useRef } from "react";
import { useOnline } from "../Hooks/networkStatus";
import PostContext from "../Context/ContextApi";
export default function CreatePost() {
  const userId = useRef(null);
  const body = useRef(null);
  const title = useRef(null);

  // custom hook
  const isonline = useOnline();
  const { pushPost } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let I = userId.current.value;
    let B = body.current.value;
    let T = title.current.value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: T.trim(),
        body: B.trim(),
        userId: I.trim(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Method : POST is fail  due to unstable network");
        }
      })
      .then((json) => {
        console.log(json);
        return pushPost(json);
      }).catch(error => console.log(error));

    userId.current.value = "";
    body.current.value = "";
    title.current.value = "";

    return 0;
  };

  return (
    <form className="formControler" id="newposts" name="createnewpost">
      <div className="mb-3 createPostForm" id="postfield">
        <label
          htmlFor="Input1"
          className="form-label"
          title="title for content"
        >
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter username"
          ref={userId}
        />
      </div>

      <div className="mb-3 createPostForm">
        <label
          htmlFor="Input1"
          className="form-label"
          title="title for content"
        >
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          ref={title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="3"
          ref={body}
        ></textarea>
      </div>
      {isonline ? (
        <button type="submit" className="custom-button" onClick={handleSubmit}>
          Post
        </button>
      ) : (
        <button type="submit" disabled className="disabled-button">
          Reconnecting...
        </button>
      )}
    </form>
  );
}
