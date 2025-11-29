import { useRef } from "react";

export function HtmlForConvertor({ unitsHandle, result }) {
  const inputVal = useRef(null);
  const fromVal = useRef(null);
  const toVal = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    let currentVal = inputVal.current.value;
    let userFromSelect =
      fromVal.current.options[fromVal.current.options.selectedIndex];
    let userToSelect =
      toVal.current.options[toVal.current.options.selectedIndex];
    unitsHandle(currentVal, userFromSelect, userToSelect);
    inputVal.current.value = "";
  };

  return (
    <>
      <form className="innerdiv">
        <h1 className="heading">Temperature Converter</h1>
        <i className="detail">Enter the temperature, select units and submit</i>

        <input
          type="number"
          name="convertNum"
          id="convertNum"
          className="convertNum"
          placeholder="0.00"
          ref={inputVal}
          required
        />
        {/* from Value */}
        <select name="fromUnit" id="fromUnit" ref={fromVal}>
          <option value="Celsius">Celsius</option>
          <option value="fehranheit">Fehrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>

        {/* to value */}
        <select name="toUnit" id="toUnit" ref={toVal}>
          <option value="Celsius">Celsius</option>
          <option value="fehranheit">Fehrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>

        <button
          type="submit"
          className="convertBt"
          onClick={(e) => HandleSubmit(e)}
        >
          Convert
        </button>
        <p className="result">{result}</p>
      </form>
    </>
  );
}





















// import ShowTask from "./Components/showTask";
// import Modal from "./Components/Modal";
// import { useState } from "react";
// import Container from "./Components/Container";
// import Header from "./Components/Header";
// import { useReducer } from "react";

// const newTaskReducer = (prevVal, action) => {
//   console.log(prevVal);

//   let newtodo = prevVal;
//   if (action.type === "SET_ITEM") {
//     newtodo = [
//       ...prevVal,
//       {
//         heading: action.payload.heading.trim(),
//         task: action.payload.task.trim(),
//         id: action.payload.taskCount,
//       },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newtodo = action.payload.task.filter(
//       (task) => task.id !== action.payload.taskId
//     );
//     action.payload.settaskCount(newtodo.length);
//   }

//   return newtodo;
// };

// function App() {
//   // let [userTask, setuserTask] = useState([]);
//   let [taskCount, settaskCount] = useState(0);
//   const [newTask, dispatchNewTask] = useReducer(newTaskReducer, []);
//   // save the task when user press the save button on modal box
//   const saveHandle = function (heading, task) {
//     // if the value is not trim() function return
//     if (!heading.trim() || !task.trim()) {
//       return;
//     }

//     // // using functional update
//     // setuserTask((prevVal /* currVal refences of original val that is assign to userTask as a state*/)=>[...prevVal, {
//     //   heading: heading.trim(),
//     //   task: task.trim(),
//     //   id: taskCount,
//     // }]);

//     dispatchNewTask({
//       type: "SET_ITEM",
//       id: "newtask",
//       payload: {
//         heading: heading,
//         task: task,
//         taskCount: taskCount,
//       },
//     });
//     settaskCount(taskCount + 1);
//   };

//   // all list contain a delete button with a uniqe num called taskCount
//   const deleteHandle = (taskId) => {
//     // // Filter out the task with the matching ID
//     // const updatedTasks = userTask.filter((task) => task.id !== taskId);
//     // setuserTask(updatedTasks);
//     // Update the task count
//     // settaskCount(updatedTasks.length);

//     dispatchNewTask({
//       type: "DELETE_ITEM",
//       id: "Delete",
//       payload: {
//         task: newTask,
//         taskId: taskId,
//         settaskCount,
//       },
//     });
//   };

//   return (
//     <>
//       <Container>
//         <Header taskCount={taskCount} />
//         <ShowTask userTask={newTask} onDelete={deleteHandle} />
//         <Modal saveHandle={saveHandle} />
//       </Container>
//     </>
//   );
// }

// export default App;
