import TaskCard from "./TaskCard";

function TaskList({ tasks = [], deleteTask, onUpdateTask, onToggleComplete }) {
  return (
    <section className="task-list" id="tasks">
      <div className="section-heading task-heading">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Tasks</h2>
        </div>
        <p className="task-count">{tasks.length} tasks loaded.</p>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <h3>No tasks found</h3>
          <p>Add a task or change your search/filter options.</p>
        </div>
      ) : (
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
      )}
    </section>
  );
}

export default TaskList;
