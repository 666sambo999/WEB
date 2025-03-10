//import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter.js';
import Persone from './Person.js';
import Modal from './Modal.js';
import Item from './item.js';
import TaskList from './TaskList/taskList.js';


function App() {
  return (
    <div className="App">
      <Counter/>
      <hr></hr>
      <Persone/>
      <hr></hr>
      <Item/>
      <hr></hr>
      <Modal/>
      <hr></hr>
      <TaskList/>
    </div>
  )
}

export default App;
