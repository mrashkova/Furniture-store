import { useState, useRef, useEffect } from "react";
import styles from "./Contact.module.css";

const formInitialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const Contact = ({ formRef }) => {
  const usernameInputRef = useRef();

  const [usernameValue, setUsernameValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const usernameChangeHandler = (e) => {
    setUsernameValue(e.target.value);
  };

  const firstNameChangeHandler = (e) => {
    setFirstNameValue(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastNameValue(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessageValue(e.target.value);
  };

  const resetFormHandler = () => {
    setUsernameValue("");
    setFirstNameValue("");
    setLastNameValue("");
    setEmailValue("");
    setMessageValue("");
  };

  const submitHandler = () => {
    console.log(usernameValue);
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);
    console.log(messageValue);

    resetFormHandler();
  };

  return (
    <>
      <h2>Contact Us</h2>
      <form ref={formRef}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={usernameValue}
            onChange={usernameChangeHandler}
            onBlur={() => console.log("onBlur")}
          />
        </div>
        <div>
          <label htmlFor="firsName">First Name</label>
          <input
            type="text"
            name="firsName"
            id="firsName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={() => console.log("onBlur")}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={() => console.log("onBlur")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={() => console.log("onBlur")}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={() => console.log("onBlur")}
          />
        </div>
        <div>
          <button type="button" onClick={submitHandler}>
            Contact Us
          </button>
          <button type="button" onClick={resetFormHandler}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
