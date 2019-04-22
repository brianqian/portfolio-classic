import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 1;
  overflow: visible;
  border-bottom: 1px solid lightgray;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
  object-position: top;
`;

const ProfilePic = styled.div`
  position: absolute;
  bottom: -5%;
  left: 10%;
  box-shadow: -2px 2px 20px;
  border-radius: 50%;
  height: 35vh;
  width: 35vh;
  border: 5px solid white;
  background-image: url(./img/BrianQian.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
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
  > h3 {
    color: white;
    -webkit-font-smoothing: antialiased;
  }
`;
class Hero extends Component {
  render() {
    return (
      <Container>
        <HeroImage src="./img/blank-comp.jpg" alt="" />
        <ProfilePic />
        <HeroText>
          <h3>Brian Qian</h3>
        </HeroText>
      </Container>
    );
  }
}

export default Hero;
