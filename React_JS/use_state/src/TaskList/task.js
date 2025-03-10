function Task(props)
{
    return(
        <div className="task">
            {props.task.text}
            <button> Done </button>
        </div>
    )
}

export default Task;