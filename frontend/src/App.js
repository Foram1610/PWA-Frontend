import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes,Link} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Users from './Users'
import About from './About';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About Us</Link></Nav.Link>
            <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
          </Nav>
        </Navbar> 
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users' element={ <Users />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
