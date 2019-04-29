import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
  position: relative;
  /* min-height: 400px; */
  width: 250px;
  height: 500px;
  background-color: ${props => props.theme.primary};
  overflow: hidden;
  align-self: ${props => props.alignment};
  border-left: 1px solid ${props => props.theme.accent};
  border-bottom: 1px solid ${props => props.theme.accent};
`;

const Image = styled.img`
  opacity: ${props => (props.show ? "1" : "0")};
  object-fit: cover;
  min-width: 250px;
  min-height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  transition: all 1s linear ${props => props.delay}s;
`;

export default class ImagePanel extends Component {
  state = {
    showImage: [true, false, false],
  };

  componentDidMount = () => {
    this.rotateImages();
  };

  rotateImages = () => {
    const showImage = this.state.showImage;
    this.intervalID = setInterval(() => {
      showImage.push(showImage.shift());
      this.setState({ showImage });
    }, 6000);
  };
  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };
  render() {
    const { path, titles, order, alignment } = this.props;
    const { showImage } = this.state;
    return (
      <Container alignment={alignment}>
        <Image
          delay={order / 3}
          show={showImage[0]}
          src={`${path}/${titles[0] + order}.jpg`}
          alt="hero"
        />
        <Image
          delay={order / 3}
          show={showImage[1]}
          src={`${path}/${titles[1] + order}.jpg`}
          alt="hero"
        />
        <Image
          delay={order / 3}
          show={showImage[2]}
          src={`${path}/${titles[2] + order}.jpg`}
          alt="hero"
        />
      </Container>
    );
  }
}
