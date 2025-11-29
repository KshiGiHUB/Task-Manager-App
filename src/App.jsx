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
          <div className={`min-h-screen p-6 transition-all duration-300 ${theme ? "bg-slate-400 text-gray" : "bg-gray-100 text-gray-900"
            }`}>
            <div className="mx-auto space-y-6">
              <div className="relative flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
                <h1 className="text-3xl font-bold mb-3 text-center sm:mb-0">Task Manager</h1>
                <button onClick={() => setTheme(!theme)}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 sm:absolute sm:right-0 ">
                  {theme ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
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
