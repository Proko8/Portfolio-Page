import React from "react";
import '../styles/_portfolio.scss'

function Portfolio() {
  return (
    <div className="portfolio">
        <div className="portfolio__headers portfolio__grid-item-1">Portfolio</div>
                    <a 
                    href="https://clone-e0cbf.web.app"
                    className="portfolio__amazon portfolio__grid-item-2"
                    target="_blank"
                    aria-label="navigates to my deployed Amazon clone"
                    >
                    Popular E-Commerce Application
                    </a>
                    <img
                    src="https://i.imgur.com/Jp5edpX.png"
                    alt="Personal project to recreate the popular e commerce website Amazon"
                    className="portfolio__amazon__picture portfolio__grid-item-3"
                    ></img>
                    <img
                    src="https://i.imgur.com/9hapZw1.png"
                    alt="Personal project to recreate the popular e commerce website Amazon"
                    className="portfolio__amazon__picture portfolio__grid-item-4"
                    ></img>
                    <p className="portfolio__facebook portfolio__grid-item-5">Popular Social Media Application</p>
                    <img
                    src="https://i.imgur.com/vf5UfLT.png"
                    alt="Personal project to recreate the popular social media website Facebook"
                    className="portfolio__facebook__picture portfolio__grid-item-6"
                    ></img>
                    <img
                    src="https://i.imgur.com/0uewwqm.png"
                    alt="Personal project to recreate the popular social media website Facebook"
                    className="portfolio__facebook__picture portfolio__grid-item-7"
                    ></img>
    </div>
  );
};

export default Portfolio;
