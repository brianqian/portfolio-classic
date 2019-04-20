import React, { Component } from "react";
import styled from "styled-components";
import portfolioData from "../../data/PortfolioData";
import PortfolioItem from "../../components/PortfolioItem/PortflioItem";

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const items = portfolioData.map(project => <PortfolioItem {...project} />);
class PortfolioContainer extends Component {
  render() {
    return <Container className={this.props.className}>{items}</Container>;
  }
}

export default PortfolioContainer;
