import React, { Component } from "react";
import styled from "styled-components";
import portfolioData from "../../data/PortfolioData";
import PortfolioItem from "../../components/PortfolioItem/PortflioItem";

const Container = styled.div`
  padding: 2rem;
  box-shadow: -2px 2px 5px lightgray;
  background-color: white;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-height: 80vh;
  padding: 1rem;
  display: grid;
  grid-gap: 5rem;
  overflow: ${props => props.overflow};
`;

class PortfolioContainer extends Component {
  state = {
    overflow: "hidden",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.enablePortfolioScroll);
  }

  enablePortfolioScroll = () => {
    const d = document.documentElement;
    if (d.scrollHeight - d.scrollTop === d.clientHeight) {
      this.setState({ overflow: "auto" });
    }
  };

  onScroll = e => {
    // const { scrollTop, scrollHeight } = e.target;
    const { scrollTop } = e.target;
    if (scrollTop === 0) this.setState({ overflow: "hidden" });
    // const projectHeight = scrollHeight / portfolioData.length;
    // const projectIndex = Math.round(scrollTop / projectHeight);
    // this.props.updateFn(projectIndex);
  };
  render() {
    const items = portfolioData.map((project, i) => (
      <PortfolioItem updateSelected={this.props.updateFn} index={i} {...project} />
    ));
    return (
      <Container>
        <h1>Portfolio</h1>
        <ContentContainer
          onScroll={this.onScroll}
          overflow={this.state.overflow}
          className={this.props.className}
        >
          {items}
        </ContentContainer>
      </Container>
    );
  }
}

export default PortfolioContainer;