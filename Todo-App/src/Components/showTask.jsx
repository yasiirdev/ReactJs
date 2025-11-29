import { useState , useContext } from "react";
import "./ShowTask.css";
import TodoContext from "/home/yasiirdev/Programming/ReactJs/Todo-App/src/store/contextApi";
function ShowTask() {
  const [expandedTask, setExpandedTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  let { newTask, deleteHandle } = useContext(TodoContext);

  const toggleTask = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const handleDelete = (taskId) => {
    setTaskToDelete(taskId);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      deleteHandle(taskToDelete);
      setTaskToDelete(null);
    }
  };

  return (
    <div className="task-list w-100 m-0 p-0">
      {newTask.length === 0 ? (
        <div className="empty-state text-center p-4">
          <i className="bi bi-clipboard2 fs-1 text-muted mb-3 d-block"></i>
          <h3 className="fs-5">No tasks yet</h3>
          <p className="text-muted">Create your first task by clicking the "New Task" button</p>
        </div>
      ) : (
        newTask.map((task) => (
          <div 
            className={`task-item border-bottom ${expandedTask === task.id ? 'expanded' : ''}`} 
            key={task.id}
          >
            <div className="d-flex justify-content-between p-3">
              <div
                className="task-content grow"
                onClick={() => toggleTask(task.id)}
                role="button"
                style={{ cursor: "pointer" }}
              >
                <h3 className="fs-6 fw-semibold text-primary mb-1">
                  {task.heading || "Task"}
                </h3>
                <div className="task-preview">
                  <small className="text-muted">
                    {task.task.length > 40
                      ? task.task.substring(0, 40) + "..."
                      : task.task}
                  </small>
                </div>
                {expandedTask === task.id && (
                  <div className="task-details mt-2">
                    <p className="mb-0 text-dark">{task.task}</p>
                  </div>
                )}
              </div>
              <div className="task-actions d-flex gap-2 ms-3 align-items-start">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  aria-label="Edit task"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(task.id)}
                  aria-label="Delete task"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Delete Confirmation Modal */}
      <div
        className={`modal fade ${taskToDelete !== null ? 'show' : ''}`}
        id="deleteConfirmModal"
        tabIndex="-1"
        role="dialog"
        style={{ display: taskToDelete !== null ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Delete</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setTaskToDelete(null)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this task?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setTaskToDelete(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {taskToDelete !== null && (
        <div 
          className="modal-backdrop fade show" 
          onClick={() => setTaskToDelete(null)}
        ></div>
      )}
    </div>
  );
}

export default ShowTask;