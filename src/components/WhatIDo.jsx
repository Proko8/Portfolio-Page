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
                    {/* <div className="whatido__frontend">Frontend Languages and Technologies</div> */}
                    <div className="whatido__icons">
                        <SiIcons.SiJavascript className="whatido__icon"/>
                        <p className="whatido__titles">Javascript Development</p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaReact className="whatido__icon"/>
                        <p className="whatido__titles">React.JS Development</p>
                    </div>
                    <div className="whatido__icons">
                        <ImIcons.ImAccessibility className="whatido__icon"/>
                        <p className="whatido__titles">Accessibility  Development</p>
                    </div>
                    {/* <div className="whatido__frontend">Backend Languages and Technologies</div> */}
                    <div className="whatido__icons">
                        <FaIcons.FaNode className="whatido__icon"/>
                        <p className="whatido__titles">Node.JS Development</p>
                    </div>
                    <div className="whatido__icons">
                        <FaIcons.FaPython className="whatido__icon"/>
                        <p className="whatido__titles">Python Development</p>
                    </div>
                    <div className="whatido__icons">
                        <AiIcons.AiOutlineConsoleSql className="whatido__icon"/>
                        <p className="whatido__titles">SQL Development</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
