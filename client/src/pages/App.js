import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Sidebar from "./Content/Sidebar";
import PortfolioContainer from "./Content/PortfolioContainer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../data/cssTheme";
import AboutMeMain from "../components/AboutMe/AboutMeMain";

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
::-webkit-scrollbar{
width: 0;
display: none;
}

`;

const Main = styled.main`
  height: 90vh;
  min-width: 780px;
  overflow: ${props => props.overflow};
`;

const Container = styled.div`
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  margin-top: 1rem;
  min-height: 100%;
  display: flex;
  max-width: 95%;
  max-height: 75vh;
`;

const StyledSidebar = styled(Sidebar)`
  flex: 1;
`;
const StyledPortfolio = styled(PortfolioContainer)`
  flex: 4;
`;
class App extends Component {
  state = {
    portfolioIndex: null,
    contentOverflow: "hidden",
    portfolioOverflow: "hidden",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.enableScrolling);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  enableScrolling = () => {
    const d = document.documentElement;
    //if window is scrolled to the bottom, enable portfolio scrolling
    if (d.scrollHeight - d.scrollTop === d.clientHeight) {
      this.setState({ contentOverflow: "auto" });
    } else {
      if (this.state.contentOverflow !== "hidden") this.setState({ contentOverflow: "hidden" });
    }
  };

  updatePortfolioIndex = portfolioIndex => {
    this.setState({ portfolioIndex });
  };

  onContentScroll = e => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    // console.log("content scroll (height, top, client): ", scrollHeight, scrollTop, clientHeight);
    if (scrollHeight - scrollTop === clientHeight) {
      this.setState({ portfolioOverflow: "auto" });
    } else {
      if (this.state.portfolioOverflow !== "hidden") this.setState({ portfolioOverflow: "hidden" });
    }
  };

  navBar;

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <NavBar />
          <Hero />
          <ContentWrapper>
            <StyledSidebar portfolioIndex={this.state.portfolioIndex} />
            <Main overflow={this.state.contentOverflow} onScroll={this.onContentScroll}>
              <AboutMeMain />
              <StyledPortfolio
                overflow={this.state.portfolioOverflow}
                updateFn={this.updatePortfolioIndex}
              />
            </Main>
          </ContentWrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
