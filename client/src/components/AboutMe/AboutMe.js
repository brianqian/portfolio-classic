import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Karla";
  background-color: ${props => props.theme.cardBG};
  padding: 1rem 1rem 1rem 2rem;
  box-shadow: ${props => props.theme.cardShadow};
  > h2 {
    margin: 0;
  }
`;

const ProfilePic = styled.div`
  box-shadow: -2px 2px 20px;
  border-radius: 50%;
  height: 35vh;
  width: 35vh;
  border: 5px solid white;
  background-image: url(./img/BrianQian.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;

function AboutMe({ className }) {
  return (
    <Container className={className}>
      <h2>About</h2>
      <p>Name: Brian Qian</p>
      <p>From: San Francisco Bay Area</p>
      <p>Went to: Santa Clara University</p>
      <p>Currently: Looking for my first junior dev position</p>
    </Container>
  );
}

export default AboutMe;
