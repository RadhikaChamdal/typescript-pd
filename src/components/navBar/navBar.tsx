import React from "react";
import { Link } from "@reach/router";
import { StyledLi, StyledNav, StyledUl, Title } from "./navBar.styled";
import "./navBar.styled";

function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <Title>TYPESCRIPT</Title>
        <StyledLi>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </StyledLi>
        <StyledLi>
          <Link to="about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;
