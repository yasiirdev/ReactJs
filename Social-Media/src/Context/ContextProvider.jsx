import { useCallback, useReducer, useEffect, useState } from "react";
import PostContext from "./ContextApi";

const reducerFun = (preValue, action) => {
  let new_post = preValue;
  if (action.type === "ADD_POST") {
    new_post = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    new_post = action.payload.newPost;
  } else if (action.type === "USER_POST") {
    // console.log(action.payload.user_post);
    new_post = [action.payload.user_post, ...preValue];
  }
  return new_post;
};

export const PostContextProvider = ({ children }) => {
  let [postState, disptachPost] = useReducer(reducerFun, []);
  const [loading, setLoading] = useState(true);

  
  const deletepost = (post_id) => {
    
    let newPost = postState.filter((post) => {
      return post.id !== post_id;
    });

    disptachPost({
      type: "DELETE_POST",
      id: "deletePost",
      payload: {
        newPost,
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
