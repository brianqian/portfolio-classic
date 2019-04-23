import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 2rem 0;
  display: flex;
`;

const ImagesDiv = styled.div`
  flex: 4;
  position: relative;
  transition: all 0.3s;
  > img {
    min-height: 100%;
    width: 100%;
  }
`;

const MoreInfo = styled.div`
  flex: 1;
  display: ${props => (props.showInfo ? "block" : "none")};
`;

const Overlay = styled.div`
  flex: 4;
  background: rgba(0, 0, 0, 0.05);
  line-height: 4vh;
  max-width: 70vw;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: 1vw;
  font-family: "Noto Sans";
  display: flex;
  padding: 2rem;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.4s;
  opacity: ${props => (props.show ? "1" : "0")};
  z-index: ${props => (props.show ? "1" : "-1")};
`;

const TopOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), transparent);
  position: absolute;
  top: -100px;
  left: 0;
  flex: 1;
  width: 100%;
  transition: all 0.2s;
  ${Overlay}:hover & {
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
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
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
  ${Overlay}:hover & {
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

const ListItem = styled.li`
  opacity: 0;
  transition: opacity 0.4s ease-in ${props => props.time / 2}s;
  ${Overlay}:hover & {
    opacity: 1;
  }
`;

class PortflioItem extends Component {
  state = {
    showOverlay: true,
    showMoreInfo: false,
  };

  showOverlay = e => {
    this.setState({ showOverlay: true });
    const { updateSelected, index } = this.props;
    updateSelected(index);
  };

  hideOverlay = () => {
    this.setState({ showOverlay: false });
    this.props.updateSelected(null);
  };

  render() {
    const { title, description, gitURL, deployURL, stack, img1 } = this.props;
    const bulletPoints = description.split(". ").map((line, i) => (
      <ListItem key={`${title}-${i}`} time={i}>
        {line}
      </ListItem>
    ));
    return (
      <Container>
        <ImagesDiv onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
          <img src={img1} alt={`${title}`} />
          <Overlay show={this.state.showOverlay ? 1 : 0}>
            <TopOverlay>
              <div>
                <h2>{title}</h2>
                <p>
                  <img src="./img/tag.svg" alt="tag" height="15px" />
                  {stack.join(", ")}
                </p>
              </div>
            </TopOverlay>

            {/* {this.state.showOverlay && <ul>{bulletPoints}</ul>} */}

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
                <InterfaceButton
                  onClick={() => {
                    this.setState({ showMoreInfo: !this.state.showMoreInfo });
                  }}
                >
                  {this.state.showMoreInfo ? "Hide details" : "Show details"}
                </InterfaceButton>
              </Icons>
            </Footer>
          </Overlay>
        </ImagesDiv>
        <MoreInfo
          onClick={() => {
            this.setState({ showMoreInfo: false });
          }}
          showInfo={this.state.showMoreInfo}
        >
          {description}
        </MoreInfo>
      </Container>
    );
  }
}

export default PortflioItem;
