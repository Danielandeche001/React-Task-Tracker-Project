import { useState } from "react";
import { createTask } from "../services/tasks";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      title,
      priority,
      completed: false,
      description,
    };

    try {
      const data = await createTask(newTask);

      onTaskAdded(data);
      setTitle("");
      setPriority("Low");
      setDescription("");
    } catch (error) {
      console.error("Create Error:", error);
      alert("Could not add the task. Check your Firebase setup.");
    }
  }

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <label>
          <span>Task title</span>
          <input
            type="text"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Description</span>
          <textarea
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          <span>Priority</span>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
