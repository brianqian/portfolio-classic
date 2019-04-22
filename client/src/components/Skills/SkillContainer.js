import React, { Component } from "react";
import styled from "styled-components";
import SkillItem from "./SkillItem";
import portfolioData from "../../data/PortfolioData";

const Container = styled.div`
  height: 500px;
  width: 100%;
  background-color: ${props => props.theme.text};
  box-shadow: -2px 2px 5px gray;
  padding: 1rem;
  margin: 2rem 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  > h2 {
    grid-row: 1;
    grid-column: 1/-1;
    margin: 0;
    padding-left: 0.5rem;
  }
`;
const currentSkills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React",
  "Redux",
  "Node",
  "SQL",
  "jQuery",
  "Jest",
];

class SkillContainer extends Component {
  render() {
    const { portfolioIndex, className } = this.props;

    const skills = currentSkills.map((skill, i) => {
      let selected;
      if (portfolioIndex !== null) {
        selected = portfolioData[portfolioIndex].stack.some(item => {
          return item.substring(0, 3).toLowerCase() === skill.substring(0, 3).toLowerCase();
        });
      } else {
        selected = null;
      }
      return (
        <SkillItem
          img={`./img/skill_icons/${skill.toLowerCase()}.svg`}
          index={i}
          key={`skillbox-${skill}`}
          selected={selected}
        >
          {skill}
        </SkillItem>
      );
    });
    return (
      <Container className={className}>
        <Wrapper>
          <h2>Skills</h2>
          {skills}
        </Wrapper>
      </Container>
    );
  }
}

export default SkillContainer;
