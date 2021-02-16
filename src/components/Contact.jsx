import React from "react";
import "../styles/_contact.scss";
import "../styles/_headers.scss";
import * as AiIcons from "react-icons/ai";

function Contact() {
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
            aria-label="Email Paul"
          >
            Email - Pprokopy@gmail.com
          </a>
        </div>
        <div>
          <AiIcons.AiOutlinePhone className="contact__icons" />
          <a className="contact__links" aria-label="Paul's Phone Number">(321) 987-1290</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
