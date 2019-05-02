import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 80vh;
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  text-align: ${props => (props.reverse ? "left" : "right")};
  @media all and (max-width: 900px) {
    flex-direction: column-reverse;
    font-size: 0.8em;
    height: 100vh;
    text-align: center;
  }
`;

const Figure = styled.figure`
  flex: 6;
  bottom: ${props => (props.showImage ? "0" : "-100%")};
  opacity: ${props => (props.showImage ? 1 : 0)};
  position: relative;
  width: auto;
  transition: all ease-in 0.75s;
  text-align: center;
  > * {
    color: ${props => props.theme.text};
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 20px;
  opacity: 0.9;
  box-shadow: -15px 20px 30px 5px ${props => props.theme.text}22,
    10px -5px 30px 10px ${props => props.theme.text}22;
  :hover {
    opacity: 1;
  }
  @media all and (max-width: 900px) {
    /* object-fit: none;
    object-position: 0% 0%; */
  }
`;

const DetailsContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  line-height: 40px;
  height: 80%;
  justify-content: space-evenly;
  @media all and (max-width: 900px) {
    flex: 7;
    justify-content: space-evenly;
  }
  > * {
    color: ${props => props.theme.text};
    font-size: 1.2em;
  }
`;

const Title = styled.header`
  display: flex;
  flex-direction: column;
  > h2 {
    color: ${props => props.theme.text};
    border-bottom: 2px solid white;
    height: 100%;
    margin: 0;
    font-size: 2em;
    padding-bottom: 2rem;
    font-family: ${props => props.theme.heroFont};
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const InterfaceButton = styled.div`
  border: 1px solid lightgray;
  background-color: ${props => props.theme.text};
  font-size: 0.75em;
  padding: 4px 8px;
  width: 160px;
  max-height: 60px;
  box-shadow: 5px 5px ${props => props.theme.secondary};
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <Title>
            <h2>{title}</h2>
          </Title>
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
