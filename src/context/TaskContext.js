import React ,{createContext, useCallback}from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const TextContext = createContext();

export const TaskProvider = () => {
    const [tasks, setTasks] = useLocalStorage("tasks",[]);

    const addTask = useCallback((text)=>{
        setTasks((prev)=>[...prev, {id: Date.now(), text, completed: false}])
    })
    
    const toggleTask = useCallback((id)=>{
        setTasks((prev)=>
            prev.map((task)=>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        )
    },[setTasks])

  return (
    <div>TaskContext</div>
  )
}
