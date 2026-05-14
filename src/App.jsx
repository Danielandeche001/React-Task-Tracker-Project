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
