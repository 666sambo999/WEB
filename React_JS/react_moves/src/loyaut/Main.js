import React from "react";
import './Main.css';
import MovieList from "../component/MovieList";
import Preloader from "../component/Preloader";
import Search from "../component/Search";


class Main extends React.Component
{
    state ={
        movies:[],
        loading: true,
        total:0
    }
    componentDidMount()
    {
        fetch(`http://www.omdbapi.com/?apikey=393407e7&s=terminator`)
        .then(response => response.json())
        .then(data =>this.setState({movies:data.Search, loading: false, total:data.totalResults}))
        console.log(this.state.movies);
    }

    searchMovie = (str, type='all', page)=>
    {
        this.setState({loadind: true})
        fetch(`http://www.omdbapi.com/?apikey=393407e7&s=${str}${type !=='all'? `&type=${type}` : ''}${`&page=${page}`}`)
        //fetch(str.length !==0 ? `http://www.omdbapi.com/?apikey=393407e7&s=${str}${type !=='all'? `&type=${type}` : ''}` : `http://www.omdbapi.com/?apikey=393407e7&s`)
        .then(response =>response.json())
        .then(data => this.setState({movies:data.Search, loading: false, total:data.totalResults}))
    }

    render()
    {
        const {movies} = this.state
        console.log(movies);
        return(
            <div className="main">
                <div className="wrap"></div>
                <Search searchMovie={this.searchMovie} totalMovies={this.state.total}/>
                {
                    //<MovieList movies ={movies}/>
                    !this.state.loading ? <MovieList movies ={movies}/> : <Preloader></Preloader>
                }
            </div>
        )
    }
    
}
export default Main;


