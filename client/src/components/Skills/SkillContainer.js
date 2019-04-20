import React from "react";
import styled from "styled-components";
import SkillItem from "./SkillItem";

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
].map((skill, i) => (
  <SkillItem img={`./img/skill_icons/${skill.toLowerCase()}.svg`} key={i}>
    {skill}
  </SkillItem>
));

function SkillContainer({ className }) {
  return (
    <Container className={className}>
      <h2>Skills</h2>
      <Wrapper>{currentSkills}</Wrapper>
    </Container>
  );
}

export default SkillContainer;
