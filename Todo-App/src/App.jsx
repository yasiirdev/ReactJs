import ShowTask from "./Components/showTask";
import Modal from "./Components/Modal";
import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import { useReducer } from "react";
import { newTaskReducer } from "./store/ReducerFun";
import TodoContext from "./store/contextApi";


function App() {

  let [taskCount, settaskCount] = useState(0);
  const [newTask, dispatchNewTask] = useReducer(newTaskReducer, []);

  // save the task when user press the save button on modal box
  const saveHandle = function (heading, task) {
    // if the value is not trim() function return
    if (!heading.trim() || !task.trim()) {
             return;
    }

    dispatchNewTask({
      type: "SET_ITEM",
      id: "newtask",
      payload: {
        heading: heading,
        task: task,
        taskCount: taskCount,
      },
    });
    settaskCount(taskCount + 1);
  };

  // all list contain a delete button with a uniqe num called taskCount
  const deleteHandle = (taskId) => {
    dispatchNewTask({
      type: "DELETE_ITEM",
      id: "Delete",
      payload: {
        task: newTask,
        taskId: taskId,
        settaskCount,
      },
    });
  };

  return (
    <>
      <TodoContext value={{ taskCount, deleteHandle, saveHandle, newTask }}>
        <Container>
          <Header />
          <ShowTask  />
          <Modal saveHandle={saveHandle} />
        </Container>
      </TodoContext>
    </>
  );
}

export default App;
