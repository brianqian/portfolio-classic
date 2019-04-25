import React, { Component } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import SkillContainer from "../../components/Skills/SkillContainer";
import styled from "styled-components";

const Container = styled.div`
  min-width: 360px;
  max-width: 390px;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  @media all and (max-width: 600px) {
    margin: 2rem 0;
    min-width: 100vw;
  }
`;

const StyledAboutMe = styled(AboutMe)`
  flex: 2;
`;

const StyledSkillContainer = styled(SkillContainer)`
  flex: 3;
`;

class Sidebar extends Component {
  render() {
    return (
      <Container className={this.props.className}>
        <StyledAboutMe />
        <StyledSkillContainer portfolioIndex={this.props.portfolioIndex} />
      </Container>
    );
  }
}

export default Sidebar;
