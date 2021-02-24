import React, { useState, useEffect } from "react";
import "../styles/_contact.scss";
import "../styles/_headers.scss";
import * as AiIcons from "react-icons/ai";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   sendInfo
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const sendInfo = (event) => {
    event.preventDefault()
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      company.length > 0 &&
      email.length > 0
    ) {
      let firstName = firstName;
      let lastName = lastName;
      let company = company;
      let email = email;
      const options = {
        headers: {
          "Content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Referrer-Policy": "origin-when-cross-origin",
        },
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(firstName, lastName, company, email),
      };
      fetch("http://localhost:5000/dbaccess", options)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    }
  };
  
  const handleSubmit = () => {
    preventDefault();
    sendInfo();
    alert(
      "Your information has been submitted. Thank you very much, and have a great day!"
    );
  };

  return (
    <div className="contact">
      <div className="contact__header contact__grid-item-1">Contact</div>
      <br />
      <div className="contact__container contact__grid-item-2">
        <div>
          <AiIcons.AiFillLinkedin className="contact__icons" />
          <a
            href="https://www.linkedin.com/in/paul-prokopy"
            className="contact__links"
            target="_blank"
            rel="noreferrer"
            aria-label="Paul's LinkedIn Profile"
          >
            LinkedIn - https://www.linkedin.com/in/paul-prokopy
          </a>
        </div>
        <div>
          <AiIcons.AiFillGithub className="contact__icons" />
          <a
            href="https://www.github.com/proko8"
            className="contact__links"
            target="_blank"
            rel="noreferrer"
            aria-label="Paul's Github Profile"
          >
            Github - https://www.github.com/proko8
          </a>
        </div>
        <div>
          <AiIcons.AiOutlineMail className="contact__icons" />
          <a
            href="mailto:pprokopy@gmail.com"
            className="contact__links"
            target="_blank"
            rel="noreferrer"
            aria-label="Email Paul"
          >
            Email - Pprokopy@gmail.com
          </a>
        </div>
        <div>
          <AiIcons.AiOutlinePhone className="contact__icons" />
          <a className="contact__links" aria-label="Paul's Phone Number">
            (321) 987-1290
          </a>
        </div>
      </div>
      <div className="contact__form__container contact__grid-item-3">
        <div className="contact__text">
          Please submit your information to my database, and I will get back to
          you as soon as possible.
        </div>
        <div className="contact__form__group">
          First Name-
          <input
            className="contact__form__control"
            type="text"
            name="firstName"
            placeholder="First Name"
            aria-label="your first name"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="contact__form__group">
          Last Name-
          <input
            className="contact__form__control"
            type="text"
            name="lastName"
            placeholder="Last Name"
            aria-label="your last name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="contact__form__group">
          Company Name-
          <input
            className="contact__form__control"
            type="text"
            name="company"
            placeholder="Company Name"
            aria-label="name of your company"
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
        <div className="contact__form__group">
          Email Address-
          <input
            className="contact__form__control"
            type="email"
            name="email"
            placeholder="Email"
            aria-label="your email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <button
            className="contact__submitButton"
            type="button"
            onClick={
              () => handleSubmit
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
