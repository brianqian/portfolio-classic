import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: ${props => props.theme.secondary};
  padding: ${props => props.theme.headerHeight};
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 1.2em;
  line-height: 2em;
  > h1 {
    border-bottom: 3px solid ${props => props.theme.tertiary};
    padding-bottom: 2rem;
    text-align: left;
    width: 100%;
    margin: 1rem;
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.heroFont};
    font-size: 4em;
    @media all and (max-width: 900px) {
      text-align: center;
      border: none;
    }
  }
`;

const ProfilePic = styled.div`
  box-shadow: -2px 2px 20px -3px darkgray;
  border-radius: 50%;
  height: 35vh;
  width: 35vh;
  border: 5px solid white;
  margin-top: 3rem;
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
      I'm a full-stack dev originally from the Bay Area, now based in New York. In a different life
      I worked at a talent agency but made a sharp left turn into web development. I'm a self-taught
      developer thanks to a bootcamp that got me started. All of my experience has been from
      building things from scratch, testing them, and learning from the process. Ever since learning
      React I've used it for every project and hopefully for my next job. <br />
      I'm also comfortable using jQuery, Redux, Node, SQL, MongoDB and testing frameworks like Jest
      and Enzyme.
    </p>
  </Container>
);

export default AboutMeMain;
