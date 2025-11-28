import { useTasks } from "../context/TaskContext"
const TaskItems = ({task}) => {
    const {toggleTask, deleteTask} = useTasks();
    
  return (
    <div>
        <input
        type="checkbox"
        checked={task.completed}
        onChange={()=> toggleTask(task.id)}/>
        <span>{task.text}</span>
        <button onClick={()=> deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskItems