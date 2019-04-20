import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Sidebar from "./Content/Sidebar";
import PortfolioContainer from "./Content/PortfolioContainer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Karla|Mukta');
body, html{
  margin: 0;
  min-height: 100vh;
  background-color: #eaeaea;
}
::-webkit-scrollbar{
  width: 0;
  background: transparent;
}
`;

const Container = styled.div`
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const StyledSidebar = styled(Sidebar)`
  grid-column: 1;
`;
const StyledPortfolio = styled(PortfolioContainer)`
  grid-column: 2;
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar />
          <Hero />
          <ContentWrapper>
            <StyledSidebar />
            <StyledPortfolio />
          </ContentWrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
