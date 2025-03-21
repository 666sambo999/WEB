
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Articals from './component/artical';
import About from './component/about';
import Home from './component/home';
import Layout from './component/layout';
import AboutInfo from './component/aboutInfo';

function App() {
  return (
    <div className="App">
      <ul>
        
        {/* <li><a href='/'></a></li> */}
      </ul>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/about/:id' element={<AboutInfo/>}/>
            <Route path="/artical" element={<Articals/>}/>
        </Route>    
      </Routes>
    </div>
  );
}

export default App;
