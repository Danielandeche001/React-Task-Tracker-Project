import TaskCard from "./TaskCard";

function TaskList({ tasks = [], deleteTask, onUpdateTask}) {
  return (
    <div>
    <h2>TASKS</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} onUpdateTask={onUpdateTask}/>
      ))}
      <p>{tasks.length} tasks loaded.</p>
  </div>
    );
}

export default TaskList;
