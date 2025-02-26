import React from "react";
import "./Search.css";



class Search extends React.Component {
    // constructor(props)
    // {
    //     super(props);
    //     //this.setState({totalPages:props.total/10})   
    //     this.state.totalPages = props.total/10;
    // }
    
    state = {
        search: "Terminator",
        type: "all",
        page: 1,
        totalPages:0
    }

    handleKey = (event) => 
    {
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
            () =>({page: this.state.page<Math.ceil(this.props.totalMovies/10) ? this.state.page+1 : this.state.page}),
            () => (this.props.searchMovie(this.state.search,this.state.type, this.state.page))
        )
    }

    firstPage=()=>
    {
        this.setState(
            ()=> ({page:1}),
            ()=>(this.props.searchMovie(this.state.search, this.state.type,this.state.page))
        )
    }
    lastPage=()=>
        {
            this.setState(
                //()=> ({page:this.state.totalPages}),
                ()=> ({page:Math.ceil(this.props.totalMovies/10)}),
                ()=>(this.props.searchMovie(this.state.search, this.state.type,this.state.page))
                //()=> ({totalPages: this.props.totalMovies/10-1})
            )
        }

    setPage = (pageNumber) =>
    {
        this.setState
        (
            () => ({page:pageNumber}),
            () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
        )
    }

    render() {
        console.log("Search render");
        let moviesPrevPage = 10;
        let totalPages = Math.ceil(this.props.totalMovies/moviesPrevPage);
        //this.setState({totalPages:totalPages});
        let  lastIndex= totalPages <=10 ? totalPages +1 : this.state.page + moviesPrevPage;
        let firstIndex = totalPages <=10 ? lastIndex - moviesPrevPage + lastIndex +1 : lastIndex - moviesPrevPage;
        let pagesNumbers = [];

        for (let i =0; i < totalPages; i++)
            pagesNumbers.push(i);
        
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
                        <input type="radio" name="type" data-type="series" checked={this.state.type ==='series'} onChange={this.handlerFilter} id="tele"/><label htmlFor="tele"><span>Television</span></label>
                    </div>
                    <div>
                        <input type="radio" name="type" data-type="game" checked={this.state.type ==='game'} onChange={this.handlerFilter} id="game"/><label htmlFor="game"><span>Games</span></label>
                    </div>
                
                </div>
                
                <div className="navigator">
                    <button className="btr" onClick={this.prevPage}>Previon </button>
                    <button className="btr" onClick={this.firstPage}>First</button>
                    <div className="item">
                        {
                            pagesNumbers
                            .slice(firstIndex, lastIndex)
                            .map(
                                (el, index) => 
                                {
                                    return <button 
                                        className="btn_num" 
                                        style={{background: this.state.page !== el ? "grey" : ""}} 
                                        key={index} 
                                        onClick={()=> (this.setPage(el))}>
                                    {el}
                                    </button>
                                }
                            )
                        }
                    </div>
                    <button className="btr" onClick={this.nextPage}>Next</button>
                    <button className="btr" onClick={this.lastPage}>Last</button>
                </div>
                
                
            </>
        )
    }
}

export default Search;