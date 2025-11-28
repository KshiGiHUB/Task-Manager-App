import { useTasks } from "../context/TaskContext"
const TaskItems = ({task}) => {
    const {toggleTask} = useTasks();
    
  return (
    <div>
        <input
        type="checkbox"
        checked={task.completed}
        onChange={()=> toggleTask(task.id)}/>
        <span>{task.text}</span>
    </div>
  )
}

export default TaskItems