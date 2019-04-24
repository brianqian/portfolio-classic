import React, { Component } from "react";
import styled from "styled-components";
import portfolioData from "../../data/PortfolioData";
import PortfolioItem from "../../components/PortfolioItem/PortflioItem";

const ContentContainer = styled.div`
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow};
  background-color: ${props => props.theme.cardBG};
  width: 100%;
  min-width: 780px;
  height: 90vh;
  padding: 1rem;
  overflow: ${props => props.overflow};
`;

class PortfolioContainer extends Component {
  state = {
    scrollHeight: 0,
    scrollTop: 0,
  };
  onScroll = e => {
    e.stopPropagation();
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    // this.setState({ scrollTop });
    // console.log(scrollTop, scrollHeight, clientHeight, scrollTop + clientHeight);
  };

  render() {
    const items = portfolioData.map((project, i) => (
      <PortfolioItem
        updateSelected={this.props.updateFn}
        key={`project-${i}`}
        index={i}
        {...project}
      />
    ));
    return (
      <ContentContainer
        id="portfolio"
        onScroll={this.onScroll}
        overflow={this.props.overflow}
        className={this.props.className}
      >
        <h1>Work</h1>
        {items}
      </ContentContainer>
    );
  }
}

export default PortfolioContainer;
