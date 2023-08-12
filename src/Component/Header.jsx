import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png"

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar sticky-top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo"
              style={{ borderRadius: "50%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="recipe">
                Recipe
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
