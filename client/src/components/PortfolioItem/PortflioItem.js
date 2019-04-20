import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 70vh;
  border: 1px solid black;
  box-shadow: -2px 2px 5px lightgray;
  background-color: white;
  position: relative;
`;

const Img = styled.div`
  background-color: blue;
  height: 70vh;
`;

const Overlay = styled.div`
  color: white;
  position: absolute;
  background-color: #00000065;
  left: 0;
  top: 0;
  display: flex;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  flex-direction: column;
  > h1 {
    flex: 1;
  }
  > p {
    flex: 9;
  }
`;

const Icons = styled.div`
  display: flex;
  flex: 1;
  > a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    > img {
      margin: 0 0.5rem;
    }
  }
`;

class PortflioItem extends Component {
  render() {
    const { title, description, gitURL, deployURL } = this.props;
    return (
      <Container>
        <Img>.</Img>
        <Overlay>
          <h1>{title}</h1>
          <p>{description}</p>
          <Icons>
            <a href={gitURL} rel="noopener noreferrer" target="_blank">
              <img src="./img/social_icons/GitHub-Light-64px.png" height="20px" alt="" />
              <p>view code</p>
            </a>
            <a href={deployURL} rel="noopener noreferrer" target="_blank">
              <img src="./img/internet.svg" height="20px" alt="" />
              <p>view deployment</p>
            </a>
          </Icons>
        </Overlay>
      </Container>
    );
  }
}

export default PortflioItem;
