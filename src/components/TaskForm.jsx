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
        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter task description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
