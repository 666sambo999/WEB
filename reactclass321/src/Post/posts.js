import Post from "./post";


function Posts(props)
{
    return(
        <div>
            {
                props.posts.map(post => (
                <Post 
                    key={post.id}
                    name={post.name}
                    title={post.title}
                    id = {post.id}
                    removePost={props.removePost}
                    />
                ))
            }
        </div>
    )
}
export default Posts;