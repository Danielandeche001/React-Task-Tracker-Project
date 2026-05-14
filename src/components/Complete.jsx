function Complete ({ task, onToggleComplete }) {
   return (
      <div>
         <h4>{task.completed ? "(Completed)" : ""}</h4>

         <button onClick={() => onToggleComplete(task)}
         >
            {task.completed ? "Completed" : "Pending"}
         </button>
      </div>
   );
};

export default Complete;
