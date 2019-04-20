import React, { Component } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import SkillContainer from "../../components/Skills/SkillContainer";
import styled from "styled-components";

const Container = styled.div`
  max-width: 28vw;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
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
        <StyledSkillContainer />
      </Container>
    );
  }
}

export default Sidebar;
