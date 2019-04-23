import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  transition: all 0.5s;
  opacity: ${props => (props.selected ? "1" : ".1")};
  > img {
    height: 70px;
    width: 70px;
  }
`;

class SkillItem extends Component {
  render() {
    return (
      <Container selected={this.props.selected}>
        <img src={this.props.img} alt="" />
        {this.props.children}
      </Container>
    );
  }
}

export default SkillItem;
