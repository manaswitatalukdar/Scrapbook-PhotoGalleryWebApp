import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../images/logo2.png";

const StyledBurger = styled.div`
  float: left;
  height: 35px;
  width: 45px;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    border-radius: 20px;
    margin: 6px 0;
    transition: 0.5s;
    background-color: #20292b;
    transition: 0.5s ease-in-out;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Menu = styled.ul`
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  text-align: center;
  transition: 0.5s ease-in-out;
  height: ${({ open }) => (open ? "280px" : "0px")};
`;

const Nav = styled.nav`
  padding: 10px 10px 5px 40px;
  display: inline-block;
  background-color: floralwhite;
  letter-spacing: 0.18em;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  color: #20292b;
  width: 100%;
  transition: 1s ease-in-out;
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Menu open={open}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="menuList">Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li className="menuList">About us</li>
        </Link>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <li className="menuList">Users</li>
        </Link>
        <Link to="/featured" style={{ textDecoration: "none" }}>
          <li className="menuList">Featured Photos</li>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <li className="menuList">My Profile</li>
        </Link>
      </Menu>
      <Nav open={open}>
        <span style={{ float: `left` }}>
          <StyledBurger
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div />
            <div />
            <div />
          </StyledBurger>
          <img src={image} className="logo" />
          scrapbook
        </span>

       
      </Nav>
    </React.Fragment>
  );
}

export default Navbar;
