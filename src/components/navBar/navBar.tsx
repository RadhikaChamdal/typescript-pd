import React from "react";
import { Link } from "@reach/router";
import { StyledLi, StyledNav, StyledUl, StyledB } from "./navBar.styled";
import "./navBar.styled";

function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledB> TYPESCRIPT </StyledB>
        <Link to="/" style={{ textDecoration: "none" }}>
          <StyledLi>Home </StyledLi>
        </Link>
        <Link to="about" style={{ textDecoration: "none" }}>
          <StyledLi>About</StyledLi>
        </Link>
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;
