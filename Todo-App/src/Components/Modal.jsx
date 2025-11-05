// import { useRef } from "react";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
export default function Modal({
  HeadingHandle,
  TaskHandle,
  saveHandle,
  heading,
  task,
}) 

// let ref = useRef(0);
// console.log(ref);


{
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New Task  
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => e.preventDefault()}> /* use a preventDefault for form */
                <div className="mb-3">
                  <label htmlFor="task-heading" className="form-label">
                    Heading
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="task-heading"
                    name="heading"
                    value={heading}  //  task heading value that user will enter 
                    onChange={HeadingHandle} // *Handle function
                    aria-required="true"
                    placeholder="Enter task heading"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="task-description" className="form-label">
                    Task Description
                  </label>
                  <textarea
                    className="form-control"
                    id="task-description"
                    value={task}      // task value that user will enter 
                    onChange={TaskHandle} // *Handle function
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close modal"
              >
               <MdCancel />
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveHandle}
                aria-label="Save task"
              >
                <FaSave /> /* react icon with family of (fa) */
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
