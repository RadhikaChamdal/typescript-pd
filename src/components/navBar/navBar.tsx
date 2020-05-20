import React from "react";
import { Link } from "@reach/router";
import "./navBar.styled";

function navBar() {
  return (
    <nav>
      <List>
        <b> TYPESCRIPT </b>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="about">
          <li>about</li>
        </Link>
      </List>
    </nav>
  );
}

export default navBar;
