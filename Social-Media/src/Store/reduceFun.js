export const reducerFun = (preValue, action) => {
  let new_post = preValue;
  if (action.type === "ADD_POST") {
    new_post = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    new_post = new_post.filter(post => post.id !== action.payload.post_id);
  } else if (action.type === "USER_POST") {
    new_post = [action.payload.user_post, ...preValue];
  }
  return new_post;
};
