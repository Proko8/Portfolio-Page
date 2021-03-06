import React from "react";
import "../styles/_about.scss";

function About() {
  return (
    <div className="about">
      <div className="about__headers">About</div>
      <div className="about__flexContainer">
        <div className="about__gridContainer">
          <p className="about__text">Hello and welcome to my portfolio. My name is Paul Prokopy, and I am a Full Stack Software Engineer, specializing in web development. Here is a little information about me, where I came from, and who I am.</p>
          <p className="about__text">I was born and raised in Cape Canaveral, Florida in 1993. In 2012 I graduated from Cocoa High School and began an 8 year career in the United States Army as an Infantryman. While in the Army, I attended and graduated from Galvanize Inc.’s 5 month long full time Web Development Immersive Course. This course specializes in teaching Full Stack Javascript development, using React.JS, Node.JS, and SQL databases. After graduating from the course, I was honorably discharged from the Army in July 2020 and began a 2 month paid internship with Galvanize Inc. At the end of the Internship I was offered a 6 month contract for a full time position, and began working as a Software Engineer for Galvanize Inc.</p>
          <p className="about__text">I work on a 7 developer development team that maintains and updates Galvanize Inc.’s Learning Management System called “Learn” along with a Node.JS server running a Slack “Help-Desk” bot, utilized by thousands of students. This job consisted with completely updating the Learn application to be completely accessible, bringing it up to WCAG 2.0 compliance, adding feature updates and bug fixes for the Node.JS server’s help-desk bot, and creating Python Scripts to run Flask servers connecting a PostgreSQL database and the Google Sheets API.</p>
      </div>
      </div>
    </div>
  );
};

export default About;
