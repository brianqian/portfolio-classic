import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../Hero/Hero";
import Contact from "../Contact/Contact";
import AboutMeMain from "../AboutMe/AboutMe";
import ContentWrapper from "../../components/MainContentWrapper/MainContentWrapper";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import portfolioData from "../../data/PortfolioData";
import theme from "../../data/cssTheme";

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
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900&display=swap");
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

  onScroll = async () => {
    const about = this.aboutMeRef.current.getBoundingClientRect();
    const portfolio = this.portfolioRef.current.getBoundingClientRect();
    const contact = this.contactRef.current.getBoundingClientRect();
    let currentView = "";
    if (about.top > 0 && portfolio.top > 0) {
      currentView = "hero";
    } else if (about.top <= 0 && portfolio.top > 0) {
      currentView = "about";
    } else if (about.top <= 0 && portfolio.top <= 0 && contact.top > 0) {
      currentView = "portfolio";
    } else if (contact.top <= 0) {
      currentView = "contact";
    }
    if (currentView !== this.state.currentView) {
      await this.setState({ currentView });
    }
  };

  scrollTo = section => {
    this[section].current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const items = portfolioData.map((project, i) => {
      return <PortfolioItem key={`project-${i}`} index={i} {...project} />;
    });
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar scrollFn={this.scrollTo} currentView={this.state.currentView} />
          <Hero scrollFn={this.scrollTo} />
          <ContentWrapper title="About Me" bgColor={"secondary"} innerRef={this.aboutMeRef}>
            <AboutMeMain />
          </ContentWrapper>
          <ContentWrapper title="Work" bgColor={"primary"} innerRef={this.portfolioRef}>
            {items}
          </ContentWrapper>
          <Contact innerRef={this.contactRef} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
