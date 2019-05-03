import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  background-color: black;
  font-family: "Source Sans Pro";
  /* min-height: 600px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  position: relative;
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
  opacity: ${props => (props.loaded ? 0.5 : 1)};
  transition: opacity ease-out 2s;
`;

const Name = styled.h1`
  font-size: 6em;
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
    /* border-color: ${props => props.theme.accent}; */
    border-color: darkorange;
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
            <Link>
              <img src={`./img/mail-white.svg`} height="35px" alt="" />
            </Link>
          </LinkContainer>
        </Container>
      </AspectRatioContainer>
    );
  }
}
