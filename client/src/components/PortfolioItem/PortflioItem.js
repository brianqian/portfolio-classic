import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* min-height: 40vh;
  max-width: 70vw; */
  width: auto;
  height: auto;
  position: relative;
  background-image: url(${props => props.img});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Overlay = styled.div`
  background-color: #000000d7;
  line-height: 4vh;
  max-width: 70vw;
  width: auto;
  height: 100%;
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
  > * {
    margin: 0 1rem;
  }
  > a {
    color: gray;
    text-decoration: none;
    display: flex;
    align-items: center;
    :hover {
      color: white;
    }
    > img {
      margin: 0 0.5rem;
    }
  }
`;

const CloseButton = styled.div`
  border: 1px solid lightgray;
  padding: 2px 6px;
  color: gray;
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

const Footer = styled.div`
  display: flex;
  width: 92%;
  margin: auto;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  font-size: 0.7em;
  color: #485263;
  bottom: -30%;
  transition: all 0.2s;
  ${Overlay}:hover & {
    transform: translateY(-100%);
  }
`;

const ListItem = styled.li`
  opacity: 0;
  transition: opacity 0.4s ease-in ${props => props.time / 2}s;
  ${Overlay}:hover & {
    opacity: 1;
  }
`;
const Temp = styled.div`
  position: relative;
  > img {
    min-height: 100%;
    width: 100%;
  }
`;

class PortflioItem extends Component {
  state = {
    showOverlay: false,
  };

  showOverlay = () => {
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
      <Temp>
        <img src={img1} onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay} alt="" />
        {/* <Container onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay} img={img1}> */}
        {/* <Overlay show={this.state.showOverlay ? 1 : 0}>
          <h2>{title}</h2>
          <p>
            <img src="./img/tag.svg" alt="tag" height="15px" />
            {stack.join(", ")}
          </p>
          {this.state.showOverlay && <ul>{bulletPoints}</ul>}
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
              <CloseButton onClick={this.hideOverlay}>Close</CloseButton>
            </Icons>
          </Footer>
        </Overlay> */}
        {/* </Container> */}
      </Temp>
    );
  }
}

export default PortflioItem;
