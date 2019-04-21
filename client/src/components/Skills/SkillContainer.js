import React, { Component } from "react";
import styled from "styled-components";
import SkillItem from "./SkillItem";
import portfolioData from "../../data/PortfolioData";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.text};
  box-shadow: -2px 2px 5px gray;
  box-sizing: border-box;
  padding: 1rem;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
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
      console.log(portfolioIndex);
      if (portfolioIndex !== null) {
        selected = portfolioData[portfolioIndex].stack.some(item => {
          return item.substring(0, 3).toLowerCase() === skill.substring(0, 3).toLowerCase();
        });
      } else {
        selected = false;
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
        <h2>Skills</h2>
        <Wrapper>{skills}</Wrapper>
      </Container>
    );
  }
}

export default SkillContainer;
