import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 50px;
  background-color: ${props => props.theme.accent};
  color: white;
  z-index: 2;
  border-bottom: 1px solid darkgray;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Image = styled.div`
  margin-right: 2rem;
  flex: 2;
  height: 100%;
  background-color: black;
  width: 200px;
`;
const NavContent = styled.div`
  flex: 8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > * {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    height: 100%;
    :hover {
      border-bottom: 1px solid white;
    }
  }
`;

function NavBar(props) {
  return (
    <Container>
      <Image />
      <NavContent>
        <p onClick={() => props.scrollFn("aboutMeRef")}>About</p>
        <p onClick={() => props.scrollFn("portfolioRef")}>Portfolio</p>
        <p>Contact</p>
        <a href="https://github.com/brianqian/" rel="noopener noreferrer" target="_blank">
          <img src="./img/social_icons/GitHub-Light-64px.png" height="25px" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/brian-qian/" rel="noopener noreferrer" target="_blank">
          <img src="./img/social_icons/In-White-41px.png" height="25px" alt="" />
        </a>
      </NavContent>
    </Container>
  );
}

export default NavBar;
