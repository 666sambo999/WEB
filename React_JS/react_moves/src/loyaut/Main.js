import React from "react";
import './Main.css';
import MovieList from "../component/MovieList";
import Preloader from "../component/Preloader";
import Search from "../component/Search";


class Main extends React.Component
{
    state ={
        movies:[]
    }
    componentDidMount()
    {
        fetch(`http://www.omdbapi.com/?apikey=393407e7&s=terminator`)
        .then(response => response.json())
        .then(data =>this.setState({movies:data.Search}))
        console.log(this.state.movies);
    }

    searchMovie = (str)=>
    {
        this.setState({loadind: true})
        fetch(`http://www.omdbapi.com/?apikey=393407e7&s=${str}`)
        .then(response =>response.json())
        .then(data => this.setState({movies:data.Search}))
    }

    render()
    {
        const {movies} = this.state
        console.log(movies);
        return(
            <div className="main">
                <div className="wrap"></div>
                <Search searchMovie={this.searchMovie}/>
                {
                    //<MovieList movies ={movies}/>
                    this.state.movies.length ? <MovieList movies ={movies}/> : <Preloader></Preloader>
                }
            </div>
        )
    }
    
}
export default Main;


