import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const DetailsContainer = styled.div`
  flex: 7;
`;

const Image = styled.img`
  flex: 3;
`;

const Title = styled.h2`
  margin: 0;
`;

export default class PortfolioItem extends Component {
  render() {
    const { title, description, gitURL, deployURL, stack, img1 } = this.props;

    return (
      <Container>
        <DetailsContainer>
          <Image src={img1} />
          <Title>{title}</Title>
          <p>Built with: {stack}</p>
          <p>{description}</p>
        </DetailsContainer>
      </Container>
    );
  }
}
