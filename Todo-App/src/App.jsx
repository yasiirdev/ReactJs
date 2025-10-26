import ShowTask from "./Components/showTask";
import Modal from "./Components/Modal";
import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  let [userTask, setuserTask] = useState([]);
  let [heading, setheading] = useState("");
  let [task, settask] = useState("");
  let [taskCount, settaskCount] = useState(0);

  // this function set the first input heading value with synthetic event
  let HeadingHandle = (e) => {
    e.preventDefault();
    setheading(e.target.value);
  };

  // this function set the second textarea description value with synthetic event
  let TaskHandle = (e) => {
    e.preventDefault();
    settask(e.target.value);
  };

  // save the task when user press the save button on modal box
  let saveHandle = function () {
    // if the value is not trim() function return
    if (!heading.trim() || !task.trim()) {
      return;
    }

    // newtask obj set heading , task  and id
    const newTask = {
      heading: heading.trim(),
      task: task.trim(),
      id: taskCount,
    };

    setuserTask([...userTask, newTask]);
    settaskCount(taskCount + 1);
    setheading("");
    settask("");
  };

  // all list contain a delete button with a uniqe num called taskCount
  const deleteHandle = (taskId) => {
    // Filter out the task with the matching ID
    const updatedTasks = userTask.filter((task) => task.id !== taskId);
    setuserTask(updatedTasks);
    // Update the task count
    settaskCount(updatedTasks.length);
  };

  return (
    <>
      <Container>
        <Header taskCount={taskCount} />
        <ShowTask userTask={userTask} onDelete={deleteHandle} />
        <Modal
          HeadingHandle={HeadingHandle}
          TaskHandle={TaskHandle}
          saveHandle={saveHandle}
          heading={heading}
          task={task}
        />
      </Container>
    </>
  );
}

export default App;
