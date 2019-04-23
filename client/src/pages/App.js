import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Sidebar from "./Content/Sidebar";
import PortfolioContainer from "./Content/PortfolioContainer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Karla|Noto+Sans');
body, html{
  margin: 0;
  min-height: 100vh;
  background-color: #eaeaea;
  font-family: 'Karla';
}
a{
  color: white;
}
*{
  box-sizing: border-box;
}

`;

const Container = styled.div`
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  margin-top: 1rem;
  min-height: 100%;
  display: grid;
  max-width: 95%;
  grid-template-columns: 1fr 4fr;
  max-height: 75vh;
`;

const StyledSidebar = styled(Sidebar)`
  grid-column: 1;
`;
const StyledPortfolio = styled(PortfolioContainer)`
  grid-column: 2;
`;
class App extends Component {
  state = {
    portfolioIndex: null,
  };

  updatePortfolioIndex = portfolioIndex => {
    this.setState({ portfolioIndex });
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar />
          <Hero />
          <ContentWrapper>
            <StyledSidebar portfolioIndex={this.state.portfolioIndex} />
            <StyledPortfolio updateFn={this.updatePortfolioIndex} />
          </ContentWrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
