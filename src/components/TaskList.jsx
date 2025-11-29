import React, { useMemo, useState } from 'react'
import { useTasks } from '../context/TaskContext'
import TaskItems from './TaskItems';

const TaskList = () => {
    const [filter, setFilter] = useState("all")
    const { tasks } = useTasks();
    const filterData = useMemo(() => {
        if (filter === "completed") return tasks.filter((t) => t.completed)
        if (filter === "pending") return tasks.filter((t) => !t.completed)
        return tasks;
    }, [filter, tasks])

    return (
        <>
            <div className="flex justify-center gap-3 mb-4">
                <button
                    className="px-4 py-1 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400"
                    onClick={() => setFilter("all")}>
                    All
                </button>
                <button
                    className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={() => setFilter("completed")}>
                    Completed
                </button>
                <button
                    className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={() => setFilter("pending")}>
                    Pending
                </button>
            </div>
            <div className="space-y-3">
                {filterData.length === 0 ? (
                    <p className="text-center opacity-70">No tasks available.</p>
                ) : (
                    filterData.map((task) => <TaskItems key={task.id} task={task} />)
                )}
            </div>
        </>
    )
}

export default TaskList