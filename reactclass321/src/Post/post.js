function Post(props)
{
    return(
        <div>
            <fieldset>
                <legend style={{fontWeight: "bold"}}>{props.name}</legend>
                <p>{props.title}</p>
                <button onClick={()=>props.removePost(props.id)}>Delete</button>
            </fieldset>
        </div>
    )
}
export default Post;