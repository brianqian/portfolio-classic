import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import ContentContainer from "./Content/ContentContainer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Economica|Markazi+Text');
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
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar />
          <Hero />
          <ContentContainer />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
