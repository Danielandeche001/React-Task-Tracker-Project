function Complete({ task, onToggleComplete }) {
  return (
    <button
      className={task.completed ? "complete-button done" : "complete-button"}
      onClick={() => onToggleComplete(task)}
    >
      {task.completed ? "Completed" : "Pending"}
    </button>
  );
}

export default Complete;
