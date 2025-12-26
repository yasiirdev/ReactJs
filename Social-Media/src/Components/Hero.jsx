import { useContext, useEffect, useState } from "react";
import PostContext from "../Context/ContextApi";
import Post from "./post";
import Leading from "./Spinner";

export default function Hero() {
  const { postState, addPosts } = useContext(PostContext);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
     setFetched(true);
    fetch("https://dummyjson.com/posts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((obj) => {
        addPosts(obj.posts);
        setFetched(false);
      })
      .catch((error) => console.log(error));
  }, [addPosts]); 

  return (
    <>
      {fetched && (
        <div className="leading">
          <Leading />
        </div>
      )}
      <div className="content">
        {!fetched &&
          postState.map((postlist) => (
            <Post key={postlist.id} postlist={postlist} />
          ))}
      </div>
    </>
  );
}
