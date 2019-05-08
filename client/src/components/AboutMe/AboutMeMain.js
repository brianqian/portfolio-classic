import React from "react";
import styled from "styled-components/macro";

const Container = styled.section`
  background-color: ${props => props.theme.secondary};
  padding: 7rem 5rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 1.2em;
  line-height: 2em;
  z-index: 10;
  @media all and (max-width: 900px) {
    padding: 2rem 0;
  }
  > p {
    font-size: 1.1em;
    padding: 0 3rem;
    @media all and (max-width: 900px) {
      padding: 0 1rem;
    }
    > span {
      color: ${props => props.theme.accent};
    }
  }
  > h1 {
    border-bottom: 3px solid ${props => props.theme.tertiary};
    padding-bottom: 2rem;
    text-align: left;
    width: 100%;
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.heroFont};
    font-size: 4em;
    @media all and (max-width: 900px) {
      text-align: center;
      border: none;
      padding: 0;
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
  background-position: left;
`;

const AboutMeMain = props => (
  <Container ref={props.innerRef}>
    <h1>About Me</h1>
    <ProfilePic />
    <h2>
      Developer.{" "}
      <span
        css={`
          color: ${props => props.theme.accent};
        `}
      >
        Problem Solver.
      </span>{" "}
      Front-end specialist.{" "}
    </h2>
    <p>
      I'm a full-stack dev originally from the Bay Area, now based in New York. In a different life
      I worked at a talent agency. There I learned how to effectively multi-task and quickly
      prioritize in high pressure situations. Although the non-stop pace of entertainment was fun,
      my need for logical problem solving and creativity were left unfulfilled. I decided to make a
      sharp left turn into computer engineering. I'm mostly a self-taught developer after taking UC
      Berkeley's bootcamp where I found a passion in programming. Nowadays I build everything I can
      in <span>React</span>, but I'm also comfortable using vanilla <span>Javascript</span> and{" "}
      <span>jQuery</span> for the front-end. As for backend technologies I'm most comfortable using{" "}
      <span>Node/Express</span> and <span>MySQL</span> but I'm also capable of using{" "}
      <span>MongoDB</span>. Beyond that I use <span>Redux</span> for state management and run
      testing with <span>Jest</span> and <span>Enzyme</span>.
    </p>
  </Container>
);

export default AboutMeMain;
