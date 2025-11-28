import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext';

const TaskInput = () => {
    const {addTask} = useTasks()
    const [text, setText] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!text.trim()){
            return alert("Task cannot be empty")
        }
        addTask(text)
        setText("")
    }
  return (
    <>
        <form onSubmit={handleSubmit} className='task-input'>
            <input 
            type="text"
            value={text}
            placeholder='enter text'
            onChange={(e)=> setText(e.target.value)}/>
            <button>Add</button>
        </form>
    </>
  )
}

export default TaskInput