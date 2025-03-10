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
        totalItem:0,
        itemPrevPage:10,
        lastSearch: "terminator",
        currentPage:1,
        filter: "all"
    }
    componentDidMount()
    {
        fetch(`http://www.omdbapi.com/?apikey=393407e7&s=terminator`)
        .then(response => response.json())
        .then(data =>this.setState({movies:data.Search, loading: false, totalItem:data.totalResults}))
        console.log(this.state.movies);
    }

    searchMovie = (str, type='all', page)=>
    {
        this.setState({loadind: true})
        fetch(`http://www.omdbapi.com/?apikey=393407e7&s=${str}${type !=='all'? `&type=${type}` : ''}${`&page=${page}`}`)
        //fetch(str.length !==0 ? `http://www.omdbapi.com/?apikey=393407e7&s=${str}${type !=='all'? `&type=${type}` : ''}` : `http://www.omdbapi.com/?apikey=393407e7&s`)
        .then(response =>response.json())
        .then(data => this.setState({movies:data.Search, loading: false, total:data.totalResults, filter:type, lastSearch: str, currentPage: page}))
    }

    render()
    {
        const {movies} = this.state
        console.log(movies);
        
        if(!this.state.loading)
        {
            return(
                <div className="main">
                    <div className="wrap"></div>
                    <Search searchMovie={this.searchMovie} totalItem={this.state.totalItem} lastSearch={this.state.lastSearch} currentPage={this.state.currentPage} itemPrevPage={this.state.itemPrevPage}/>
                    {
                        //<MovieList movies ={movies}/>
                        //!this.state.loading ? <MovieList movies ={movies}/> : <Preloader></Preloader>
                        <MovieList movies = {movies}></MovieList>
                    }
                </div>
            )
        }
        else{
            <Preloader></Preloader>
        }
    }
    
}
export default Main;


