import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Technology from './components/Technology';
import Tourism from './components/Tourism';
import Blog from './components/Blog';
import Bollywood from './components/Bollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import Fullcard from './components/Fullcard';
import EmptyList from './components/EmptyList';

function App() {
  return (
    <div>
    
    <Blog>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/category/travel' element={<Tourism/>}/>
    <Route path='/category/technology' element={<Technology/>}/>
    <Route path='/category/bollywood' element={<Bollywood/>}/>
    <Route path='/category/fitness' element={<Fitness/>}/>
    <Route path='/category/food' element={<Food/>}/>
    <Route path='/category/article/:id/:category' element={<Fullcard/>}/>
    <Route path='*' element={<EmptyList/>} />
    </Routes>
    </BrowserRouter>
    
    </Blog> 
  
    </div>
  );
}

export default App;
