function Task(props)
{
    return(
        <div className="task">
            <div style={{textDecoration: props.task.done ? "line-through": ""}}>
                {props.task.text}
            </div>
            <div>
                <button onClick={() => props.doneTask(props.index)}> Done </button>
                <button onClick={() => props.delTask(props.index)}>X</button>
            </div>

        </div>
    )
}

export default Task;