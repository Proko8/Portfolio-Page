import React from 'react';
import '../styles/_contact.scss'
import '../styles/_headers.scss'
import * as AiIcons from 'react-icons/ai';

const Contact = () => {
    return (
        <div className="contact">
            <div className="headers">Contact</div>
            <div className="contact__flexContainer">
                <div className="contact__gridContainer">
                    <div>
                        <AiIcons.AiFillLinkedin size={50} className="contact__icons"/>
                        <a href="https://www.linkedin.com/in/paul-prokopy" className="contact__links hoverline" aria-label="Paul's LinkedIn Profile">
                            LinkedIn - https://www.linkedin.com/in/paul-prokopy
                        </a>
                    </div>
                    <div>
                        <AiIcons.AiFillGithub size={50} className="contact__icons"/>
                        <a href="https://www.github.com/proko8" className="contact__links hoverline" aria-label="Paul's Github Profile">
                            Github - https://www.github.com/proko8
                        </a>
                    </div>    
                    <div>
                        <AiIcons.AiOutlineMail size={50} className="contact__icons"/>
                        < a href="mailto:pprokopy@gmail.com" className="contact__links hoverline" aria-label="Email Paul">Email - Pprokopy@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;