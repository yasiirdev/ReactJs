import { useContext, useEffect, useState } from "react";
import PostContext from "../Context/ContextApi";
import Post from "./post";
import Leader from "./Spinner";

export default function Hero() {
  const { postState, addPosts } = useContext(PostContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal }).then((res) => {
        if (!res.ok) {
          throw new Error("error dua to unstable network");
        } else {
          return res.json();
        }
      }).then((json) => {
        addPosts(json); // reactive value
        setLoading(false);
      })
      .catch((error) => {
        console.log(error,"fetching error");
        setLoading(true);
      });
    return () => {
      controller.abort(/*reason:?*/); // to kill async process in cleanup function
    };
  }, [addPosts]);

  return (
    <>
      <div className="content">
        
        {loading && (
          <div className="leading">
            <Leader />
          </div>
        )}

        {!loading &&
          postState.map((postlist) => (
            <Post key={postlist.id} postlist={postlist} />
          ))}
      </div>
    </>
  );
}
