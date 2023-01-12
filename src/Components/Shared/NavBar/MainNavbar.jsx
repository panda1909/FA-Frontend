import { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "./../NavBar/logo.png";
import "./NavBar.scss";

function MainNavbar() {
  const navigate = useNavigate();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {}, []);

  return (
    <Navbar
      expanded={expand}
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <div className="container section-x-margins">
        <div className="navbar-toggler-wrapper">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid logo" src={logo} alt="" />
          </Link>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="" defaultActiveKey="#home">
            <Link to="/" className="nav-link">Home</Link>
          </Nav> 
          <Nav className="">
            <Link to="/contact-us" className="nav-link">contact-us</Link>
          </Nav>
          <Nav className="">
            <Link to="/manifesto" className="nav-link">manifesto</Link>
          </Nav>
          <Nav className="">
            <Link to="/maison" className="nav-link">Maison</Link>
          </Nav>
          <Nav className="">
            <Link to="/featured-clients" className="nav-link">Featured Clients</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MainNavbar;
