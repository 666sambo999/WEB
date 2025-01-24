import React from "react";

class Hello extends React.Component
{
    constructor(props)
    {
        super(props); //super - базовый класс, вызывается конструктор 
        this.state = {name: props.name}
        //this - объект для которого вызывается метод в данном случае  конструктор(); 
        this.state = {status: false}
    }
    buttonHendler = () => 
        this.setState(state => ({status: !state.status}))
   
    render()
    {
        return(
            <div>
                <div>Привет {this.props.name} is Props</div>
                <div>Hello {this.state.name} is State</div>
                <button onClick={this.buttonHendler}>{this.state.status ? "Stop" : "Start"}</button>
                <div>{this.state.status ? "Запущен": "Остановлен"}</div>
            
                <hr></hr>
            </div>
        );
    }
}
export default Hello;