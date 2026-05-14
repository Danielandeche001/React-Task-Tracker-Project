import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch(
          "http://localhost:3000/tasks"
        );

        if (!response.ok) {
          throw new Error(
            `HTTP Error: ${response.status}`
          );
        }

        const data = await response.json();

        console.log("Fetched Tasks:", data);

        setTasks(data);
        setError("");
      } catch (error) {
        console.error(
          "Fetch Error:",
          error
        );

        setError(
          "Could not load tasks. Make sure JSON Server is running."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchTasks();
  }, []);
  
  // DELETE TASK
  function deleteTask(id) {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  }

  // UPDATE TASK
  function onUpdateTask(updatedTask) {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id
        ? updatedTask
        : task
    );

    setTasks(updatedTasks);
  }

  return (
    <main className="app">
      <section className="app-header">
        <h1>Group 5 Task Tracker</h1>
        <p>Track the tasks for our React group project.</p>

        <p>Tasks Loaded: {tasks.length}</p>
      </section>

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
