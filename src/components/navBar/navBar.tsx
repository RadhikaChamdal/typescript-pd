import React from "react";
import { Link } from "@reach/router";
import { StyledLi, StyledNav, StyledUl, Title } from "./navBar.styled";
import "./navBar.styled";

function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <Title>TYPESCRIPT/JAVASCRIPT</Title>
        <StyledLi>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="Arrays" style={{ textDecoration: "none" }}>
            Arrays
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;
