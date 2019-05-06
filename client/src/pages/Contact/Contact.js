import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  /* width: 750px; */
  > label {
    grid-column: 1;
    width: 50%;
    min-height: 50px;
    font-size: 20px;
  }
  > textarea {
    border-radius: 15px;
    border-color: white;
    background-color: rgba(0, 0, 0, 0.8);
    width: 500px;
    padding: 1rem;
    font-size: 15px;
    outline: 0px none transparent;
    grid-column: 2/3;
    grid-row: 3/6;
  }
  > button {
    color: white;
    border: 1px solid white;
    grid-row: 6;
    grid-column: 2/3;
    width: 300px;
    background-color: ${props => props.theme.primary};
    border-radius: 15px;
    justify-self: center;
  }
`;

const UserInfo = styled.input`
  grid-column: 2/3;
  border-radius: 10px;
  width: 250px;
  min-height: 25px;
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
        <label htmlFor="contact-name">Name:</label>
        <UserInfo type="text" name="name" id="contact-name" />

        <label htmlFor="contact-email">Email:</label>
        <UserInfo type="text" name="email" id="contact-email" placeholder />
        <label htmlFor="contact-message">Message:</label>
        <textarea name="message" id="contact-message" rows="10" />
        {/* <input
          value="Submit"
          style={{ color: "black", gridRow: "6" }}
        /> */}
        <button type="submit">Submit</button>
      </Form>
    </Container>
  );
}

export default Contact;
