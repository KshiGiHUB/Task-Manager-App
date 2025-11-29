import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext';

const TaskInput = () => {
    const { addTask } = useTasks()
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) {
            return alert("Task cannot be empty")
        }
        addTask(text)
        setText("")
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="flex gap-3 items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <input
                    type="text"
                    value={text}
                    placeholder='enter text'
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 outline-none" />
                <button className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">Add</button>
            </form>
        </>
    )
}

export default TaskInput