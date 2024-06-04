import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
