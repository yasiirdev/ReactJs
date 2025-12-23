import { useContext } from "react";
import PostContext from "../Context/ContextApi";
import Post from "./post";

export default function Hero() {
  const { postState, addPosts } = useContext(PostContext);

  function HandleBt() {
    fetch("https://dummyjson.com/posts", {
      method: "POST"
    }).then((res) => res.json()).then((obj) => addPosts(obj.posts)).catch(error => console.log(error));
  }


  return (
    <div className="content">
      {postState.map((postlist) => (
        <Post key={postlist.id} postlist={postlist} />
      ))}
      <button type="button" onClick={HandleBt}>Fetch</button>
    </div>
  );
}
