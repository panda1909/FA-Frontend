import { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "./../NavBar/logo.png";
import "./NavBar.scss";

function AuthNavbar() {
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
          <Link className="d-flex btn-link navbar-brand" to="/">
            <img className="img-fluid logo" src={logo} alt="" />
          </Link>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className="d-none d-md-block ms-3"></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default AuthNavbar;
