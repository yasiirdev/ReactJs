import { useReducer } from "react";
import PostContext from "./ContextApi";

const DEFAULT_POST = [
  {
    id: 1,
    user_id: "user_2_u",
    title: "going to Murry",
    body: "hi friend whatUp and i'm going to murry",
    reaction: 123,
    tags: ["happy", "good", "beauty"],
  },
  {
    id: 2,
    user_id: "user_2_u",
    title: "going to islambad",
    body: "hi friend whatUp and i'm going to murry",
    reaction: 123,
    tags: ["happy", "good", "beauty"],
  },
  {
    id: 3,
    user_id: "user_2_u",
    title: "going to islambad",
    body: "hi friend whatUp and i'm going to murry",
    reaction: 123,
    tags: ["happy", "good", "beauty"],
  },

  {
    id: 4,
    user_id: "user_2_u",
    title: "going to islambad",
    body: "hi friend whatUp and i'm going to murry",
    reaction: 123,
    tags: ["happy", "good", "beauty"],
  },
  {
    id: 5,
    user_id: "user_2_u",
    title: "going to islambad",
    body: "hi friend whatUp and i'm going to murry",
    reaction: 123,
    tags: ["happy", "good", "beauty"],
  },
  {
    id: 6,
    user_id: "user_2_u",
    title: "going to islambad",
    body: "hi friend whatUp and i'm going to murry",
    reaction: 123,
    tags: ["happy", "good", "beauty"],
  },
  {
    id: 7,
    user_id: "user_2_u",
    title: "going to islambad",
    body: "hi friend whatUp and i'm going to murry",
    reaction: 123,
    tags: ["happy", "good", "beauty"],
  },
];

const reducerFun = (preValue, action) => {
  let post = preValue;
  if (action.id === "DELETE_POST") {
    post = action.newPost;
  }
  return post;
};

export const PostContextProvider = ({ children }) => {
  let [postState, disptachPost] = useReducer(reducerFun, DEFAULT_POST);

  const deletepost = (post_id) => {
    let newPost = postState.filter((post) => {
      return post.id !== post_id;
    });

    disptachPost({
      id: "DELETE_POST",
      newPost: newPost,
    });
  };

  return (
    <PostContext value={{ deletepost, postState }}>{children}</PostContext>
  );
};
