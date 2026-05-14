import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, updateTask } from "./services/tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await getTasks();

        setTasks(data);
        setError("");
      } catch (error) {
        console.error("Fetch Error:", error);

        setError(
          "Could not load tasks. Check your Firebase setup."
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
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  }

  async function toggleTaskComplete(task) {
    try {
      const updatedTask = await updateTask(task.id, {
        completed: !task.completed,
      });

      onUpdateTask(updatedTask);
    } catch (error) {
      console.error("Complete Error:", error);
      setError("Could not update this task.");
    }
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
          onToggleComplete={toggleTaskComplete}
        />
      )}
    </main>
  );
}

export default App;
