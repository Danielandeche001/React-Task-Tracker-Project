import TaskCard from "./TaskCard";

function TaskList({ tasks = [], deleteTask, onUpdateTask, onToggleComplete }) {
  return (
    <section className="task-list" id="tasks">
      <h2>Tasks</h2>

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            onUpdateTask={onUpdateTask}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>

      <p className="task-count">{tasks.length} tasks loaded.</p>
    </section>
  );
}

export default TaskList;
