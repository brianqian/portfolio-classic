import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: ${props => props.theme.primary};
  width: 100vw;
  padding: 7rem 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2em;
  z-index: 10;
  @media all and (max-width: 900px) {
    text-align: center;
    padding: 2rem;
  }
`;

const Title = styled.header`
  border-bottom: 3px solid ${props => props.theme.tertiary};
  text-align: left;
  width: 100%;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.heroFont};
  font-size: 4em;
  margin: 1rem 0;
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
