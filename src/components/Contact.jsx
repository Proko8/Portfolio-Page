import React from 'react';
import '../css/Contact.scss'

const Contact = () => {
    return (
        <div>
            <a href="https://www.linkedin.com/in/paul-prokopy" className="contact__links">
                LinkedIn - linkedin.com/in/paul-prokopy
            </a>
            <br/>
            <a href="https://www.github.com/proko8" className="contact__links">
                Github - github.com/proko8
            </a>
            <br/>
            < a href="mailto:pprokopy@gmail.com" className="contact__links">pprokopy@gmail.com</a>
        </div>
    );
};

export default Contact;