import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Economica|Markazi+Text');
body, html{
  margin: 0;

}
::-webkit-scrollbar{
  width: 0;
  background: transparent;
}
`;

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
