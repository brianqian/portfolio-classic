import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 7vh;
  background-color: #4267b2;
  color: white;
  z-index: 2;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Image = styled.div`
  margin-right: 2rem;
  flex: 2;
  height: 100%;
  background-color: black;
  width: 200px;
`;
const NavContent = styled.div`
  flex: 8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > p {
    margin: 0 1rem;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Image />
        <NavContent>
          <p>About</p>
          <p>Portfolio</p>
          <p>Contact</p>
          <p>Github</p>
          <p>LinkedIn</p>
        </NavContent>
      </Container>
    );
  }
}

export default NavBar;
