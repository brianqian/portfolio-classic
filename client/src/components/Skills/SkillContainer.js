import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  > div {
    background-color: orange;
    border: 3px solid black;
    width: 100%;
    height: 100%;
  }
`;

function SkillContainer({ className }) {
  return (
    <Container className={className}>
      <h2>Skills</h2>
      <Wrapper>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Wrapper>
    </Container>
  );
}

export default SkillContainer;
