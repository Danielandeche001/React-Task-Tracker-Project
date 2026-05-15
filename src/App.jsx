import { useEffect, useState } from "react";
import FilterButtons from "./components/FilterButtons";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, updateTask } from "./services/tasks";
import "./App.css";

const priorityOrder = {
  Low: 1,
  Medium: 2,
  High: 3,
};

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;
  const displayedTasks = tasks
    .filter((task) => {
      const title = task.title || "";
      const description = task.description || "";
      const searchText = `${title} ${description}`.toLowerCase();
      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesFilter = filter === "All" || task.priority === filter;

      return matchesSearch && matchesFilter;
    })
    .slice()
    .sort(
      (firstTask, secondTask) =>
        priorityOrder[firstTask.priority] - priorityOrder[secondTask.priority]
    );

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
    <>
      <Navbar />

      <main className="app" id="top">
        <section className="app-header">
          <p className="eyebrow">React + Firebase project</p>
          <h1>Group 5 Task Tracker</h1>
          <p className="header-copy">
            Add, organize, update, complete, and delete group project tasks.
          </p>

          <div className="stats-row">
            <div>
              <strong>{tasks.length}</strong>
              <span>Total tasks</span>
            </div>
            <div>
              <strong>{pendingTasks}</strong>
              <span>Pending</span>
            </div>
            <div>
              <strong>{completedTasks}</strong>
              <span>Completed</span>
            </div>
          </div>
        </section>

        <section className="panel-section" id="add-task">
          <div className="section-heading">
            <p className="eyebrow">Create</p>
            <h2>Add a New Task</h2>
          </div>
          <TaskForm onTaskAdded={addTask} />
        </section>

        {isLoading && <p className="status-message">Loading tasks...</p>}

        {error && <p className="status-message error-message">{error}</p>}

        {!isLoading && !error && (
          <>
            <section className="task-controls">
              <SearchBar search={search} setSearch={setSearch} />
              <FilterButtons filter={filter} setFilter={setFilter} />
            </section>

            <TaskList
              tasks={displayedTasks}
              deleteTask={deleteTask}
              onUpdateTask={onUpdateTask}
              onToggleComplete={toggleTaskComplete}
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
