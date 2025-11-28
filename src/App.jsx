import { useState } from 'react'
import './App.css'
import { TaskProvider } from './context/TaskContext'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [theme, setTheme] = useState(false)

  return (
    <>
      <TaskProvider>
        <div className='main'>
          <div className={theme ? "darkMode": "lightMode"}>
          <button onClick={()=> setTheme(!theme)}>
            {theme ? "Dark Mode" : "Light Mode"}
          </button>
          <h1>Task Manager</h1>
          <TaskInput/>
          <TaskList/>
        </div>
        </div>
      </TaskProvider>
    </>
  )
}

export default App
