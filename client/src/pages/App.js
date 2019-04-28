import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import PortfolioContainer from "./Content/PortfolioContainer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";
import AboutMeMain from "../components/AboutMe/AboutMeMain";

const GlobalStyle = createGlobalStyle`
body, html{
  margin: 0;
  background-color: #eaeaea;
  font-family: 'Lato';

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
::-webkit-scrollbar{
width: 0;
display: none;  
}

`;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display|Open+Sans:800|Lato");
  width: 100vw;
  /* overflow: hidden; */
  background-color: ${props => props.theme.primary};
`;

class App extends Component {
  state = {
    portfolioIndex: null,
    contentOverflow: "hidden",
    portfolioOverflow: "hidden",
    currentView: "hero",
  };

  aboutMeRef = React.createRef();
  portfolioRef = React.createRef();

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  // shouldComponentUpdate = (nextProps, nextState) => {};

  onScroll = async () => {
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
