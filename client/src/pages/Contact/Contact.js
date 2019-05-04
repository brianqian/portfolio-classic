import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 50vh;
  width: 100vw;
  background-color: ${props => props.theme.secondary};
  padding: 3rem 7rem;
  > h1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  > label {
    width: 50%;
    min-height: 50px;
    font-size: 20px;

    > textarea {
      border-radius: 15px;
      border-color: white;
      background-color: rgba(0, 0, 0, 0.8);
      width: 100%;
      padding: 1rem;
      font-size: 15px;
      outline: 0px none transparent;
    }
  }
`;

const UserInfo = styled.input`
  border-radius: 10px;
  width: 30%;
  min-height: 25px;
  margin: 0 2rem;
  padding: 0 0.5rem;
  border-color: white;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  outline: 0px none transparent;
`;

function Contact(props) {
  return (
    <Container ref={props.innerRef}>
      <h1>Leave a message!</h1>
      <Form action="https://formspree.io/qian.brian@gmail.com" method="POST">
        <label htmlFor="contact-name">
          Name:
          <UserInfo type="text" name="name" id="contact-name" />
        </label>

        <label htmlFor="contact-email">
          Email:
          <UserInfo type="text" name="email" id="contact-email" placeholder />
        </label>
        <label htmlFor="contact-message">
          Message:
          <textarea name="message" id="contact-message" rows="10" />
        </label>
        <input
          type="submit"
          name="submit"
          id="contact-submit"
          value="Submit"
          style={{ color: "black" }}
        />
      </Form>
    </Container>
  );
}

export default Contact;
