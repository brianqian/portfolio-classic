import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 1;
  overflow: visible;
  border-bottom: 1px solid lightgray;
  @media all and (max-width: 900px) {
    height: 200px;
  }
`;

const HeroImage = styled.img`
  min-width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
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

class Hero extends Component {
  render() {
    return (
      <Container>
        <HeroImage src="./img/lost_coast.jpg" alt="cover" />

        {/* <ProfilePic /> */}
      </Container>
    );
  }
}

export default Hero;
