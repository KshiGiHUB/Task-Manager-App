import { useTasks } from "../context/TaskContext"
const TaskItems = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`flex items-center justify-between p-3 rounded-lg shadow bg-white dark:bg-gray-800 transition ${task.completed ? "opacity-60 line-through" : ""
      }`}>
      <div className="flex items-center gap-3">
        <input
          className="w-5 h-5 cursor-pointer"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className="text-lg">{task.text}</span>
      </div>

      <button onClick={() => deleteTask(task.id)}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
    </div>
  )
}

export default TaskItems