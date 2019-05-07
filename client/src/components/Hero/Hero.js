import React, { Component } from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  background-color: black;
  font-family: "Source Sans Pro";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
  @media all and (max-width: 900px) {
    height: 80vh;
  }
`;

const AspectRatioContainer = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  background-color: #000;
  position: relative;
  @media all and (max-width: 900px) {
    overflow: visible;
    padding-bottom: 0;
    height: 80vh;
  }
`;

const BackgroundImage = styled.img.attrs(({ widths, imgTitle, path }) => {
  //creates the srcSet tag and makes it easily configurable in props
  let srcSet = widths.reduce((acc, width) => {
    return acc + `${path}/${imgTitle}-${width}.jpg ${width / 2}w, `;
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
  min-width: 100vw;
  opacity: ${props => (props.loaded ? 0.5 : 1)};
  transition: opacity ease-out 2s;
`;

const Name = styled.h1`
  font-size: 6em;
  z-index: 5;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity ease-in 1s 1s;
  position: relative;
  bottom: 50px;
  text-align: center;
  @media all and (max-width: 1300px) {
    bottom: 100px;
  }
  @media all and (max-width: 1200px) {
    bottom: 150px;
  }
  @media all and (max-width: 1000px) {
    bottom: 225px;
  }
  @media all and (max-width: 900px) {
    bottom: 50px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity ease-in 0.5s 2.25s;
  position: relative;
  bottom: 50px;
  height: 100px;
  width: 100%;
  @media all and (max-width: 1300px) {
    bottom: 100px;
  }
  @media all and (max-width: 1200px) {
    bottom: 150px;
  }
  @media all and (max-width: 1000px) {
    bottom: 225px;
  }
  @media all and (max-width: 900px) {
    justify-content: space-around;
    bottom: 50px;
  }
`;

const Link = styled.p`
  font-size: 20px;
  margin: 0 2rem;
  transition: opacity ease-in 1s;
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
    background-color: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 140, 0);
  }
  :active {
    background-color: rgba(255, 140, 0, 0.25);
  }
  @media all and (max-width: 900px) {
    margin: 0;
    padding: 1rem;
    height: 75px;
    width: 75px;
    font-size: 20px;
  }
  @media all and (max-width: 400px) {
    border: none;
    padding: 0;
  }
`;

export default class NewHero extends Component {
  state = {
    loaded: false,
    imageLoaded: false,
  };
  componentDidMount = () => {
    this.triggerHeroAnimation();
  };

  triggerHeroAnimation = () => {
    this.timeout = setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  };

  triggerTextAnimation = () => {
    this.setState({ imageLoaded: true });
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeout);
  };

  render() {
    return (
      <AspectRatioContainer>
        <Container>
          <BackgroundImage
            loaded={this.state.loaded}
            path="./img/HeroImages"
            imgTitle="cityscape-sf"
            widths={[800, 1024, 1920]}
            sizes="100vw"
            alt="hero"
            onLoad={this.triggerTextAnimation}
          />
          <Name loaded={this.state.loaded}>BRIAN QIAN</Name>
          <LinkContainer loaded={this.state.imageLoaded}>
            <Link onClick={() => this.props.scrollFn("aboutMeRef")}>ABOUT</Link>
            <Link onClick={() => this.props.scrollFn("portfolioRef")}>WORK</Link>
            <Link>
              <a href="https://github.com/brianqian/" rel="noopener noreferrer" target="_blank">
                <img src={`./img/social_icons/GitHub-Light-64px.png`} height="35px" alt="" />
              </a>
            </Link>
            <Link>
              <a
                href="https://www.linkedin.com/in/brian-qian/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={`./img/social_icons/linkedin-brands.svg`} height="35px" alt="" />
              </a>
            </Link>
            <Link onClick={() => this.props.scrollFn("contactRef")}>
              <img src={`./img/mail-white.svg`} height="35px" alt="" />
            </Link>
          </LinkContainer>
        </Container>
      </AspectRatioContainer>
    );
  }
}
