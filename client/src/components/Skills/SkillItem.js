import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 115px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  > img {
    height: 70px;
    width: 70px;
    
  }
  :hover{
    box-shadow: -2px 2px 5px 5px lightgray;
  }
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000065;
  color: white;
  font-size: 1.15em;
  top: -100%;
  height: 100%;
  width: 100%;
  transition: all 0.25s;
  /* ${Container}:hover & {
    transform: translateY(100%);
  } */
  
`;

class SkillItem extends Component {
  render() {
    return (
      <Container>
        <img src={this.props.img} alt="" />
        {this.props.children}
      </Container>
    );
  }
}

export default SkillItem;
