import React from "react";
import '../styles/_portfolio.scss'

function Portfolio() {
  return (
    <div className="portfolio">
        <div className="headers">Portfolio</div>
        <div className="portfolio__flexContainer">
            <div className="portfolio__gridContainer">
                <div className="portfolio__application">
                    <p className="portfolio__name"
                    >
                    Popular E-Commerce Application
                    </p>
                    <img
                    src="https://i.imgur.com/Jp5edpX.png"
                    alt=""
                    className="portfolio__amazon"
                    ></img>
                    <img
                    src="https://i.imgur.com/9hapZw1.png"
                    alt=""
                    className="portfolio__amazon"
                    ></img>
                </div>
                <div className="portfolio__application">
                    <p className="portfolio__name">Popular Social Media Application</p>
                    <img
                    src="https://i.imgur.com/vf5UfLT.png"
                    alt=""
                    className="portfolio__facebook"
                    ></img>
                    <img
                    src="https://i.imgur.com/0uewwqm.png"
                    alt=""
                    className="portfolio__facebook"
                    ></img>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
