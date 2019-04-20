import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 75vh;
  box-shadow: -2px 2px 5px lightgray;
  background-color: ${props => props.theme.accent};
  color: white;
  > h1 {
    margin: 0.5rem;
  }
`;

const TitleText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
`;
const HoverButton = styled.div`
  border: 1px solid white;
  padding: 2px 6px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  align-self: center;
  user-select: none;
  :active {
    background-color: white;
    color: black;
  }
`;

const Img = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* position: absolute;
  top:0;
  left: 0;*/
  width: 100%;
  height: 75vh;
`;

const Overlay = styled.div`
  position: relative;
  background-color: #000000d7;
  line-height: 30px;
  width: 100%;
  left: 0;
  top: 0;
  height: 75vh;
  color: white;
  font-size: 1.3em;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.4s;
  opacity: ${props => (props.show ? "1" : "0")};
  z-index: ${props => (props.show ? "1" : "-1")};
  > p {
    font-size: 0.7em;
    display: flex;
    align-items: center;
  }
  > h2 {
    text-decoration: underline;
    margin: 0 0.3rem;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  > a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 0 0.5rem;
    > img {
      margin: 0 0.5rem;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  width: 92%;
  margin: auto;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  font-size: 0.7em;
  bottom: -10%;
  transition: all 0.2s;
  ${Overlay}:hover & {
    transform: translateY(-100%);
  }
`;

class PortflioItem extends Component {
  state = {
    showOverlay: false,
  };

  showOverlay = e => {
    this.setState({ showOverlay: true });
  };

  hideOverlay = () => {
    this.setState({ showOverlay: false });
  };

  render() {
    const { title, description, gitURL, deployURL, stack, img1 } = this.props;
    return (
      <Container>
        <Img onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay} img={img1}>
          <Overlay show={this.state.showOverlay ? 1 : 0}>
            <h2>{title}</h2>
            <p>
              <img src="./img/tag.svg" alt="tag" height="15px" />
              {stack.join(", ")}
            </p>
            {/* <p>{description}</p> */}
            <Footer>
              <Icons>
                <a href={gitURL} rel="noopener noreferrer" target="_blank">
                  <img src="./img/social_icons/GitHub-Light-64px.png" height="20px" alt="" />
                  <p>code</p>
                </a>
                <a href={deployURL} rel="noopener noreferrer" target="_blank">
                  <img src="./img/internet.svg" height="20px" alt="" />
                  <p>deployment</p>
                </a>
                <HoverButton onClick={this.hideOverlay}>Close</HoverButton>
              </Icons>
            </Footer>
          </Overlay>
        </Img>
        {/* <TitleText>
          <h1>{title}</h1>
          <HoverButton onClick={this.hideOverlay}>
            {this.state.showOverlay ? "Close" : "Hover for More Info"}
          </HoverButton>
        </TitleText> */}
      </Container>
    );
  }
}

export default PortflioItem;
