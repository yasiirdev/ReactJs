import ShowTask from "./Components/showTask";
import Modal from "./Components/Modal";
import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";

function App() {
  let [userTask, setuserTask] = useState([]);
  let [taskCount, settaskCount] = useState(0);

  // save the task when user press the save button on modal box
  let saveHandle = function (heading , task) {
    // if the value is not trim() function return
    if (!heading.trim() || !task.trim()) {
               return;
    }

    // using functional update 
    setuserTask((currVal /* currVal refences of original val that is assign to userTask as a state*/)=>[...currVal, {
      heading: heading.trim(),
      task: task.trim(),
      id: taskCount,
    }]);
    settaskCount(taskCount + 1);
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
          saveHandle={saveHandle}
        />
      </Container>
    </>
  );
}

export default App;
