import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 115px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${props => (props.selected ? "lightgray" : "white")};
  > img {
    height: 70px;
    width: 70px;
  }
  :hover {
    box-shadow: -2px 2px 5px 5px lightgray;
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
