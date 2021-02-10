import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
import '../styles/_whatIDo.scss'

const WhatIDo = () => {
    return (
        <div className="whatido">
            <div className="headers">What I Do</div>
            <div className="whatido__flexContainer">
                <div className="whatido__gridContainer">
                    <div className="whatido__icons">
                        <SiIcons.SiJavascript className="whatido__icon"/>
                        <p className="whatido__titles">Javascript/ES6 Development</p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaReact className="whatido__icon"/>
                        <p className="whatido__titles">React.JS Development</p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaNode className="whatido__icon"/>
                        <p className="whatido__titles">Node.JS w/ Express Server</p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaPython className="whatido__icon"/>
                        <p className="whatido__titles">Python Development</p>
                    </div>
                    <div className="whatido__icons">
                        <SiIcons.SiPostgresql className="whatido__icon"/>
                        <p className="whatido__titles">PostgreSQL Databases</p>
                    </div>
                    <div className="whatido__icons">
                        <SiIcons.SiMysql className="whatido__icon"/>
                        <p className="whatido__titles">MySQL Databases</p>
                    </div>
                    <div className="whatido__icons">
                        <ImIcons.ImAccessibility className="whatido__icon"/>
                        <p className="whatido__titles">Accessibility Development</p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaSass className="whatido__icon"/>
                        <p className="whatido__titles">Sass/Scss Styling</p>
                    </div>
                    <div className="whatido__icons">
                        <SiIcons.SiCss3 className="whatido__icon"/>
                        <p className="whatido__titles">CSS3 Styling</p>
                    </div>
                    <div className="whatido__icons">
                        <SiIcons.SiHeroku className="whatido__icon"/>
                        <p className="whatido__titles">Heroku Deployment</p>
                    </div>
                    <div className="whatido__icons">
                        <SiIcons.SiFirebase className="whatido__icon"/>
                        <p className="whatido__titles">Firebase Development</p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaAws className="whatido__icon"/>
                        <p className="whatido__titles">AWS S3/Cognito/RDS Development</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
