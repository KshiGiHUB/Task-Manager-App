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
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                    type="text"
                    value={text}
                    placeholder='enter text'
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 outline-none text-sm" />
                <button className="w-full sm:w-auto px-6 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 text-sm font-medium">Add</button>
            </form>
        </>
    )
}

export default TaskInput