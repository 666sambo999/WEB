function Article(props)
{
    return(
        <div style={{margin:"20px", padding: "10px", boxShadow: " 0 0 12px 2px #999"}}>
            <h3>{props.name}</h3>
            <p>{props.title}</p>
        </div>
    )
}
export default Article;