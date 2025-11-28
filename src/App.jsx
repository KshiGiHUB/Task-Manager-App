import { useState } from 'react'
import './App.css'
import { TaskProvider } from './context/TaskContext'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskProvider>
        <div>
          <h1>Task Manager</h1>
          <TaskInput/>
          <TaskList/>
        </div>
      </TaskProvider>
    </>
  )
}

export default App
