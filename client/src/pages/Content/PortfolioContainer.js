import React from "react";
import styled from "styled-components";
import portfolioData from "../../data/PortfolioData";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

const Container = styled.div`
  /* background-color: ${props => props.theme.primary}; */
  background-color: ${props => props.theme.primary};
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  > h1 {
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.heroFont};
    font-size: 4em;
    margin: 50px;
    align-self: flex-start;
    @media all and (max-width: 600px) {
      align-self: center;
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
