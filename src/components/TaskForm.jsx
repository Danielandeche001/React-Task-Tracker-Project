import { useState } from 'react';
import { createTask } from "../services/tasks";

//use state to manage form inputs and handle form submission to add new tasks to the task list.
function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      title,
      priority,
      completed: false,
      description
    };

    try {
      const data = await createTask(newTask);

      onTaskAdded(data); // Updates the global state in App.jsx
      setTitle('');      // Resets form
      setPriority('Low'); // Resets priority
      setDescription(''); // Resets description
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
      <br></br>
      <textarea
        placeholder="Enter task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
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
