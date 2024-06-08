import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
