import { useState } from "react";
import './taskList.css';
import Task from "./task";
import Form from "./form";

function TaskList()
{
    let[tasks, setTask] = useState
    (
        [
            {
                text: "Сходить в магазин",
                done: false
            },
            {
                text: "купить авто",
                done: false
            },
            {
                text: "сделать домашку",
                done: false
            },
            {
                text: "посмотреть фильм",
                done: false
            }
        ]
    )
    let addTask= text=>
    {
        let newTask = [...tasks, {text}];
        setTask(newTask)
    }
    let doneTask = (index) =>
    {
        let newTask = [...tasks];
        newTask[index].done=!newTask[index].done;
        setTask(newTask);
    }
    let delTask=(index) =>
    {
        let newTask =[...tasks];
        newTask.splice(index,1);
        setTask(newTask);
    }

    return(
        <div className="tasks">
            {
                tasks.map(
                    (task, index) =>(
                        <Task key={index} task={task} index={index} doneTask={doneTask} delTask={delTask}/>
                    )
                )
            }
            <Form addTask={addTask}/>
        </div>
    )
}
export default TaskList;
