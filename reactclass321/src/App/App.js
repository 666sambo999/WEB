//import logo from './logo.svg';
import './App.css';
//import Hello from '../hello/Hello';
//import Lengh from '../Lengh/lengh';
//import Form from '../Form/form';
//import Range from '../Range/range';
import React from 'react';
//import Test from '../test/Test';
//import Posts from '../Post/posts';
import User from '../user/User';

class App extends React.Component
{
    state =
    {
    posts:
    [
      {id:"1", name:"C++ Basics", title:"Процедурное програмирование С++"},
      {id:"2", name:"C++ OOP", title:"Объектно-ориентированное програмирование С++"},
      {id:"3", name:"Windows", title:"Разработка приложений на языке С++"}
    ],
    show: false 
    }
    buttonUserVis = () => this.setState({show:!this.state.show})
    //removePost =(id)=> this.setState({posts:this.state.posts.filter(post=>post.id !=id)});
    render()
    {
      return(
        <>
          {/* <Posts posts = {this.state.posts} removePost={this.removePost}></Posts> */}
          {/* <User></User> */}
          {/* <Test arg={30}></Test> */}
          <button onClick={this.buttonUserVis}>{this.state.show?"Hide":"Show"} User</button>
          <br/>
          {this.state.show ? <User /> : "неероятно секретная инфа"}
        </>
      )
    }
}

// function App() 
// {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//         {/* <Hello name="Alfred"/>
//         <Lengh></Lengh>
//         <Form></Form>
//         <Range>         
//         </Range> */}

//       </header>

//     </div>
    
//   );
// }

export default App;
