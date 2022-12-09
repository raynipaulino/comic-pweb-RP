import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#070000",
        color: "#fff",
        marginBottom: "20px",
        padding: "10px",
      }}
    >
      <Navbar.Brand
        style={{
          color: "	#FFFFFF",
          fontSize: "30px",
          fontWeight: "bold",
        }}
        as={Link}
        to="/"
      >
      Tech Comic
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          style={{
            color: "#FFFFFF",
            backgroundColor: "#070000",
            fontSize: "20px"
          }}
          as={Link}
          to="/"
        >
          Home

        </Nav.Link>
        
      </Nav>
    </Navbar>
  );
};
