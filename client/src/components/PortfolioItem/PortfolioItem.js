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
  justify-content: center;
  /* background-color: #f5d6a7; */
`;

const DetailsContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  > * {
    color: ${props => props.theme.bg};
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
`;

const Image = styled.img`
  max-height: 60vh;
  max-width: 100%;
  /* box-shadow: -20px 20px 30px 5px #5f5f5f20, 10px -10px 30px 15px #5f5f5f20; */
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-family: ${props => props.theme.heroFont};
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
    console.log(this.props.title);
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
        </DetailsContainer>
      </Container>
    );
  }
}
