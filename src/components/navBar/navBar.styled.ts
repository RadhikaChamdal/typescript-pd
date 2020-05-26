import styled from "styled-components";
import { Orange, lightGrey } from "../../constants/colors";

export const StyledNav = styled.div`
display: flex;
justify - content: space - around;
text - decoration: none;
padding: 0px;
background: ${lightGrey};
position: fixed;
top: 0;
left: 0;
right: 0;
width: 110 %;
`;

export const Title = styled.li`
  color: ${Orange};
  text-align: start;
  font-size: 25px;
`;

export const StyledUl = styled.ul`
  display: flex;
  max-height: 3vh;
  place-items: center;
  list-style: none;
  text-decoration: none;
  margin-top: 10px;
  margin-right: auto;
`;
export const StyledLi = styled.li`
  font-family: "Roboto Mono", monospace;
  font-size: 18px;
  color: #ffffff;
  text-decoration: none;
  text-align: start;
  padding: 15px 30px;
  &:hover {
    background-color: ${Orange};
    color: white;
  }
`;
