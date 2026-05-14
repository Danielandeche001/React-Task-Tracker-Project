import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const API_URL = "http://localhost:3000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        setTasks(data);
        setError("");
      } catch (error) {
        console.error("Fetch Error:", error);

        setError(
          "Could not load tasks. Make sure JSON Server is running."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchTasks();
  }, []);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function onUpdateTask(updatedTask) {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  return (
    <main className="app">
      <section className="app-header">
        <h1>Group 5 Task Tracker</h1>
        <p>Track the tasks for our React group project.</p>

        <p>Tasks Loaded: {tasks.length}</p>
      </section>

      <TaskForm onTaskAdded={addTask} />

      {isLoading && <p>Loading tasks...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          onUpdateTask={onUpdateTask}
        />
      )}
    </main>
  );
}

export default App;
