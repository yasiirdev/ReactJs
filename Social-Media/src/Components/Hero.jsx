import { useContext } from "react";
import PostContext from "../Context/ContextApi";
import Post from "./post";
import Loader from "./Spinner";

export default function Hero() {
  const { postState , loading } = useContext(PostContext);
 
  return (
    <>
      <div className="content">
        {loading && (
          <div className="leading">
            <Loader />
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
