import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
import '../styles/WhatIDo.scss'

const WhatIDo = () => {
    return (
        <div className="whatido">
            <div className="headers">What I Do</div>
            <div className="whatido__flexContainer">
                <div className="whatido__gridContainer">
                    <div className="whatido__icons">
                        <SiIcons.SiJavascript size={150} className="whatido__icon"/>
                        <h4>Javascript Development</h4>
                        <p></p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaReact size={150} className="whatido__icon"/>
                        <h4>React.JS Development</h4>
                        <p></p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaPython size={150} className="whatido__icon"/>
                        <h4>Python Development</h4>
                        <p></p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaNode size={150} className="whatido__icon"/>
                        <h4>Node.JS Development</h4>
                        <p></p>
                    </div>
                    <div className="whatido__icons">
                        <AiIcons.AiOutlineConsoleSql size={150} className="whatido__icon"/>
                        <h4>SQL Development</h4>
                        <p></p>
                    </div>
                    <div className="whatido__icons">
                        <ImIcons.ImAccessibility size={150} className="whatido__icon"/>
                        <h4>Accessibility  Development</h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
