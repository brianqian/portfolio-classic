import React from "react";
import styled from "styled-components";
import portfolioData from "../../data/PortfolioData";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

const Container = styled.div`
  background-color: ${props => props.theme.bg};
  width: 100%;
  height: 90vh;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(autofit, minmax(250px, 1fr));
`;

const items = portfolioData.map((project, i) => {
  return <PortfolioItem key={`project-${i}`} index={i} {...project} />;
});

const PortfolioContainer = props => {
  return (
    <Container>
      <h1 ref={props.innerRef}>Work</h1>
      {items}
    </Container>
  );
};

export default PortfolioContainer;
