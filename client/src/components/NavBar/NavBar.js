import React from "react";
import styled from "styled-components";

const Container = styled.nav.attrs(({ view, theme }) => {
  if (view === "hero") return { bgc: "transparent" };
  if (view === "about") return { bgc: theme.secondary };
  if (view === "portfolio") return { bgc: theme.primary };
})`
  display: flex;
  position: fixed;
  width: 100vw;
  height: ${props => props.theme.headerHeight};
  top: 0;
  right: 0;
  background-color: ${({ bgc }) => bgc};
  transition: all ease-in 0.2s;
  z-index: 2;
  font-family: ${props => props.theme.textFont};
`;

const NavContent = styled.div`
  flex: 8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 800;
  font-size: 1.2em;
  > * {
    /* color: ${({ theme, view }) => (view === "portfolio" ? theme.primary : "white")}; */
    color: ${props => props.theme.text};
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    height: 100%;
    :hover {
      border-bottom: 1px solid
        ${({ theme, view }) => (view === "portfolio" ? theme.primary : theme.accent)};
    }
  }
`;

function NavBar({ currentView, scrollFn }) {
  return (
    <Container view={currentView}>
      <NavContent view={currentView}>
        <p onClick={() => scrollFn("aboutMeRef")}>About</p>
        <p onClick={() => scrollFn("portfolioRef")}>Portfolio</p>
        {/* <p>Contact</p> */}
        <a href="https://github.com/brianqian/" rel="noopener noreferrer" target="_blank">
          <img
            src={`./img/social_icons/GitHub-${
              currentView === "portfolio" ? "Dark" : "Light"
            }-64px.png`}
            height="25px"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/brian-qian/" rel="noopener noreferrer" target="_blank">
          <img
            src={`./img/social_icons/In-${currentView === "portfolio" ? "" : "White-"}41px.png`}
            height="25px"
            alt=""
          />
        </a>
      </NavContent>
    </Container>
  );
}

export default NavBar;
