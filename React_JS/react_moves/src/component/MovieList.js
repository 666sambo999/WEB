import Movie from "./Movie";
import './MovieList.css';

function MovieList(props)
{
    return(
        <div className="movies">
            {
                !props.movies ? <h3>Not found</h3>:
                props.movies.map(m=> {return <Movie key={m.imdbID} {...m}/>})
            }
        </div>
    )
}

export default MovieList;