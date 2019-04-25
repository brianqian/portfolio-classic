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
  text-align: center;
  @media all and (max-width: 600px) {
    width: 100vw;
  }
  > h1 {
    align-self: flex-start;
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
  <Container>
    <h1 ref={props.innerRef}>About Me</h1>
    <ProfilePic />
    <h2>Developer. Problem Solver. Aspiring philanthropist. </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum temporibus eius
      explicabo deleniti quo consectetur aut modi, ducimus ipsum non. Totam nulla quo velit optio
      quia enim labore quibusdam. Voluptatum, quaerat esse nobis ipsam at consequuntur recusandae
      sunt repellendus earum voluptas. Vero distinctio, fuga dignissimos animi natus sint veritatis
      aut odit earum id numquam, alias quia commodi suscipit placeat. Expedita a maiores beatae
      inventore distinctio! At sequi natus fugiat. Sequi, eum? Repellat, nesciunt voluptatem neque
      rerum, eos autem dolorem eius vel possimus asperiores dolore inventore corporis consequuntur
      quidem consectetur.
    </p>
  </Container>
);

export default AboutMeMain;
