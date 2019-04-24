import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.cardBG};
  box-shadow: ${props => props.theme.cardShadow};
  padding: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1 {
    align-self: flex-start;
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

const AboutMeMain = () => (
  <Container id="about">
    <h1>About Me</h1>
    <ProfilePic />
    <h2>Developer. Problem Solver. Aspiring philanthropist. </h2>
    <p>
      My dream in life is to have so much money that I could casually give away millions to cure
      diseases at will. But baby steps. For now, Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Doloremque hic ea sed quibusdam, magnam doloribus ad labore architecto, corrupti
      consectetur, ipsam quae quia ipsum esse dicta aperiam tenetur unde reprehenderit!Lorem Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Sit doloribus exercitationem voluptas
      accusantium officia ad omnis blanditiis rerum facere natus consectetur ratione veritatis, eum
      dicta praesentium quae sunt excepturi quaerat? Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Doloremque modi amet quidem nobis quisquam nihil culpa magni dolore fugit?
      Est eaque voluptate odit natus dicta voluptatibus culpa omnis, non quasi!
    </p>
  </Container>
);

export default AboutMeMain;
