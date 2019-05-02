import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/NewHero";
import PortfolioContainer from "./Content/PortfolioContainer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";
import AboutMeMain from "../components/AboutMe/AboutMeMain";

const GlobalStyle = createGlobalStyle`
body, html{
  margin: 0;
  font-family: ${props => props.theme.textFont};

}
a{
  color: white;
}
*{
  box-sizing: border-box;
  color: ${props => props.theme.text}
}

figcaption{
  color: ${props => props.theme.primary};
}


`;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display|Source+Sans+Pro:400,900");
  width: 100vw;
  background-color: ${props => props.theme.primary};
`;

class App extends Component {
  state = {
    portfolioIndex: null,
    currentView: "hero",
    desktopView: true,
  };

  aboutMeRef = React.createRef();
  portfolioRef = React.createRef();

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.updateViewport);
    this.updateViewport();
  };
  componentWillUnmount() {
    window.removeEventListener("scroll");
    window.removeEventListener("resize");
  }

  updateViewport = () => {
    if (window.innerWidth > 900 && !this.state.desktopView) {
      this.setState({ desktopView: true });
    } else if (window.innerWidth <= 900 && this.state.desktopView) {
      this.setState({ desktopView: false });
    }
  };

  onScroll = () => {
    const about = this.aboutMeRef.current.getBoundingClientRect();
    const portfolio = this.portfolioRef.current.getBoundingClientRect();
    let currentView = "";
    if (about.top > 0 && portfolio.top > 0) {
      currentView = "hero";
    } else if (about.top <= 0 && portfolio.top > 0) {
      currentView = "about";
    } else if (about.top <= 0 && portfolio.top <= 0) {
      currentView = "portfolio";
    }
    if (currentView !== this.state.currentView) {
      this.setState({ currentView });
    }
  };

  scrollTo = section => {
    this[section].current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar scrollFn={this.scrollTo} currentView={this.state.currentView} />
          <Hero desktopView={this.state.desktopView} />
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
