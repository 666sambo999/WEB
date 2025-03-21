import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';

function AboutInfo()
{
    let {id} = useParams();
    let [post, setPost] = useState([null]);

    useEffect (
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response =>response.json())
            .then(data=> setPost(data))
        }, [id]
    );
    return(
        <div className="content">
            {
                post && (
                        <h1>{post.title}</h1>,
                        <p>{post.body}</p>
                )
            } 
        </div>
    )
}
export default AboutInfo;