import { useState } from 'react';

//use state to manage form inputs and handle form submission to add new tasks to the task list.
function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      priority: priority,
      completed: false,
      description: description // Placeholder description
    };
    // POST request implementation 
    
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
    .then((res) => res.json())
    .then((data) => {
      onTaskAdded(data); // Updates the global state in App.jsx
      setTitle('');      // Resets form
      setPriority('Low'); // Resets priority
      setDescription(''); // Resets description
    });
  };

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
