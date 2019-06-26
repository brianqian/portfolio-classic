import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: auto;
  margin-top: 2rem;
  @media all and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
  h2 {
    grid-column: 1/5;
    grid-row: 2;
    margin: 3rem 0;
    /* font-size: 36px; */
    font-size: 2.2vw;
    @media all and (max-width: 900px) {
      margin: 2rem;
      font-size: 32px;
    }
  }
`;

const Content = styled.p`
  color: ${props => props.theme.pText};
  grid-column: 5/11;
  grid-row: 1/3;
  padding: 0 3rem;
  font-size: 1.5vw;
  text-align: left;
  line-height: 35px;
  @media all and (max-width: 900px) {
    padding: 0 1rem;
    font-size: 18px;
  }
`;
const Accent = styled.span`
  color: ${props => props.theme.accent};
`;
const ProfilePic = styled.div`
  grid-column: 1/5;
  box-shadow: -2px 2px 20px -3px darkgray;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  border: 5px solid white;
  background-image: url(./img/BrianQian.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  justify-self: center;
`;

const AboutMeMain = () => (
  <Container>
    <ProfilePic />
    <h2>
      Developer. <Accent>Problem Solver.</Accent> Front-end specialist.
    </h2>
    <Content>
      I'm a full-stack dev that loves everything about programming, but especially React and the
      front-end.
      <br />
      <br /> After finishing UC Berkeley's bootcamp, I haven't stopped picking up new skills to make
      me a more well-rounded developer. Currently I build everything I can in <Accent>React</Accent>
      , but I'm also comfortable using vanilla <Accent>Javascript</Accent> and{' '}
      <Accent>jQuery</Accent> for the front-end. As for backend technologies I'm most comfortable
      using <Accent>Node</Accent> and <Accent>MySQL</Accent> but I'm also capable of using{' '}
      <Accent>MongoDB</Accent>. Beyond that I use <Accent>Redux</Accent> for state management and
      run testing with <Accent>Jest</Accent> and <Accent>Enzyme</Accent>. I'm also familiar with
      build tools like <Accent>Weback</Accent> and <Accent>Babel</Accent>. Most recently I've been working with the <Accent>Next.js</Accent> framework and <Accent>Typescript</Accent>.
    </Content>
  </Container>
);

export default AboutMeMain;