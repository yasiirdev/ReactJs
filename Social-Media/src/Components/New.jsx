import { useRef } from "react";

export default function CreatePost() {
  const input_1 = useRef(null);
  const textarea_1 = useRef(null);
  const input_2 = useRef(null);
  const tags = useRef(null);
  const user_id = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = input_1.current.value;
    let description = textarea_1.current.value;
    let reaction = input_2.current.value;
    let tagsInarr = tags.current.value.split(/(\s+)/);
    let user_name = user_id.current.value;

    console.log(title, description, reaction, tagsInarr , user_name);

     
    input_1.current.value = "";
    textarea_1.current.value = "";
    input_2.current.value = "";
    tags.current.value = "";
    user_id.current.value = "";
    return 0;
  };

  return (
    <form className="formControler" id="newposts" name="createnewpost">
      <div className="mb-3 createPostForm">
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
          id="Input1"
          placeholder="Enter username"
          ref={user_id}
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
          id="Input1"
          placeholder="Title"
          ref={input_1}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="Textarea1"
          rows="3"
          ref={textarea_1}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="input2" className="form-label" title="🥰🥶😱❤️">
          Reaction
        </label>
        <input
          type="number"
          name="input2"
          id="input2"
          className="customForm"
          placeholder="reaction..."
          ref={input_2}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="input2" className="form-label" title="🥰🥶😱❤️">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          className="form-control"
          ref={tags}
          placeholder="Enter tags with space"
        />
      </div>

      <button type="submit" className="custom-button" onClick={handleSubmit}>
        Post
      </button>
    </form>
  );
}
