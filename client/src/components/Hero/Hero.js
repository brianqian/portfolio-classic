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
    height: 70vh;
  }
`;

const HeroText = styled.div`
  display: flex;
  justify-items: flex-start;
  flex-direction: column;
  font-family: ${props => props.theme.heroFont};
  font-weight: 800;
  width: 100%;
  padding-right: 3rem;
  text-align: right;
  font-size: 2em;
  @media all and (max-width: 900px) {
    font-size: 1.5em;
  }
`;

const HeroLine = styled.h1`
  color: white;
  width: 100%;
  opacity: ${props => (props.load ? "1" : "0")};
  transition: opacity 1s linear ${props => props.delay};
  > span {
    color: ${props => props.theme.accent};
  }
`;

const Buttons = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: 3fr 2fr 1fr 2fr;
`;
const NavButton = styled.div`
  padding: 5px 8px;
  background-color: ${props => props.theme.tertiary};
  color: ${props => props.theme.primary};
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  font-family: ${props => props.theme.textFont};
  font-weight: 400;
  grid-column: ${props => props.column};
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: ${props => props.theme.headerHeight};
  min-height: 90%;
  overflow: hidden;
  width: 100%;
`;

// ===FOR TESTING===
ImageContainer.displayName = "ImageContainer";

class Hero extends Component {
  state = {
    loaded: false,
  };
  componentDidMount = () => {
    this.setLoadedState();
  };

  setLoadedState = () => {
    this.timeout = setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  render() {
    return (
      <Container>
        {this.props.desktopView && (
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
        )}
        <HeroText>
          <HeroLine load={this.state.loaded} delay="0.5s">
            Hi I'm <span>Brian Qian</span>
          </HeroLine>
          <HeroLine load={this.state.loaded} delay="1.5s">
            and I'm a <span>Web Developer</span>
          </HeroLine>
          {/* <Buttons>
            <NavButton column={2}>ABOUT ME</NavButton>
            <NavButton column={4}>PORTFOLIO</NavButton>
          </Buttons> */}
        </HeroText>
      </Container>
    );
  }
}

export default Hero;
