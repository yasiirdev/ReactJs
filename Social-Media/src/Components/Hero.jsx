import { useContext, useEffect, useState } from "react";
import PostContext from "../Context/ContextApi";
import Post from "./post";
import Leading from "./Spinner";

export default function Hero() {
  const { postState, addPosts } = useContext(PostContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((obj) => {
        addPosts(obj.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [addPosts]);

  return (
    <>
      {loading && (
        <div className="leading">
          <Leading />
        </div>
      )}
      <div className="content">
        {!loading &&
          postState.map((postlist) => (
            <Post key={postlist.id} postlist={postlist} />
          ))}
      </div>
    </>
  );
}
