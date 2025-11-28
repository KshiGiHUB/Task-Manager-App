import React ,{createContext, useCallback, useContext, useMemo}from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

export const TaskProvider = ({children}) => {
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

    const deleteTask = useCallback((id)=>{
        setTasks((prev)=> prev.filter((t)=> t.id === id));
    },[setTasks])

    const value = useMemo(()=>
        ({tasks, addTask, toggleTask, deleteTask}),
        [tasks, addTask, toggleTask, deleteTask]
    )

    return <TextContext.Provider value = {value}>{children}</TextContext.Provider>

}

export const useTasks = () => useContext(TaskContext) 
