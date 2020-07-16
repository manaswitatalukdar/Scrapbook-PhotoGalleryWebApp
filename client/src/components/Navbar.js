import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBurger = styled.div`
  float: left;
  height: 35px;
  width: 45px;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    border-radius: 20px;
    margin: 7px 0;
    transition: 0.5s;
    background-color: black;
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
  height: ${({ open }) => (open ? "122px" : "0px")};
`;

const Nav = styled.nav`
  padding: 10px;
  display: inline-block;
  background-color: floralwhite;
  color: black;
  width: 100%;
  transition: 0.5s ease-in-out;
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Menu open={open}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <li className="menuList">Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li className="menuList">About</li>
        </Link>
      </Menu>
      <Nav open={open}>
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
        <h3>Menu</h3>
      </Nav>
    </div>
  );
}

export default Navbar;
