import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
          <h1>Get started with Task Tracker</h1>
          <br></br>
          <br></br>
          <p>
            Keep track of your tasks and stay organized with our Task Tracker app. 
            Add new tasks, set priorities, and manage your to-do list efficiently.
          </p>
          <br></br>
          <TaskForm onTaskAdded={(newTask) => console.log('New task added:', newTask)} />
        </div>
  );
}

export default App
