import React from "react";
import "./Search.css";



class Search extends React.Component {
    constructor(props)
    {
        super(props);
        // let itemPrevPage = 10;
        // this.setState({totalPages:this.props.totalItem});
        // this.setState({totalPages:Math.ceil(this.props.totalItem/itemPrevPage)});
        // this.setState({lastIndex: this.state.totalPages <=10 ? this.state.totalPages +1 : this.state.page + itemPrevPage});
        // this.setState({firstIndex: this.state.totalPages <=10 ? this.state.lastIndex - itemPrevPage + this.state.lastIndex +1 : this.state.lastIndex - itemPrevPage});
        this.state = {
            totalItem: this.props.totalItem,
            totalPages:Math.ceil(this.props.totalItem/this.state.itemPrevPage),
            lastIndex: this.props.currentPage + 3 > Math.ceil(this.props.totalItem/this.state.itemPrevPage) ? this.props.totalPages : this.props.currentPage +4,
            //lastIndex: this.props.totalPages <=10 ? this.props.totalPages + 1 : this.props.currentPage + this.state.itemPrevPage,
            firstIndex: this.props.currentPage -3>1 ? this.props.currentPage-3 : 1
            //firstIndex: this.props.totalPages <=10 ? this.state.lastIndex - this.state.itemPrevPage + this.state.lastIndex + 1 : this.state.lastIndex - this.state.itemPrevPage
        }
            
    }
    
    state = {
        search: "Terminator",
        type: "all",
        page: 1,
        itemPrevPage:10,
        totalPages:0, //this.props.totalMovies,
        totalItem: 0, //Math.ceil(this.state.totalItem/this.state.itemPrevPage),
        lastIndex: 0, //this.state.totalPages <=10 ? this.state.totalPages +1 : this.state.page + this.state.itemPrevPage,
        firstIndex: 0, //this.state.totalPages <=10 ? this.state.lastIndex - this.state.itemPrevPage + this.state.lastIndex + 1 : this.state.lastIndex - this.state.itemPrevPage
        
    }
    componentDidMount()
    {
        console.log("============ componentDidMount++++++++++");
        this.printState();
    }
    componentDidUpdate()
    {
        console.log("==================  Update  ==========");
        this.printState();
    }    
    // updateState()
    // {
    //     this.setState({totalItem:this.props.totalMovies})
    //     this.setState({totalPages: Math.ceil(this.state.totalItem/this.state.itemPrevPage)})
    //     this.setState({lastIndex:this.state.totalPages <=10 ? this.state.totalPages +1 : this.state.page + this.state.itemPrevPage})
    //     this.setState({firstPage:this.state.totalPages <=10 ? this.state.lastIndex - this.state.itemPrevPage + this.state.lastIndex + 1 : this.state.lastIndex - this.state.itemPrevPage})
    // }
    printState()
    {
        console.log(this.state.search);
        console.log(this.state.type);
        console.log(this.state.page);
        console.log(this.state.totalItem);
        console.log(this.state.totalPages);
        console.log(this.state.lastIndex);
        console.log(this.state.firstIndex);
        console.log("====================================");
    }

    handleKey = (event) => 
    {
        if (event.key === "Enter") {
            this.props.searchMovie(this.state.search, this.state.type);
        };
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
        );
    }

    nextPage =()=>
    {
        this.setState(
            () =>({page: this.state.page<Math.ceil(this.props.totalItem/10) ? this.state.page+1 : this.state.page}),
            () => (this.props.searchMovie(this.state.search,this.state.type, this.state.page))
        );
    }

    firstPage=()=>
    {
        this.setState(
            ()=> ({page:1}),
            ()=>(this.props.searchMovie(this.state.search, this.state.type,this.state.page))
        );
    }
    lastPage=()=>
        {
            this.setState(
                //()=> ({page:this.state.totalPages}),
                ()=> ({page:Math.ceil(this.props.totalItem/10)}),
                ()=>(this.props.searchMovie(this.state.search, this.state.type,this.state.page))
                //()=> ({totalPages: this.props.totalMovies/10-1})
            );
        }

    setPage = (pageNumber) =>
    {
        this.setState
        (
            () => ({page:pageNumber}),
            () => {this.props.searchMovie(this.state.search, this.state.type, this.state.page)}
        );
    }

    render() {
        console.log("Search ===================== render")
        //this.updateState();
        //console.log("========== render ===============")
        //this.printState();

        // let moviesPrevPage = 10;
        // let totalPages = Math.ceil(this.props.totalMovies/moviesPrevPage);
        // //this.setState({totalPages:totalPages});
        // let  lastIndex= totalPages <=10 ? totalPages +1 : this.state.page + moviesPrevPage;
        // let firstIndex = totalPages <=10 ? lastIndex - moviesPrevPage + lastIndex +1 : lastIndex - moviesPrevPage;
        let pagesNumbers = [];

        for (let i =0; i < this.state.totalPages; i++)
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
                            .slice(this.state.firstIndex, this.state.lastIndex)
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
        );
    }
}

export default Search;