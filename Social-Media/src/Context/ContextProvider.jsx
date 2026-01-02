import { useCallback, useReducer } from "react";
import PostContext from "./ContextApi";

const reducerFun = (preValue, action) => {
  let new_post = preValue;
  if (action.type === "ADD_POST") {
    new_post = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    new_post = action.payload.newPost;
  } else if (action.type === "USER_POST") {
    console.log(action.payload.user_post);
    new_post = new_post.unshift(action.payload.user_post);
  }
  return new_post;
};

export const PostContextProvider = ({ children }) => {
  let [postState, disptachPost] = useReducer(reducerFun, []);

  const deletepost =(post_id) => {
    let newPost = postState.filter((post) => {
      return post.id !== post_id;
    });

    disptachPost({
      type: "DELETE_POST",
      id: "deletePost",
      payload: {
        newPost
      }
    });
  };

  const pushPost = (user_post) => {
    disptachPost({
      id: "userpost",
      type: "USER_POST",
      payload: {
        user_post
      }
    })

  };

  const addPosts = useCallback((posts) => {
    disptachPost({
      type: "ADD_POST",
      id: "addPost",
      payload: {
        posts
      }
    });
  },[disptachPost]);

  return (
    <PostContext value={{ deletepost, postState, addPosts , pushPost }}>
      {children}
    </PostContext>
  );
};
