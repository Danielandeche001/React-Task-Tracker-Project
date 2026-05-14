import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  return (
        <div>
          <h1>Welcome to Task Tracker</h1>
          <br></br>
          <br></br>
          <p>
            Keep track of your tasks and stay organized with our Task Tracker app. 
            </p>
            <p>
            Add new tasks, set priorities, and manage your to-do list efficiently.
          </p>
          <br></br>
          <TaskForm onTaskAdded={(newTask) => console.log('New task added:', newTask)} />
        </div>
  );
}

export default App
