import React, { useMemo, useState } from 'react'
import { useTasks } from '../context/TaskContext'
import TaskItems from './TaskItems';
import {
    DragDropContext,
    Droppable,
    Draggable,
} from "react-beautiful-dnd";

const TaskList = () => {
    const [filter, setFilter] = useState("all")
    const { tasks, reorderTasks } = useTasks();
    const filterData = useMemo(() => {
        if (filter === "completed") return tasks.filter((t) => t.completed)
        if (filter === "pending") return tasks.filter((t) => !t.completed)
        return tasks;
    }, [filter, tasks])

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        reorderTasks(result.source.index, result.destination.index);
    };

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

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="tasklist">
                    {(provided) => (
                        <div className="space-y-3"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {filterData.length === 0 ? (
                                <p className="text-center opacity-70">No tasks available.</p>
                            ) : (
                                filterData.map((task, index) => (
                                    <Draggable
                                        key={task.id.toString()}
                                        draggableId={task.id.toString()}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`draggable-item ${snapshot.isDragging ? "dragging" : ""
                                                    }`}
                                            >
                                                <TaskItems task={task} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            )}

                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default TaskList