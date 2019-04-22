import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Karla";
  background-color: white;
  padding: 1rem 1rem 1rem 2rem;
  box-shadow: -2px 2px 5px gray;
  > h2 {
    margin: 0;
  }
`;
function AboutMe({ className }) {
  return (
    <Container className={className}>
      <h2>About</h2>
      <p>From: San Francisco Bay Area</p>
      <p>Went to: Santa Clara University</p>
      <p>Currently: Looking for my first junior dev position</p>
    </Container>
  );
}

export default AboutMe;
