import Update from "./Update";
import Complete from "./Complete";
import Delete from "./Delete";

function TaskCard({ task, deleteTask, onUpdateTask, onToggleComplete }) {
  if (!task) return null;

  return (
    <article className={`card ${task.completed ? "completed" : ""}`}>
      <div className="card-header">
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <span className={`priority priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      <Update tasks={task} onUpdateTask={onUpdateTask} />

      <div className="card-actions">
        <Complete task={task} onToggleComplete={onToggleComplete} />
        <Delete tasks={task} deleteTask={deleteTask} />
      </div>
    </article>
  );
}

export default TaskCard;
