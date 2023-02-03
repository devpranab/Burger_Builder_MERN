import React from "react";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { connect } from "react-redux";

// state access by redux
const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

const Header = (props) => {
  let links = null;
  if(props.token === null){
    links = (
      <Nav className="mr-md-5">
      <NavItem>
        <NavLink exact to="/login" className="NavLink">
          Login
        </NavLink>
      </NavItem>
    </Nav>
    )
  }else{
    links = (
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
      <NavItem>
        <NavLink exact to="/logout" className="NavLink">
          Logout
        </NavLink>
      </NavItem>
    </Nav>
    )
  }
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
         {links}
        </div>
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps)(Header);