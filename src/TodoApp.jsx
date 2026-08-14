import { useState } from "react";
import './TodoApp.css'


export default function Todoapp() {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')

function handleInputChange (event){
setInputValue(event.target.value)
}

function addTask () {
    //create a new task object
    const newTask = {
    id: crypto.randomUUID(),
    text: inputValue,
    done: false 
}
//Add it to the task array
    setTasks([...tasks, newTask])

    //Clear input
    setInputValue('')
}

function toggleTask(taskId){
          setTasks(
            tasks.map(task => {
                if (task.id === taskId) {
                    return {...task, done: !task.done }
                } else {
                    return task
            
                }
                
            })
          )    
            }


       function deleteTask(taskId) {
        setTasks(
            tasks.filter(task => task.id !== taskId)
        )
       }     

    return (
    <div>
     <h1>To-do List App</h1>

     <div className="taskform">
     <input type="text" placeholder="Type a task..." value={inputValue} onChange={handleInputChange}></input>
     <button onClick={addTask}>Add Task</button>
       </div>

     <ul>
        {tasks.map((task) => {
            
            return (
                <li key={task.id}>
                <button onClick={() => deleteTask(task.id)}> Delete </button>  
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                <span className={task.done ? 'completed' : ''}>{task.text}</span>
                </li>
            )
        })}
     </ul>
    </div>
   )
}
