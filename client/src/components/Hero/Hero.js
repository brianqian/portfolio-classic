import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  height: 65vh;
  position: relative;
  z-index: 1;
  background-size: 100% auto;
  background-position: top;
  background-image: url(./img/sf-city.jpg);
  overflow: visible;
`;

const ProfilePic = styled.div`
  position: relative;
  top: 55%;
  left: 8%;
  box-shadow: -2px 2px 20px;
  border-radius: 50%;
  height: 35vh;
  width: 35vh;
  border: 5px solid white;
  background-color: green;
`;

const HeroText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(3, 1fr);
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  align-items: center;
  > h1 {
    margin: 0;
  }
  & :nth-child(1) {
    grid-column: 5/-1;
    grid-row: 2;
  }
  & :nth-child(2) {
    grid-row: 3;
    grid-column: 6/-1;
  }
`;
class Hero extends Component {
  render() {
    return (
      <Container>
        <ProfilePic />
        <HeroText>
          <h1>Hi, my name is Brian</h1>
          <h1>and I'm a web developer.</h1>
        </HeroText>
      </Container>
    );
  }
}

export default Hero;
