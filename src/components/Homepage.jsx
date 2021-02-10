import React from 'react';
import '../styles/_homepage.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="headers">Home</div>
            <div className="homepage__flexContainer">
                <div className="homepage__gridContainer">
                    <p>Hello, my name is Paul, and I want to make things that can make a difference for everyone.</p>
                    <img src="https://i.imgur.com/OSfwak9.jpg" alt="My nephew and I"className="homepage__picture"></img>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
