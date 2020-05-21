import styled from "styled-components";

export const StyledNav = styled.div`
display: flex;
justify - content: space - around;
text - decoration: none;
padding: 0px;
background: #ffffff;
position: fixed;
top: 0;
left: 0;
right: 0;
width: 110 %;
`;

export const StyledUl = styled.ul`
  display: flex;
  font-family: "Roboto"
  font-size: large;
  justify-content: space-around;
  max-height: 8vh;
  place-items: center;
  list-style: none;
  text-decoration: none;
  margin-top: 10px;
  margin-right: auto;
`;
export const StyledLi = styled.li`
  // font-color: #ffffff;
  font-family: "Roboto Mono", monospace;
  font-size: 16px;
  color: #ffffff;

  text-decoration: none;
  text-align: center;
  padding: 15px 30px;
  display: block;
`;
