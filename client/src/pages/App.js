import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Sidebar from "./Content/Sidebar";
import PortfolioContainer from "./Content/PortfolioContainer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";
import AboutMeMain from "../components/AboutMe/AboutMeMain";

const GlobalStyle = createGlobalStyle`
body, html{
  margin: 0;
  min-height: 100vh;
  background-color: #eaeaea;
  font-family: 'Open Sans';

}
a{
  color: white;
}
*{
  box-sizing: border-box;
  color: ${props => props.theme.text}
}
::-webkit-scrollbar{
width: 0;
display: none;
}

`;

const Container = styled.div`
  @import ${props => `url("https://fonts.googleapis.com/css?family=Open+Sans:400,800")`};
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.bg};
`;

class App extends Component {
  state = {
    portfolioIndex: null,
    contentOverflow: "hidden",
    portfolioOverflow: "hidden",
  };

  aboutMeRef = React.createRef();
  portfolioRef = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.enableScrolling);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  scrollTo = section => {
    this[section].current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar scrollFn={this.scrollTo} />
          <Hero />
          <AboutMeMain innerRef={this.aboutMeRef} />
          <PortfolioContainer
            overflow={this.state.portfolioOverflow}
            updateFn={this.updatePortfolioIndex}
            innerRef={this.portfolioRef}
          />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
