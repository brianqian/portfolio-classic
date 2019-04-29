import React, { Component } from "react";
import styled from "styled-components";
import ImagePanel from "./ImagePanel";

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  min-height: 600px;
  display: flex;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid gray;
  overflow: visible;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  @media all and (max-width: 600px) {
    height: 80vh;
  }
`;

const HeroText = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-direction: column;
  position: absolute;
  font-family: ${props => props.theme.heroFont};
  font-weight: 800;
  top: 10%;
  width: 100vw;
  min-width: 1600px;
  padding: 3rem;
  text-align: right;
  font-size: 2em;
`;

const HeroLine = styled.h1`
  /* color: #e929e9; */
  color: white;
  width: 100%;
  opacity: ${props => (props.load ? "1" : "0")};
  transition: all 1s linear ${props => props.delay};
  > span {
    color: ${props => props.theme.accent};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: ${props => props.theme.headerHeight};
  min-height: 90%;
  overflow: hidden;
`;

class Hero extends Component {
  state = {
    loaded: false,
  };
  componentDidMount = () => {
    this.setState({ loaded: true });
  };

  render() {
    return (
      <Container>
        <ImageContainer>
          <ImagePanel
            order="1"
            path="./img/HeroImages"
            titles={["sf", "computer", "city"]}
            alignment="flex-start"
          />
          <ImagePanel
            order="2"
            path="./img/HeroImages"
            titles={["sf", "computer", "city"]}
            alignment="center"
          />
          <ImagePanel
            order="3"
            path="./img/HeroImages"
            titles={["sf", "computer", "city"]}
            alignment="flex-end"
          />
        </ImageContainer>
        <HeroText>
          <HeroLine load={this.state.loaded} delay="0.5s">
            Hi I'm <span>Brian Qian</span>
          </HeroLine>
          <HeroLine load={this.state.loaded} delay="1.5s">
            and I'm a <span>Web Developer</span>
          </HeroLine>
        </HeroText>
      </Container>
    );
  }
}

export default Hero;
