import React, { Component } from "react";
import styled from "styled-components";
import portfolioData from "../../data/PortfolioData";
import PortfolioItem from "../../components/PortfolioItem/PortflioItem";

const Container = styled.div`
  /* background-color: white; */
  padding: 2rem;
  box-shadow: -4px 4px 8px lightgray;
`;

const ContentContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  max-height: 80vh;
  padding: 1rem;
  display: grid;
  grid-gap: 5rem;
  overflow: ${props => props.overflow};
`;

const items = portfolioData.map(project => <PortfolioItem {...project} />);
class PortfolioContainer extends Component {
  state = {
    overflow: "hidden",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const d = document.documentElement;
    if (d.scrollHeight - d.scrollTop === d.clientHeight) {
      this.setState({ overflow: "auto" });
    }
  };

  scrollAgain = e => {
    console.log(e.target.scrollTop);
    if (e.target.scrollTop === 0) this.setState({ overflow: "hidden" });
  };
  render() {
    return (
      <Container>
        <h1>Portfolio</h1>
        <ContentContainer
          onScroll={this.scrollAgain}
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
