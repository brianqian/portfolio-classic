import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 3rem 0;
  overflow: hidden;
  height: 70vh;
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  /* background-color: #f5d6a7; */
`;

const DetailsContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  padding: 2rem;
  > * {
    color: ${props => props.theme.text};
    font-size: 1.5em;
  }
`;

const Figure = styled.figure`
  flex: 6;
  bottom: ${props => (props.showImage ? "0" : "-100%")};
  opacity: ${props => (props.showImage ? 1 : 0)};
  position: relative;
  width: auto;
  transition: all linear 0.75s;
  > * {
    color: ${props => props.theme.text};
  }
`;

const Image = styled.img`
  max-height: 60vh;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: -20px 20px 30px 5px ${props => props.theme.accent}22,
    10px -10px 30px 15px ${props => props.theme.accent}11;
`;
const ButtonsDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin: auto;
`;
const InterfaceButton = styled.div`
  border: 1px solid lightgray;
  background-color: ${props => props.theme.text};
  font-size: 0.75em;
  padding: 4px 8px;
  width: 30%;
  box-shadow: 5px 5px ${props => props.theme.secondary};
  user-select: none;
  :hover {
    background-color: white;
  }
  :active {
    box-shadow: 5px 5px ${props => props.theme.accent};
    background-color: white;
    color: black;
  }
  > a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.heroFont};
  width: auto;
  margin: auto;
  border-bottom: 3px solid ${props => props.theme.text};
`;

export default class PortfolioItem extends Component {
  state = {
    scrolledIntoView: false,
  };
  projectRef = React.createRef();

  componentDidMount = () => {
    const options = { rootMargin: "0px", threshold: 0.3 };
    const observer = new IntersectionObserver(this.observerFn, options);
    observer.observe(this.projectRef.current);
  };

  observerFn = entries => {
    if (this.state.scrolledIntoView === true) return;
    entries.forEach(entry => this.setState({ scrolledIntoView: entry.isIntersecting }));
  };

  render() {
    const { title, description, gitURL, deployURL, stack, img1 } = this.props;

    return (
      <Container reverse={this.props.index % 2}>
        <Figure showImage={this.state.scrolledIntoView}>
          <Image src={img1} />
          <figcaption>Built with: {stack.join(", ")}</figcaption>
        </Figure>
        <DetailsContainer onClick={this.onClick} ref={this.projectRef}>
          <Title>{title}</Title>
          <p>{description}</p>
          <ButtonsDiv>
            <InterfaceButton>
              <a href={gitURL} rel="noopener noreferrer" target="_blank">
                <img src="./img/social_icons/GitHub-Dark-64px.png" height="20px" alt="" />
                Code
              </a>
            </InterfaceButton>
            <InterfaceButton>
              <a href={deployURL} rel="noopener noreferrer" target="_blank">
                <img src="./img/internet.svg" height="20px" alt="" />
                Website
              </a>
            </InterfaceButton>
          </ButtonsDiv>
        </DetailsContainer>
      </Container>
    );
  }
}
