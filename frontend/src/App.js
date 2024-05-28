
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Blog from './Components/Blog/Blog';
import AboutUs from './Components/About/AboutUs';
import Services from './Components/About/Services';


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={ <Main/>} />
      <Route path='/ourblog' element={ <Blog/>} />
      <Route path='/aboutus' element={ <AboutUs/>} />
      <Route path='/services' element={ <Services/>} />
    </Routes>
    </div>
  );
}

export default App;
