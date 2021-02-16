import React from 'react';
import D3 from './D3.jsx';
import '../styles/_homepage.scss';

function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage__headers homepage__grid-item-1">Home</div>
                    <p className="homepage__text homepage__grid-item-2">Hello, my name is Paul, and I want to make things that can make a difference for everyone.</p> 
                    <img src="https://i.imgur.com/OSfwak9.jpg" alt="My nephew and I" className="homepage__picture homepage__grid-item-3"></img>
                    {/* <div className="homepage__grid-item-4">
                        <D3/>
                    </div> */}
        </div>
    );
};

export default Homepage;
