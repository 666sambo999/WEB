import React from "react";
import "./Search.css";



class Search extends React.Component {
    constructor(props)
    {
        super(props);
        //this.setState({totalPages:props.total/10})   
        this.state.totalPages = props.total/10;
    }
    
    state = {
        search: "Terminator",
        type: "all",
        page:1,
        totalPages:1
    }

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }

    handlerFilter =(event) =>
    {
        this.setState(
            () => ({type: event.target.dataset.type}),
            () => (this.props.searchMovie(this.state.search, this.state.type))
        );
    }
    prevPage =()=>
    {
        this.setState(
            () => (this.state.page > this.state.totalPages ? {page:this.state.page-1}: {page:this.state.totalPages}),
            () => (this.props.searchMovie(this.state.search,this.state.type, this.state.page))
        )
    }

    nextPage =()=>
    {
        this.setState(
            () =>(this.state.page < 5 ? {page:this.state.page+1}:{page:50}),
            () => (this.props.searchMovie(this.state.search,this.state.type, this.state.page))
        )
    }

    render() {
        console.log("Search render");
        return (
            <>
                <div className="search">
                    <input
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn" onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
                        search
                    </button>
                </div>
                <div className="radio">
                    <div>
                        <input type="radio" name="type" data-type="all" checked={this.state.type ==='all'} onChange={this.handlerFilter} id="all"/><label htmlFor="all"><span>All</span></label>
                    </div>
                    <div>
                        <input type="radio" name="type" data-type="movie" checked={this.state.type ==='movie'} onChange={this.handlerFilter} id="movie"/><label htmlFor="movie"><span>Movie</span></label> 
                    </div>
                    <div>
                        <input type="radio" name="type" data-type="tele" checked={this.state.type ==='tele'} onChange={this.handlerFilter} id="tele"/><label htmlFor="tele"><span>Television</span></label>
                    </div>
                    <div>
                        <input type="radio" name="type" data-type="game" checked={this.state.type ==='game'} onChange={this.handlerFilter} id="game"/><label htmlFor="game"><span>Games</span></label>
                    </div>
                
                </div>
                
                <div className="navigator">
                    <button className="btr" onClick={this.prevPage}>Previon </button>
                    <button className="btr" onClick={this.nextPage}>Next</button>
                </div>
            </>
        )
    }
}

export default Search;