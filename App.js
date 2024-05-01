import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import './App.css';
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Blogs from './components/blog';
import Contact from './components/contact';
import NoPage from './components/nopage';
import logo from './picture/logo.png';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/nopage">NoPage</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nopage" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
