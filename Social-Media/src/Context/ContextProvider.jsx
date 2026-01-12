import { useCallback, useReducer, useEffect, useState } from "react";
import PostContext from "./ContextApi";
import { reducerFun } from "../Store/reduceFun";

export const PostContextProvider = ({ children }) => {
  let [postState, disptachPost] = useReducer(reducerFun, []);
  const [loading, setLoading] = useState(true);

  
  const deletepost = (post_id) => {
    disptachPost({
      type: "DELETE_POST",
      id: "deletePost",
      payload: {
        post_id,
      },
    });
  };

  const pushPost = (user_post) => {
    disptachPost({
      id: "userpost",
      type: "USER_POST",
      payload: {
        user_post,
      },
    });
  };

  const addPosts = useCallback(
    (posts) => {
      disptachPost({
        type: "ADD_POST",
        id: "addPost",
        payload: {
          posts,
        },
      });
    },
    [disptachPost]
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("error dua to unstable network");
        } else {
          return res.json();
        }
      })
      .then((json) => {
        addPosts(json); // reactive value
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, "fetching error");
        setLoading(true);
      });
    return () => {
      controller.abort(/*reason:?*/); // to kill async process in cleanup function
    };
  }, [addPosts]);

  return (
    <PostContext value={{ deletepost, postState, loading, pushPost }}>
      {children}
    </PostContext>
  );
};
