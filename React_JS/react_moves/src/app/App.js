//import logo from './logo.svg';
import './App.css';

import Header from '../header/Header';
import Footer from '../loyaut/Footer';
import Main from '../loyaut/Main';
import Movie from '../component/Movie';


function App() {
  return (
    // <div className="App">
    //    <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://github.com/666sambo999/WEB.git"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Good bay Andry
    //     </a>
    //     
    //   </header>
    
    
    // </div>
    <>
      <Header></Header>
      <Main></Main>
      <Footer/>
    </>
  );
}

export default App;
