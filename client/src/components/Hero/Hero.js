import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid gray;
  overflow: visible;
  background-size: cover;
  background-repeat: no-repeat;
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

const HeroText = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-direction: column;
  /* grid-template-columns:  */
  position: absolute;
  font-family: ${props => props.theme.heroText};
  font-weight: 800;
  top: 10%;
  width: 100vw;
  padding: 3rem;
  text-align: right;
  font-size: 2em;
`;

const HeroLine1 = styled.h1`
  /* color: #e929e9; */
  color: white;
  width: 100%;
  > span {
    color: cyan;
  }
`;

class Hero extends Component {
  render() {
    return (
      <Container>
        {/* <HeroImage
          src="./img/lost_coast.jpg"
          alt="cover"
          srcset="./img/blank-comp-1920.jpg 1920w, ./img/blank-comp-900.jpeg 900w"
          sizes="(min-width: 1400px) 1920w, (min-width: 900px) 900w"
        /> */}
        <HeroText>
          <HeroLine1>
            Hi I'm <span>Brian Qian</span>
          </HeroLine1>
          <HeroLine1>
            and I'm a <span>Web Developer</span>
          </HeroLine1>
        </HeroText>
      </Container>
    );
  }
}

export default Hero;
