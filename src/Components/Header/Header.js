import React from "react";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="Navigation">
      <Navbar
        style={{
          backgroundColor: "#D70F64",
          height: "85px",
        }}
      >
        <div className="container">
          <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
            <img src={Logo} alt="Logo" width="80px" />
          </NavbarBrand>
          <Nav className="mr-md-5">
            <NavItem>
              <NavLink exact to="/" className="NavLink">
                Something
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/orders" className="NavLink">
                Orders
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;