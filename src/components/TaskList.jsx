import React, { useMemo, useState } from 'react'
import { useTasks } from '../context/TaskContext'
import TaskItems from './TaskItems';

const TaskList = () => {
    const [filter, setFilter] = useState("all")
        const {tasks} = useTasks();
        const filterData = useMemo(()=>{
            if(filter === "completed") return tasks.filter((t)=> t.completed)
            if(filter === "pending") return tasks.filter((t)=> !t.completed)
            return tasks;
        },[filter, tasks])

  return (
    <>
        <div className='filters'>
        <button onClick={()=> setFilter("all")}>All</button>
        <button onClick={()=> setFilter("completed")}>Completed</button>
        <button onClick={()=> setFilter("pending")}>Pending</button>
        </div>
        <div>
            {filterData.map((task)=>(
                <TaskItems key={task.id} task={task}/>
            ))}
        </div>
    </>
  )
}

export default TaskList