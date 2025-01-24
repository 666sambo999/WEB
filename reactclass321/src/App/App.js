import logo from './logo.svg';
import './App.css';
import Hello from '../hello/Hello';
import Lengh from '../Lengh/lengh';
import Form from '../Form/form';
import Range from '../Range/range';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Hello name="Alfred"/>
        <Lengh></Lengh>
        <Form></Form>
        <Range></Range>
      </header>
    </div>
  );
}

export default App;
