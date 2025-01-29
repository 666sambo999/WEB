import React from "react";

class Test extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {callsCount: props.arg}
        this.buttonHandler = this.buttonHandler.bind(this);
        console.clear();
        console.log("Constructor");
    }
    // ReactLifeCycle:
    // https://stackoverflow.com/questions/62185425/why-is-console-log-logging-twice-in-react-js
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    // https://react.dev/learn/react-developer-tools
    componentDipMount()
    {
        console.log("componentDipMount");
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate")
    }
    buttonHandler()
    {
        console.log("Fire");
        this.setState({callsCount: this.state.callsCount+1});
    }
    static getStateFromPrips(props, state)
    {
        console.log("getState");
        return null;
        // return(
        //     {callsCount: props.arg}
        // );
    }
    render()
    {
        console.log("render 1");
        return(
            <>
                {
                    console.log("render 2")
                }
                <div>
                    <button onClick={this.buttonHandler}>Start</button>
                </div>
                <div>
                    {
                        this.state.callsCount
                    }
                </div>
            </>
        )
    }
}

export default Test; 