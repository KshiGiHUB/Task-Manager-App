import React from 'react'

const TaskInput = () => {
    const [text, setText] = useState("");
    const handleSubmit = ()=>{
        e.prevent.default()
        if(!text.trim()){
            return alert("Task cannot be empty")
        }
        setTask("")
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