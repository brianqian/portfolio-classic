import React from "react";
import styled from "styled-components";
import portfolioData from "../../data/PortfolioData";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

const Container = styled.section`
  background-color: ${props => props.theme.primary};
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2em;
  padding: ${props => props.theme.headerHeight};
  @media all and (max-width: 900px) {
    text-align: center;
  }
  > h1 {
    border-bottom: 3px solid ${props => props.theme.tertiary};
    width: 100%;
    text-align: left;
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.heroFont};
    font-size: 4em;
    margin: 1rem;
    @media all and (max-width: 900px) {
      text-align: center;
      border: none;
    }
  }
`;

const PortfolioContainer = props => {
  const items = portfolioData.map((project, i) => {
    return <PortfolioItem key={`project-${i}`} index={i} {...project} />;
  });

  return (
    <Container ref={props.innerRef}>
      <h1>Work</h1>
      {items}
    </Container>
  );
};

export default PortfolioContainer;
