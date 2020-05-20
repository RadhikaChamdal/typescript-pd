import styled from "styled-components";

export const nav = styled.div`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  padding: 0px;
  background: #b3e8c1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 110%;
`;

export const List = styled.ul`
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
