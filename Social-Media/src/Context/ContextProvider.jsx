import { useReducer } from "react";
import PostContext from "./ContextApi";

const reducerFun = (preValue, action) => {
  let new_post = preValue;
  if (action.type === "USER_POST") {
    new_post = action.posts;
  } else if (action.type === "DELETE_POST") {
    new_post = action.newPost;
  }
  return new_post;
};

export const PostContextProvider = ({ children }) => {
  let [postState, disptachPost] = useReducer(reducerFun, []);

  const deletepost = (post_id) => {
    let newPost = postState.filter((post) => {
      return post.id !== post_id;
    });

    disptachPost({
      type: "DELETE_POST",
      id: "deletePost",
      newPost: newPost,
    });
  };

  const addPosts = (posts) => {
    disptachPost({
      type: "USER_POST",
      id: "addPost",
      posts,
    });
  };

  return (
    <PostContext value={{ deletepost, postState, addPosts }}>
      {children}
    </PostContext>
  );
};
