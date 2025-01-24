import React from "react";

class Lengh extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {length:20}
        this.add = this.add.bind(this);
        this.reset = this.reset.bind(this);
    }
    //add = () => this.setState({length:this.state.length+5})
    add()
    {
        this.setState({length:this.state.length+5})
    }
    reset()
    {
        this.setState({length:20});
    }

    render()
    {
        return(
            <>
                <div>
                    <input size={this.state.length}></input>
                </div>
                <div>
                    <button onClick={this.add}>Увеличить</button> 
                    <button onClick={this.reset}>Сбросить</button>
                </div>
                
            </>    
        );
    }
}
export default Lengh;