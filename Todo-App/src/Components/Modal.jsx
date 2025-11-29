import { useRef , useContext } from "react";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import TodoContext from "/home/yasiirdev/Programming/ReactJs/Todo-App/src/store/contextApi";
export default function Modal() {
  let inputVal = useRef();
  let textVal = useRef();
  let { saveHandle } = useContext(TodoContext);
  const HandleSubmit = () => {
    saveHandle(inputVal.current.value, textVal.current.value);
    inputVal.current.value = "";
    textVal.current.value = "";
  };

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
                <form>
                  <div className="mb-3">
                    <label htmlFor="task-heading" className="form-label">
                      Heading
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="task-heading"
                      name="heading"
                      aria-required="true"
                      placeholder="Enter task heading"
                      ref={inputVal}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="task-description" className="form-label">
                      Task Description
                    </label>
                    <textarea
                      className="form-control"
                      id="task-description"
                      ref={textVal}
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
                  className="btn btn-primary"
                  aria-label="Save task"
                  type="submit"
                  onClick={HandleSubmit}
                >
                  <FaSave />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
