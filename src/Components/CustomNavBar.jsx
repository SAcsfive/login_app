import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";
import { useAuth } from "./Auth";

function CustomNavBar() {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false);

  const auth = useAuth()

  return (
    <div
      className="container-fluid"
      style={{
        display: "block",
        width: 10000,
        padding: 0,
        margin: 0,
      }}
    >
      <Navbar color="success" light expand="md">
        <NavbarBrand tag={ReactLink} to="/">
          Blog App
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/profile">
                Profile
              </NavLink>
            </NavItem>
            <NavItem></NavItem>
            {!auth.user && (
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavBar;
