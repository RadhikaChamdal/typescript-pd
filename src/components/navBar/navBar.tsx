import React from "react";
import { Link } from "@reach/router";
import { StyledLi, StyledNav, StyledUl } from "./navBar.styled";
import "./navBar.styled";

function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <b> TYPESCRIPT </b>
        <Link to="/">
          <StyledLi>Home</StyledLi>
        </Link>
        <Link to="about">
          <StyledLi>about</StyledLi>
        </Link>
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;
