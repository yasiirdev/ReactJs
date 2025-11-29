
export const newTaskReducer = (prevVal, action) => {

  let newtodo = prevVal;
  if (action.type === "SET_ITEM") {
    newtodo = [
      ...prevVal,
      {
        heading: action.payload.heading.trim(),
        task: action.payload.task.trim(),
        id: action.payload.taskCount,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newtodo = action.payload.task.filter(
      (task) => task.id !== action.payload.taskId
    );
    action.payload.settaskCount(newtodo.length);
  }

      return newtodo;
};
