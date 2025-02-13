import './Movie.css';

function Movie(props)
{
    return(
        <div className='card'>
            <img src = {props.Poster} alt='imdbID'/>
            <div>
                <h3>{props.Title}</h3>
                <h4>{props.Year}</h4>
                <h4>{props.Type}</h4>
            </div>
        </div>
    )
}

export default Movie;