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
          <div className={`min-h-screen p-6 transition-all duration-300 ${theme ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}>
            <div className="mx-auto space-y-6">
              <button onClick={() => setTheme(!theme)}
                className="px-4 py-2 mb-4 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                {theme ? "Dark Mode" : "Light Mode"}
              </button>
              <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
              <TaskInput />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskProvider>
    </>
  )
}

export default App
