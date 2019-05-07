import React from "react";
import styled from "styled-components/macro";

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background-color: ${props => props.theme.secondary};
  padding: 3rem 7rem;
  z-index: 10;
  margin-bottom: 5rem;
  @media all and (max-width: 900px) {
    padding: 2rem 1rem;
  }
  > h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.2em;
  }
  > h3 {
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  @media all and (max-width: 900px) {
    width: 100%;
  }
  @media all and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
  > label {
    grid-column: 1;
    font-size: 20px;
    align-self: center;
  }
  > textarea {
    border-radius: 15px;
    border-color: rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.primary};
    width: 500px;
    padding: 1rem;
    font-size: 15px;
    outline: 0px none transparent;
    grid-column: 2/3;
    grid-row: 3/6;
    :focus {
      border-color: ${props => props.theme.accent};
    }
    @media all and (max-width: 900px) {
      width: 100%;
      max-width: 100%;
    }
  }
  > button {
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    grid-row: 6;
    grid-column: 2/3;
    width: 300px;
    background-color: ${props => props.theme.primary};
    border-radius: 15px;
    justify-self: center;
    font-size: 1.2em;
    :active {
      border-color: ${props => props.theme.accent};
    }
    @media all and (max-width: 900px) {
      height: 50px;
    }
  }
`;

const UserInfo = styled.input`
  grid-column: 2/3;
  border-radius: 10px;
  width: 250px;
  min-height: 25px;
  padding: 0 0.5rem;
  border-color: rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.primary};
  font-size: 15px;
  outline: 0px none transparent;
  :focus {
    border-color: ${props => props.theme.accent};
  }
  @media all and (max-width: 900px) {
    max-width: 100%;
    /* width: 100%; */
  }
`;

function Contact(props) {
  return (
    <Container ref={props.innerRef}>
      <h1>Leave a message!</h1>
      <h3>
        Email me{" "}
        <a
          css={`
            color: ${props => props.theme.accent};
          `}
          href="mailto:qian.brian@gmail.com"
        >
          here
        </a>{" "}
        or drop me a line below!
      </h3>
      <Form action="https://formspree.io/qian.brian@gmail.com" method="POST" target="_blank">
        <label htmlFor="contact-name">Name:</label>
        <UserInfo type="text" name="name" id="contact-name" />
        <label htmlFor="contact-email">Email:</label>
        <UserInfo type="text" name="email" id="contact-email" />
        <label htmlFor="contact-message">Message:</label>
        <textarea name="message" id="contact-message" rows="10" />
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}

export default Contact;
