import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;

class PortflioItem extends Component {
  render() {
    return <div>{this.props.title}</div>;
  }
}

export default PortflioItem;
