import Update from "./Update";
import Complete from "./Complete";
import Delete from "./Delete";

function TaskCard({ task, deleteTask, onUpdateTask }) {
  if (!task) return null;
  return <div
        style={{
        border: "1px solid #ccc", 
        borderStyle: "dashed", 
        background:"linear-gradient(to right, #2193b0, #6dd5ed, #00b09b)"
        }}
        className="card"
           >
    <h2>TaskCard placeholder</h2>
    <p>{task.id}</p>
      <h1>{task.title}</h1>
      <span style={{color: "black"}}>{task.description}</span>
      <p>{task.duedate}</p>
      <p style={{color: "black"}}>{task.priority}</p>
      <Update tasks={task} onUpdateTask={onUpdateTask}/>
      <Complete/>
      <Delete tasks={task} deleteTask={deleteTask}/>
    </div>
    );
};

export default TaskCard;
