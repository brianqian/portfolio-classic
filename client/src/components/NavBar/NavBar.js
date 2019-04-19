import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  background-color: black;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

class NavBar extends Component {
  render() {
    return (
      <Container>
        <p>About</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </Container>
    );
  }
}

export default NavBar;
