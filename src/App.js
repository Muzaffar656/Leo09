import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Contact from './components/ContactPage/Contact.js';
import Work from './components/Work/Work.js';
import Services from './components/Services/Services.js';
import Clients from './components/Clients/Clients.js';
import About from './components/About/About.js';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/client' element={<Clients/>}/>
      <Route path='about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
