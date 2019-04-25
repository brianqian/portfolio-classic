import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 1;
  overflow: visible;
  border-bottom: 1px solid lightgray;
  @media all and (max-width: 600px) {
    height: 80vh;
  }
`;

const HeroImage = styled.img`
  min-width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
`;

class Hero extends Component {
  render() {
    return (
      <Container>
        <HeroImage
          src="./img/lost_coast.jpg"
          alt="cover"
          srcset="./img/blank-comp-1920.jpg 1920w, ./img/blank-comp-900.jpeg 900w"
          sizes="(min-width: 1400px) 1920w, (min-width: 900px) 900w"
        />

        {/* <ProfilePic /> */}
      </Container>
    );
  }
}

export default Hero;
