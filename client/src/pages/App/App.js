import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import PortfolioContainer from "../Portfolio/PortfolioContainer";
import Contact from "../Contact/Contact";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../data/cssTheme";
import AboutMeMain from "../../components/AboutMe/AboutMeMain";

const GlobalStyle = createGlobalStyle`
body, html{
  margin: 0;
  font-family: ${props => props.theme.textFont};
  height: 100%;

}
a{
  color: white;
}
*{
  box-sizing: border-box;
  color: ${props => props.theme.text}
}


`;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900");
  width: 100vw;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  state = {
    currentView: "hero",
  };

  aboutMeRef = React.createRef();
  portfolioRef = React.createRef();
  contactRef = React.createRef();

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);
    // window.addEventListener("resize", this.updateViewport);
    // this.updateViewport();
  };
  componentWillUnmount() {
    window.removeEventListener("scroll");
    // window.removeEventListener("resize");
  }

  // updateViewport = () => {
  //   if (window.innerWidth > 900 && !this.state.desktopView) {
  //     this.setState({ desktopView: true });
  //   } else if (window.innerWidth <= 900 && this.state.desktopView) {
  //     this.setState({ desktopView: false });
  //   }
  // };

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
          <Hero scrollFn={this.scrollTo} />
          <AboutMeMain innerRef={this.aboutMeRef} />
          <PortfolioContainer innerRef={this.portfolioRef} />
          <Contact innerRef={this.contactRef} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
