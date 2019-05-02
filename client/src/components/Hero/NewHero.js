import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: black;
  font-family: "Source Sans Pro";
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  @media all and (max-width: 600px) {
    height: 70vh;
  }
`;

const AspectRatioContainer = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  background-color: #000;
  position: absolute;
`;

const BackgroundImage = styled.img.attrs(({ widths, imgTitle, path }) => {
  let srcSet = widths.reduce((acc, width) => {
    return acc + `${path}/${imgTitle}-${width}.jpg ${width}w, `;
  }, "");
  srcSet += `${path}/${imgTitle}.jpg 6800w`;
  return {
    src: `${path}/${imgTitle}.jpg`,
    srcSet,
  };
})`
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  /* object-fit: cover; */
  opacity: ${props => (props.loaded ? 0.5 : 1)};
  transition: opacity ease-out 2s;
`;

const Name = styled.h1`
  font-size: 4em;
  z-index: 5;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity ease-in 1s 1.25s;
  position: relative;
  bottom: 50px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity ease-in 0.5s 2.5s;
  position: relative;
  bottom: 50px;
  height: 100px;
`;

const Link = styled.p`
  font-size: 1.1em;
  grid-row: 2;
  margin: 0 2rem;
  transition: opacity ease-in 1s;
  padding: 1rem;
  user-select: none;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 50px;
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    text-decoration: underline;
    background-color: rgba(255, 255, 255, 0.15);
    border-color: orange;
  }
`;

export default class NewHero extends Component {
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
        <AspectRatioContainer>
          <BackgroundImage
            loaded={this.state.loaded}
            path="./img/HeroImages"
            imgTitle="cityscape-shanghai"
            widths={[800, 1024, 1920]}
            sizes="100vw"
            alt="hero"
          />
        </AspectRatioContainer>
        <Name loaded={this.state.loaded}>BRIAN QIAN</Name>
        <LinkContainer loaded={this.state.loaded}>
          <Link>ABOUT</Link>
          <Link>WORK</Link>
          <Link>GITHUB</Link>
          <Link>LINKEDIN</Link>
          <Link>CONTACT</Link>
        </LinkContainer>
      </Container>
    );
  }
}
