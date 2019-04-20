import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 70vh;
  border: 1px solid black;
  box-shadow: -2px 2px 5px lightgray;
`;

class PortflioItem extends Component {
  render() {
    return <Container>{this.props.title}</Container>;
  }
}

export default PortflioItem;
