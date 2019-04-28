import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 50px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;
  > h1 {
    align-self: flex-start;
    margin: 1rem;
    font-family: ${props => props.theme.heroFont};
    font-size: 4em;
    @media all and (max-width: 600px) {
      align-self: center;
    }
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
`;

const AboutMeMain = props => (
  <Container ref={props.innerRef}>
    <h1>About Me</h1>
    <ProfilePic />
    <h2>Developer. Problem Solver. Entertainment Industry Survivor. </h2>
    <p>
      I'm a full-stack dev originally from the Bay Area, now based in New York. Previously I worked
      at a talent agency and realized I didn't have enough problem solving in my life. I attended a
      bootcamp and I've been teaching myself everything about web development ever since. Outside of
      coding I'm still a big movie nerd and when I'm with friends I love getting competitive over
      some board games.
    </p>
  </Container>
);

export default AboutMeMain;
