import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.section`
  background-color: ${(props) => props.theme[props.bgColor]};
  width: 100vw;
  max-width: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 10;
  @media all and (max-width: 900px) {
    text-align: center;
    padding: 2rem 0.25rem;
  }
  h1 {
    margin: 0 2rem;
    font-size: 64px;
  }
`;

const Title = styled.header`
  border-bottom: 3px solid ${(props) => props.theme.tertiary};
  text-align: right;
  width: 95%;
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.heroFont};
  margin: 3rem auto;
  padding-bottom: 2rem;
  @media all and (max-width: 900px) {
    text-align: center;
    border: none;
    padding: 0;
  }
`;

function MainContentWrapper(props) {
  return (
    <Container bgColor={props.bgColor} ref={props.innerRef}>
      <Title>
        <h1>{props.title}</h1>
      </Title>
      {props.children}
    </Container>
  );
}

export default MainContentWrapper;
