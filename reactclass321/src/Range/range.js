import React from "react";


class Range extends React.Component
{
    state = {number:0};

    range =(event) => this.setState({number: event.target.value});
    render()
    {
        return(
            <>
                <input type="range" min="0" max="100" onChange={this.range} value={this.state.number}/>
                <p> {this.state.number}</p>
            </>
        );
    }
}
export default Range;