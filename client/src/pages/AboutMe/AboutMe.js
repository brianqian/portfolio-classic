import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.section`
  display: flex;
  height: auto;
  margin-top: 2rem;
  @media all and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
  h2 {
    margin: 3rem 0;
    font-size: 28px;
    @media all and (max-width: 900px) {
      margin: 2rem;
      font-size: 32px;
    }
  }
  > div {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.p`
  color: ${(props) => props.theme.pText};
  flex: 3;
  padding: 0 3rem;
  font-size: 18px;
  text-align: left;
  line-height: 35px;
  @media all and (max-width: 900px) {
    padding: 0 1rem;
    font-size: 18px;
  }
`;
const Accent = styled.span`
  color: ${(props) => props.theme.accent};
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
    <div>
      <ProfilePic />
      <h2>
        Developer. <Accent>Problem Solver.</Accent> Front-end specialist.
      </h2>
    </div>
    <Content>
      I'm a fullstack dev that works primarily with <Accent>React</Accent> for the frontend and{' '}
      <Accent>Node/MySQL</Accent> for the backend. I'm a bootcamp grad from UC Berkeley but I would
      consider myself mostly self-taught.
      <br />
      <br /> The bootcamp taught me everything leading up to React: <Accent>HTML/CSS</Accent>,
      vanilla <Accent>Javascript</Accent>, <Accent>jQuery</Accent>, and <Accent>SQL/NoSQL</Accent>{' '}
      databases. After the bootcamp, I picked up <Accent>Redux</Accent> and the{' '}
      <Accent>Context API</Accent> for state management, <Accent>Jest/Enzyme</Accent> for testing,
      and <Accent>Webpack/Babel</Accent> for build tools. I've also learned to use more modern tools
      like <Accent>Typescript</Accent> and <Accent>NextJS</Accent> for{' '}
      <Accent>server-side rendering</Accent>. As class-based architecture in React faded, I've
      familiarized myself with <Accent>hooks</Accent> and how to use them effectively.
      <br /> I'm always learning and always getting better.
    </Content>
  </Container>
);

export default AboutMeMain;
