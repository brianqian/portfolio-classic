import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 2rem 0;
  display: flex;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, ${props => (props.showMore ? 0.7 : 0)});
  line-height: 4vh;
  max-width: 70vw;
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 1.2em;
  font-family: "Noto Sans";
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s;
  z-index: -1;
  opacity: 0;
  ${Container}:hover & {
    opacity: 1;
    z-index: 1;
  }
  @media all and (max-width: 600px) {
    min-width: 100vw;
    min-height: 70vh;
    font-size: 100%;
  }
`;

const ImagesDiv = styled.div`
  flex: 4;
  position: relative;
  width: 100%;

  @media all and (max-width: 600px) {
    width: 100vw;
    height: 70vh;
  }
`;

const MainImage = styled.img`
  min-height: 100%;
  width: 100%;
  ${Container}:hover & {
  }

  @media all and (max-width: 600px) {
    object-fit: cover;
    object-position: center;
  }
`;

const TopOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0), transparent);
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  transition: all 0.2s;
  ${Container}:hover & {
    transform: translateY(100px);
  }
  > div {
    padding: 1rem 2rem;
    > p {
      font-size: 0.8em;
      display: flex;
      align-items: center;
      margin: 0;
    }
    > h2 {
      text-decoration: underline;
      margin: 0 0.3rem;
    }
  }
`;

const Footer = styled.div`
  background: linear-gradient(transparent, rgba(0, 0, 0));
  height: 100px;
  display: flex;
  width: 100%;
  padding: 0 2rem;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  left: 0;
  font-size: 0.7em;
  bottom: -100px;
  transition: all 0.2s;
  ${Container}:hover & {
    transform: translateY(-100px);
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 10px;
  > * {
    margin: 0 1rem;
  }
  > a {
    text-decoration: none;
    color: lightgray;
    display: flex;
    align-items: center;
    :hover {
      color: white;
      text-decoration: underline;
    }
    > img {
      margin: 0 0.5rem;
    }
  }
`;

const InterfaceButton = styled.div`
  border: 1px solid lightgray;
  padding: 2px 6px;
  color: lightgray;
  max-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  align-self: center;
  user-select: none;
  :hover {
    color: white;
    border: 1px solid white;
  }
  :active {
    background-color: white;
    color: black;
  }
`;
const Details = styled.ul`
  padding-top: 10%;
  padding-right: 2rem;
  width: 100%;
  height: ${props => (props.show ? "100%" : "0")};
  overflow: hidden;
`;
const ListItem = styled.li`
  opacity: ${props => props.opacity};
  transition: opacity ${props => (props.show ? "0.4s" : "0s")} ease-in
    ${props => (props.show ? props.time / 2 : 0)}s;
`;

class PortflioItem extends Component {
  state = {
    showMoreInfo: false,
  };

  showMoreInfo = () => {
    this.setState({ showMoreInfo: !this.state.showMoreInfo });
  };

  hideOverlay = () => {
    this.setState({ showMoreInfo: false });
    this.props.updateSelected(null);
  };

  render() {
    const { showMoreInfo, moreInfoOpacity } = this.state;
    const { updateSelected, index } = this.props;
    const { title, description, gitURL, deployURL, stack, img1 } = this.props;
    const bulletPoints = description.split(". ").map((line, i) => (
      <ListItem show={showMoreInfo} opacity={showMoreInfo ? 1 : 0} key={`${title}-${i}`} time={i}>
        {line}
      </ListItem>
    ));
    return (
      <Container
        onMouseEnter={() => {
          updateSelected(index);
        }}
        onMouseLeave={this.hideOverlay}
      >
        <ImagesDiv>
          <MainImage src={img1} alt={`${title}`} />
          <Overlay showMore={showMoreInfo}>
            <TopOverlay>
              <div>
                <h2>{title}</h2>
                <p>
                  <img src="./img/tag.svg" alt="tag" height="15px" />
                  {stack.join(", ")}
                </p>
              </div>
            </TopOverlay>

            <Details show={showMoreInfo}>{bulletPoints}</Details>

            <Footer>
              <Icons>
                <a href={gitURL} rel="noopener noreferrer" target="_blank">
                  <img src="./img/social_icons/GitHub-Light-64px.png" height="20px" alt="" />
                  <p>code</p>
                </a>
                <a href={deployURL} rel="noopener noreferrer" target="_blank">
                  <img src="./img/internet.svg" height="20px" alt="" />
                  <p>website</p>
                </a>
                <InterfaceButton onClick={this.hideOverlay}>Close Overlay</InterfaceButton>
                <InterfaceButton onClick={this.showMoreInfo}>Details</InterfaceButton>
              </Icons>
            </Footer>
          </Overlay>
        </ImagesDiv>
      </Container>
    );
  }
}

export default PortflioItem;
