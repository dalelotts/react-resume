import React from 'react';
import './portfolio.scss';
import Project from "./Project";

const Portfolio = ({ portfolio = { intro: [], cards: [] } })  => {
  return (
    <section className="portfolio pt-5 pb-3">
      <div id="portfolio" className="container mb-3">
        <h2>Portfolio</h2>
        {portfolio.intro.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <div className="row">
          {portfolio.cards.map((card, index) => <div key={index} className="col-md-6 col-lg-4 d-flex align-items-stretch"><Project project={card}/></div>)}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
